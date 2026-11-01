"""Compile the canonical question text into the website's bundled MathML.

Requires Pandoc only when changing question text. The committed static website
can be used directly without this tool.
"""
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]


def read_assignment(path):
    source = path.read_text(encoding='utf-8')
    return json.loads(source.split('=', 1)[1].strip().rstrip(';'))


def compile_math(source):
    result = subprocess.run(
        ['pandoc', '--from=markdown+tex_math_single_backslash', '--to=html5',
         '--mathml', '--wrap=none'],
        input=source, text=True, capture_output=True, check=True,
    )
    if result.stderr.strip():
        raise ValueError(result.stderr.strip())
    rendered = result.stdout.strip()
    visible = re.sub(r'<math\b.*?</math>', '', rendered, flags=re.S)
    if re.search(r'(?<!\\)\\[\[\(]', visible):
        raise ValueError('Uncompiled math delimiter')
    if re.search(r'\\(?:frac|dfrac|tfrac|sqrt|mathbb|mathbf|partial|alpha|beta|gamma|lambda|sum|prod|int|lim|begin|end)\b', visible):
        raise ValueError('LaTeX command outside a compiled formula')
    if re.search(r'<(?:script|iframe|object|embed)\b|\bon\w+\s*=', rendered, re.I):
        raise ValueError('Unexpected active content')
    formulas = re.findall(r'<math\b.*?</math>', rendered, re.S)
    expected = len(re.findall(r'(?<!\\)\\[\[\(]', source))
    if len(formulas) != expected:
        raise ValueError(f'Expected {expected} formulas, compiled {len(formulas)}')
    for formula in formulas:
        ET.fromstring(formula)
        if '<merror' in formula or '<annotation encoding="application/x-tex">' not in formula:
            raise ValueError('Invalid MathML or missing LaTeX annotation')
    return rendered, len(formulas)


def main():
    if not shutil.which('pandoc'):
        sys.exit('未找到 Pandoc。已提交的网页仍可直接使用；修改题文后请先安装 '
                 'Pandoc（https://pandoc.org/installing.html），再运行本脚本。未修改任何文件。')
    rows = json.loads((ROOT / 'data/questions.json').read_text(encoding='utf-8'))
    corpus = read_assignment(ROOT / 'docs/assets/js/corpus-data.js')
    canonical = {row['id'] for row in rows}
    existing = {row['id'] for row in corpus['questions']}
    if len(canonical) != len(rows) or canonical != existing:
        sys.exit('题目 ID 与网页索引不一致。新增或删除题目时，请先同步网页索引；未修改任何文件。')
    output = {}
    count = 0
    for row in rows:
        entry = {'canonical': row['id'], 'text': re.sub(r'\s+', ' ', row['question']).strip()}
        for field in ('question', 'answer'):
            if not isinstance(row.get(field), str) or not row[field].strip():
                raise ValueError(f'Missing {field}: {row["id"]}')
            entry[field], formulas = compile_math(row[field])
            count += formulas
        for identifier in [row['id'], *row.get('aliases', [])]:
            if identifier in output:
                raise ValueError('Duplicate ID or alias: ' + identifier)
            output[identifier] = entry
    target = ROOT / 'docs/assets/js/qa-data.js'
    temp = target.with_suffix('.tmp')
    temp.write_text('window.CMC_QA_LATEX=' + json.dumps(output, ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8')
    temp.replace(target)
    print(json.dumps({'questions': len(rows), 'entries_with_aliases': len(output), 'formulas': count}, ensure_ascii=False))


if __name__ == '__main__':
    main()
