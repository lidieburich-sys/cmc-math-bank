#!/usr/bin/env python3
"""Check portable corpus completeness, math preservation and local page links."""
import json
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
from export_markdown import MATH, github_math, load_data, normalize_github_macros, rendered_files

RENDERED_MATH = re.compile(r'```math\n(.*?)\n```|^\$\$\n(.*?)\n\$\$(?=\n|$)|\$`(.*?)`\$', re.S | re.M)


def require(condition, message):
    if not condition:
        raise AssertionError(message)


def math_parts(source):
    return [' '.join(normalize_github_macros(match.group(1) if match.group(1) is not None else match.group(2)).split())
            for match in MATH.finditer(source)]


def rendered_math_parts(markdown, collapsed_source=None):
    parts = [next(group for group in match.groups() if group is not None).strip()
             for match in RENDERED_MATH.finditer(markdown)]
    if collapsed_source is not None:
        original = list(MATH.finditer(collapsed_source))
        require(len(parts) == len(original), 'Collapsed formula count changed')
        for index, match in enumerate(original):
            if match.group(1) is not None:
                prefix = '\\displaystyle '
                require(parts[index].startswith(prefix), 'Collapsed block is missing automatic displaystyle')
                # Remove only the prefix added for an original display block.
                # Any original displaystyle command remains part of the formula.
                parts[index] = parts[index][len(prefix):]
    return [' '.join(part.split()) for part in parts]


data = load_data()
questions, papers, topics, coverage = (data[key] for key in ('questions', 'papers', 'topics', 'coverage'))
by_id = {question['id']: question for question in questions}
paper_ids = {paper['id'] for paper in papers}
topic_ids = {topic['id'] for topic in topics}
require(len(questions) == len(by_id) == coverage['question_count'], 'Question count/IDs mismatch')
require(len(papers) == len(paper_ids) == coverage['available_paper_sets'], 'Paper count/IDs mismatch')
require(len(topics) == len(topic_ids) == coverage['topic_count'], 'Topic count/IDs mismatch')
require(sum(paper['complete'] for paper in papers) == coverage['complete_paper_sets'], 'Complete-paper count mismatch')
require(sum(gap['missing_questions'] == ['整卷'] for gap in coverage['missing']) + len(papers)
        == coverage['expected_paper_sets'], 'Coverage does not account for missing whole papers')

formulas = 0
for question in questions:
    identifier = question['id']
    require(question['paper_id'] in paper_ids, f'Unknown paper: {identifier}')
    require(question['topics'] and set(question['topics']) <= topic_ids, f'Unknown/missing topics: {identifier}')
    require(question['primary_topic'] in question['topics'], f'Primary topic mismatch: {identifier}')
    require(question['source_note'].strip(), f'Missing provenance: {identifier}')
    for field in ('question', 'answer'):
        source = question[field]
        require(source.strip(), f'Empty {field}: {identifier}')
        markdown = github_math(source, display_style='display_inline' if field == 'answer' else 'fence')
        require(not re.search(r'(?<!\\)\\operatorname\b', markdown), f'Blocked operator macro: {identifier}/{field}')
        original_parts = math_parts(source)
        require(original_parts == rendered_math_parts(markdown, source if field == 'answer' else None), f'Math changed: {identifier}/{field}')
        source_prose = MATH.sub(' FORMULA ', source)
        output_prose = RENDERED_MATH.sub(' FORMULA ', markdown)
        require(' '.join(source_prose.split()) == ' '.join(output_prose.split()), f'Prose changed: {identifier}/{field}')
        formulas += len(original_parts)
    seen = set()
    current = question
    while current.get('duplicate_of'):
        require(current['id'] not in seen, f'Duplicate cycle: {identifier}')
        seen.add(current['id'])
        require(current['duplicate_of'] in by_id, f'Unknown duplicate target: {identifier}')
        current = by_id[current['duplicate_of']]

