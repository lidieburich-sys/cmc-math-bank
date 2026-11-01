#!/usr/bin/env python3
"""Generate GitHub-readable pages from data/*.json using only Python's stdlib.

Run from any directory. --check verifies generated files without changing them.
Raw question/answer text and math live in data/questions.json; never edit a
generated page to correct a question. Display math uses fences in questions and
standalone $$ delimiters inside collapsed answers; inline math uses $`...`$.
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from urllib.parse import quote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
MATH = re.compile(r'(?<!\\)\\\[(.*?)\\\]|(?<!\\)\\\((.*?)\\\)', re.S)
HTML = re.compile(r'</?(?:a|abbr|b|br|code|del|details|div|em|h[1-6]|hr|i|img|li|ol|p|pre|span|strong|sub|summary|sup|table|tbody|td|th|thead|tr|ul)(?=[\s/>])[^>]*>', re.I)
STAGE_ORDER = {'初赛': 0, '补赛': 1, '决赛': 2}
SOURCE_KINDS = {
    'automatic_unreviewed': '自动导入，原档案标记为待复核',
    'image-ai-transcribed': '由 AI 看图转写',
    'calibrated': '经校准的原档案',
    'public-transcription': '公开题文重排',
    'public-transcription-partial': '公开题文重排残本',
}


def load_data(root=ROOT):
    return {name: json.loads((root / 'data' / f'{name}.json').read_text())
            for name in ('questions', 'papers', 'topics', 'coverage')}


def github_math(text, display_style='fence'):
    """Convert only math delimiters, leaving all prose and TeX commands intact.

    No HTML stripping is performed. An HTML-bearing future source must be
    reviewed first because HTML blocks can inhibit GitHub Markdown/math parsing.
    The imported corpus contains Markdown prose and raw TeX, not rendered HTML.
    GitHub's repository preview can leave math fences inside <details> as code,
    so collapsed answers use dollar-delimited display math instead.
    """
    if display_style not in ('fence', 'dollars'):
        raise ValueError('Unknown display math style: ' + display_style)
    prose = MATH.sub('', text)
    if HTML.search(prose):
        raise ValueError('HTML in source: normalize it explicitly before exporting')

    def convert(match):
        display, inline = match.groups()
        if display is not None:
            if display_style == 'dollars':
                return '\n\n$$\n' + display.strip() + '\n$$\n\n'
            return '\n\n```math\n' + display.strip() + '\n```\n\n'
        if '`' in inline:
            raise ValueError('Backtick in inline math needs explicit handling')
        return '$`' + inline.strip() + '`$'

    result = MATH.sub(convert, text)
    if re.search(r'(?<!\\)\\[\[\(\]\)]', result):
        raise ValueError('Unmatched TeX math delimiter')
    return result.strip()


def escaped(text):
    return str(text).replace('\\', '\\\\').replace('[', '\\[').replace(']', '\\]').replace('|', '\\|')


def external_link(url, label):
    # Encode literal brackets, parentheses and whitespace, preserving escapes.
    target = quote(url, safe='/:?=&%#@!$*+,;~')
    return f'[{escaped(label)}]({target})'


def source_links(urls):
    return '\n'.join(f'- {external_link(url, f"来源 {i} · {urlsplit(url).hostname}")}'
                     for i, url in enumerate(urls, 1))


def paper_key(paper):
    return (paper['edition'], STAGE_ORDER.get(paper['stage'], 3),
            paper.get('supplement_round', 0), paper['group'], paper['id'])


def stage_name(paper):
    stage = paper['stage']
    if stage == '补赛' and paper.get('supplement_round'):
        stage += f"（第{paper['supplement_round']}次）"
    return stage


def paper_label(paper):
    return f"第{paper['edition']}届 · {stage_name(paper)} · {paper['group']}"


def rendered_files(data):
    questions, papers, topics, coverage = (data[name] for name in ('questions', 'papers', 'topics', 'coverage'))
    question_by_id = {row['id']: row for row in questions}
    paper_by_id = {row['id']: row for row in papers}
    topic_by_id = {row['id']: row for row in topics}
    files = {}
    for question in questions:
        paper = paper_by_id[question['paper_id']]
        topic_links = ' · '.join(f"[{escaped(topic_by_id[tid]['name'])}](../topics/{tid}.md)" for tid in question['topics'])
        lines = [f"# {question['title']}", '',
                 f"[全部题目](README.md) · [所属试卷](../papers/{paper['id']}.md) · [专题目录](../topics/README.md)", '',
                 f"归档年份：{question['year']} · {question['kind']} · 题号：{question['number']}", '',
                 f'专题：{topic_links}', '', '## 题目', '', github_math(question['question']), '',
                 '<details>', '<summary>展开参考解答</summary>', '', github_math(question['answer'], display_style='dollars'), '', '</details>', '',
                 '## 来源与核对说明', '',
                 f"题库核对标记：{question['verification_status']}。", '',
                 f"原档案处理标记：{SOURCE_KINDS.get(question['source_kind'], question['source_kind'])}（`{question['source_kind']}`）。后续题文核对见下列历史备注；全库并非全部题目重新人工终审。", '',
                 f"原题库核对备注（历史记录）：{question['source_note']}", '']
        if question.get('answer_origin'):
            lines.extend([f"解答来源：{question['answer_origin']}。", ''])
        if question['source_kind'] in ('public-transcription', 'public-transcription-partial'):
            lines.extend(['题面依据公开题文重排，解答包含独立推导；不是原卷扫描件。', ''])
        if not paper['complete']:
            lines.extend([f"所属试卷为残本：{paper.get('coverage_note', '缺题：' + '、'.join(paper['missing_questions']))}", ''])
        if question['source_urls']:
            lines.extend([source_links(question['source_urls']), ''])
        else:
            lines.extend(['当前未附可核实的公开原文链接，来源依据上列核对备注。', ''])
        if question.get('duplicate_of'):
            other = question_by_id[question['duplicate_of']]
            lines.extend([f"同题关联：[{escaped(other['title'])}]({other['id']}.md)。保留各试卷原有入口。", ''])
        members = paper['question_ids']
        index = members.index(question['id'])
        nav = []
        if index:
            nav.append(f"[本卷上一题]({members[index - 1]}.md)")
        if index + 1 < len(members):
            nav.append(f"[本卷下一题]({members[index + 1]}.md)")
        nav.append(f"[返回试卷](../papers/{paper['id']}.md)")
        lines.extend(['---', '', ' · '.join(nav), '', f"题目 ID：`{question['id']}`", ''])
        files[f"questions/{question['id']}.md"] = '\n'.join(lines)

    for paper in papers:
        state = '完整' if paper['complete'] else '残本，缺题：' + '、'.join(paper['missing_questions'])
        lines = [f"# {paper['title']}", '', '[试卷目录](README.md) · [专题目录](../topics/README.md)', '',
                 f"第 {paper['edition']} 届 · 归档年份 {paper['year']} · {stage_name(paper)} · {paper['group']}", '',
                 f"已收录 {paper['question_count']} 题；本卷状态：**{state}**。", '']
        if paper.get('coverage_note'):
            lines.extend([paper['coverage_note'], ''])
        lines.extend(['## 题目', '', '| 题号 | 题型 | 专题 |', '| --- | --- | --- |'])
        for identifier in paper['question_ids']:
            question = question_by_id[identifier]
            links = '、'.join(f"[{escaped(topic_by_id[tid]['name'])}](../topics/{tid}.md)" for tid in question['topics'])
            lines.append(f"| [{escaped(question['number'])}](../questions/{identifier}.md) | {escaped(question['kind'])} | {links} |")
        lines.extend(['', '## 来源', ''])
        lines.extend([f"原档案处理标记：{SOURCE_KINDS.get(paper['source_kind'], paper['source_kind'])}（`{paper['source_kind']}`）。后续题文核对备注见各题；全库并非全部题目重新人工终审。", ''])
        note = paper['source_note']
        if note and not note.startswith(('http://', 'https://')):
            lines.extend([note, ''])
        if paper['source_urls']:
            lines.extend([source_links(paper['source_urls']), ''])
        else:
            lines.extend(['当前未附可核实的公开原文链接，来源依据上列说明。', ''])
        lines.extend([f"原归档 PDF 的 SHA-256：`{paper['source_pdf_sha256']}`。本仓库保留题文与来源，不附原始扫描文件。", ''])
        files[f"papers/{paper['id']}.md"] = '\n'.join(lines)

    for topic in topics:
        lines = [f"# {topic['name']}", '', '[专题目录](README.md) · [试卷目录](../papers/README.md)', '',
                 topic['description'], '',
                 f"共 {len(topic['question_ids'])} 个试卷题目入口；同题在不同试卷中的入口保留，同一题可属于多个专题。", '',
                 '| 届次 | 归档年份 | 赛段 | 类别 | 题号 |', '| --- | --- | --- | --- | --- |']
        members = sorted((question_by_id[identifier] for identifier in topic['question_ids']),
                         key=lambda question: (*paper_key(paper_by_id[question['paper_id']]), question['index']))
        for question in members:
            paper = paper_by_id[question['paper_id']]
            lines.append(f"| 第{question['edition']}届 | {question['year']} | {stage_name(paper)} | {escaped(question['group'])} | [{escaped(question['number'])}](../questions/{question['id']}.md) |")
        if not members:
            lines.extend(['', '此分类目前没有题目。'])
        lines.append('')
        files[f"topics/{topic['id']}.md"] = '\n'.join(lines)

    lines = ['# 按试卷阅览', '', '[专题目录](../topics/README.md) · [全部题目](../questions/README.md)', '',
             f"已收录 {len(questions)} 题，{len(papers)} 套可阅览；预期 {coverage['expected_paper_sets']} 套中有 {coverage['complete_paper_sets']} 套完整。", '',
             coverage['scope'], '', '## 已知缺项', '']
    for gap in coverage['missing']:
        lines.append(f"- 第{gap['edition']}届（{gap['year']}）{gap['stage']} · {gap['group']}：缺{'、'.join(gap['missing_questions'])}。{gap['reason']}")
    lines.extend(['', '## 试卷目录', ''])
    for edition in sorted({paper['edition'] for paper in papers}):
        lines.extend([f'### 第 {edition} 届', '', '| 归档年份 | 赛段 | 类别 | 题数 | 状态 |', '| --- | --- | --- | --- | --- |'])
        for paper in sorted((p for p in papers if p['edition'] == edition), key=paper_key):
            state = '完整' if paper['complete'] else '残本'
            lines.append(f"| {paper['year']} | {stage_name(paper)} | [{escaped(paper['group'])}]({paper['id']}.md) | {paper['question_count']} | {state} |")
        lines.append('')
    lines.extend([coverage['year_note'], ''])
    files['papers/README.md'] = '\n'.join(lines)

    lines = ['# 按专题阅览', '', '[试卷目录](../papers/README.md) · [全部题目](../questions/README.md)', '',
             f"共 {len(topics)} 个专题。题目可属于多个专题；数量按试卷题目入口计。", '']
    for group in dict.fromkeys(topic['group'] for topic in topics):
        lines.extend([f'## {group}', '', '| 专题 | 题目入口数 | 范围 |', '| --- | --- | --- |'])
        for topic in topics:
            if topic['group'] == group:
                lines.append(f"| [{escaped(topic['name'])}]({topic['id']}.md) | {len(topic['question_ids'])} | {escaped(topic['description'])} |")
        lines.append('')
    files['topics/README.md'] = '\n'.join(lines)

    lines = ['# 全部题目', '', '[按专题阅览](../topics/README.md) · [按试卷阅览](../papers/README.md)', '',
             f"共 {len(questions)} 道题。每题单独成页，答案默认折叠，并附原题库核对备注及公开来源链接。", '',
             '| 试卷 | 题号入口 |', '| --- | --- |']
    for paper in sorted(papers, key=paper_key):
        links = ' · '.join(f"[{escaped(question_by_id[identifier]['number'])}]({identifier}.md)" for identifier in paper['question_ids'])
        lines.append(f"| [{escaped(paper_label(paper))}](../papers/{paper['id']}.md) | {links} |")
    lines.append('')
    files['questions/README.md'] = '\n'.join(lines)
    return files


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Check files without writing')
    args = parser.parse_args()
    expected = rendered_files(load_data())
    different = []
    for name, text in expected.items():
        path = ROOT / name
        if args.check:
            if not path.is_file() or path.read_text() != text:
                different.append(name)
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(text)
    if different:
        raise SystemExit('Generated pages differ; rerun export_markdown.py:\n' + '\n'.join(different))
    print(f"{'Checked' if args.check else 'Generated'} {len(expected)} Markdown files.")


if __name__ == '__main__':
    main()
