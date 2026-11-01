# 结构化题库

数据使用 UTF-8 JSON。题目原文是 Markdown 文字与 LaTeX；无需联网、原扫描件或旧网站源码即可重建本仓库的题文阅览页。

| 文件 | 内容 |
| --- | --- |
| [questions.json](questions.json) | 928 道题的题面、解答、来源与分类 |
| [papers.json](papers.json) | 101 套可阅览试卷及题目顺序 |
| [topics.json](topics.json) | 45 个专题及题目关联 |
| [coverage.json](coverage.json) | 完整性范围、两项缺项、核验边界与上游来源 |

## 重建与验证

在仓库根目录运行，需要 Python 3.9 或以上版本，无第三方依赖。

```sh
python3 scripts/export_markdown.py
python3 tests/validate.py
```

只检查生成结果是否与数据一致：

```sh
python3 scripts/export_markdown.py --check
```

脚本按自身位置定位仓库，也可从其他目录运行。纠错时先修改 JSON，再重新生成；`questions/`、`papers/`、`topics/` 内的 Markdown 都是生成文件。网页构建另见仓库首页；本脚本只重建 Markdown。

## 题目字段

`questions.json` 是数组，`id` 是稳定题目 ID；旧 ID 保留在 `aliases`。`paper_id` 关联试卷，`index` 与 `number` 分别表示本卷排序和原题号。分问已按原题库规则展开，相关条目保留 `parent_group` 与 `part_number`。

`question`、`answer` 保留原始 Markdown 和 LaTeX。行内公式使用 `\(...\)`，独立公式使用 `\[...\]`。导出为 GitHub Markdown 时，行内公式转为 `$` 反引号包围的数学格式；题面的块公式使用 `math` 代码块，折叠答案内的块公式使用前后空行分隔的独立 `$$` 行，以避免 GitHub 将折叠区域内的数学代码块显示成源代码。所有题目的数学内容与文字内容均参与导出前后完整性校验。

`topics` 是专题 ID 数组，`primary_topic` 是主专题。`duplicate_of` 表示已确认的同题关系，指向另一个有效题目 ID；试卷中的原入口仍保留，928 是试卷题目入口数，不是按同题关系去重后的数量。

`source_note` 是原题库核对备注，属于历史记录；其中的来源称谓不代表本仓库对网站身份的认证。`source_urls` 是公开来源入口；`source_kind`、`answer_origin`、`answer_confidence` 保留现有来源方式、独立解答和核验说明。`verification_status` 是题库当前记录的核对标记，仍不等同于全部题目通过人工终审。部分题目另有 `supplement_round`、`exam_date`。

`source_kind` 优先保留原题目或试卷的来源类型；原资料没有该字段时保留试卷的 `ingest_mode`。因此 `automatic_unreviewed` 表示原档案的自动导入标记，不覆盖随后记录的题文核对备注。Markdown 单题页与试卷页均显示这项标记。

## 试卷与专题字段

`papers.json` 中 `question_ids` 按卷内题序排列。`complete` 和 `missing_questions` 标明残卷；`coverage_note` 提供补充说明。`source_pdf_sha256` 是原归档 PDF 的摘要，不表示仓库包含对应文件。参考答案单独归档时，其公开来源也保留在相应题目的 `source_urls` 中。

`topics.json` 中 `question_ids` 对应题目的专题归属；一题可出现在多个专题，不同试卷中的同题入口继续保留。空专题也保留，便于后续补充与兼容现有分类。

归档 `year` 沿用旧库，个别延期决赛的实际举行年份以来源备注或 `exam_date` 为准。

## 内容边界

`coverage.json` 记录 100/102 套完整、101 套可阅览。第 17 届数学低年级决赛缺第二大题，第 17 届非数学 B 类决赛缺整卷；缺失的整卷不伪造空题目加入试卷数组。

公开题文重排、公开题图合订与原始 PDF 来源在原有元数据中区分。两份第 14 届第一次补赛数学类重排卷和第 17 届低年级决赛残本均保留标记。数据不含个人笔记、打卡、自评、收藏、浏览器存储或登录信息，也不包含原扫描附件。