partition = []
for paper in papers:
    members = paper['question_ids']
    require(len(members) == len(set(members)) == paper['question_count'], f'Paper member count: {paper["id"]}')
    require(set(members) <= set(by_id), f'Unknown paper question: {paper["id"]}')
    require(all(by_id[identifier]['paper_id'] == paper['id'] for identifier in members), f'Paper membership: {paper["id"]}')
    require(bool(paper['missing_questions']) != bool(paper['complete']), f'Paper completeness metadata: {paper["id"]}')
    require(re.fullmatch('[a-f0-9]{64}', paper['source_pdf_sha256']), f'Invalid PDF hash: {paper["id"]}')
    partition.extend(members)
require(len(partition) == len(set(partition)) and set(partition) == set(by_id), 'Paper membership must partition questions')
for topic in topics:
    expected = {question['id'] for question in questions if topic['id'] in question['topics']}
    require(set(topic['question_ids']) == expected, f'Topic membership mismatch: {topic["id"]}')
    require(len(topic['question_ids']) == len(expected), f'Duplicate topic entry: {topic["id"]}')

for item in [*questions, *papers]:
    for url in item['source_urls']:
        parsed = urlsplit(url)
        require(parsed.scheme in ('http', 'https') and parsed.hostname, 'Invalid source URL')
        require(not parsed.username and not parsed.password, 'Credentials in source URL')
        require(not parsed.hostname.endswith('.chatgpt.site'), 'Private site dependency')
payload = json.dumps(data, ensure_ascii=False)
require(not re.search(r'/Users/|/mnt/data/|file://|github_pat_|ghp_[A-Za-z0-9]{10}', payload), 'Local path or credential in data')

expected_files = rendered_files(data)
for name, expected in expected_files.items():
    path = ROOT / name
    require(path.is_file() and path.read_text() == expected, f'Generated file differs: {name}')
    if name.startswith('questions/') and path.name != 'README.md':
        answer = re.search(r'<details>\n<summary>.*?</summary>\n\n(.*?)\n\n</details>', expected, re.S)
        require(answer is not None, f'Missing blank lines around collapsed answer: {name}')
        require('```math' not in answer.group(1), f'Math fence inside collapsed answer: {name}')
        require(not re.search(r'^\$\$$', answer.group(1), re.M), f'Dollar block inside collapsed answer: {name}')
        require(rendered_math_parts(answer.group(1), by_id[path.stem]['answer']) == math_parts(by_id[path.stem]['answer']),
                f'Collapsed answer formula mismatch: {name}')
for directory, members in [('questions', by_id), ('papers', paper_ids), ('topics', topic_ids)]:
    actual = {path.stem for path in (ROOT / directory).glob('*.md') if path.name != 'README.md'}
    require(actual == set(members), f'Stale/missing generated pages: {directory}')

local_links = 0
markdown_files = [*expected_files, 'data/README.md']
for name in markdown_files:
    path = ROOT / name
    markdown = path.read_text()
    # Formula brackets and function calls are not Markdown links.
    markdown = RENDERED_MATH.sub('', markdown)
    markdown = re.sub(r'```.*?```', '', markdown, flags=re.S)
    for target in re.findall(r'(?<!!)\[[^\]\n]*\]\(([^\s)]+)\)', markdown):
        parsed = urlsplit(target)
        if parsed.scheme or target.startswith('#'):
            continue
        linked = (path.parent / unquote(parsed.path)).resolve()
        require(linked.is_relative_to(ROOT), f'Local link escapes repository: {name}: {target}')
        require(linked.exists(), f'Broken local link: {name}: {target}')
        local_links += 1

print(json.dumps({'questions': len(questions), 'papers': len(papers), 'topics': len(topics),
                  'complete_papers': coverage['complete_paper_sets'], 'expected_papers': coverage['expected_paper_sets'],
                  'preserved_formulas': formulas, 'generated_pages': len(expected_files),
                  'verified_local_links': local_links}, ensure_ascii=False, indent=2))
