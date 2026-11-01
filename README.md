# CMC 数学竞赛题库

按知识点找题，按试卷练习，也可以直接在 GitHub 阅读题目和解析。

**[在线练题](https://lidieburich-sys.github.io/cmc-math-bank/) · [按专题阅读](topics/README.md) · [按试卷阅读](papers/README.md) · [全部题目](questions/README.md)**

当前有 **928 道题、45 个专题、101 套可练试卷**。题目页先显示题面，答案默认折叠；每题保留来源与原始 LaTeX，方便查阅、核对和纠错。

## 怎样使用

- 想练某个知识点：从[专题目录](topics/README.md)进入，或在网页中选择专题训练。
- 想按历届试卷练习：从[试卷目录](papers/README.md)选择届次、赛段和类别。
- 想查看解析：打开单题页，再展开「参考解答」。
- 发现题面、公式或解答有问题：在[纠错入口](https://github.com/lidieburich-sys/cmc-math-bank/issues/new/choose)留下题目链接、问题位置和参考依据。

网页中的收藏、掌握状态和打卡记录保存在自己的浏览器。更换设备、浏览器或从旧站迁移时，可以先在「记录与设置」导出备份，再到新网页导入。GitHub 题目阅读页不会记录做题进度。

## 收录范围

覆盖第 1—17 届常规初赛、决赛，以及第 13 届补赛、第 14 届第一次和第二次补赛。沿用原题库截至 **2026-10-21** 的整理结果，按这份范围清单计，完整收录 **100 / 102 套**。

两处缺项仍保留标记：

- 第 17 届（2026）数学类低年级组决赛：缺第二大题，现有 8 题可练。
- 第 17 届（2026）非数学 B 类决赛：完整题面待补。

详见[缺项说明](GAPS.md)。历年年份沿用题库归档，延期赛事的实际日期以题目来源为准。

部分解析包含独立推导和纠错。旧题库做过结构、重复关系与高风险分问抽查，并非每道题都重新完成了人工终审；具体来源和核验说明见各题页面及[来源说明](SOURCES.md)。

## 内容与文件

| 目录 | 内容 |
| --- | --- |
| [questions/](questions/README.md) | 每题一页，含题面、折叠答案、来源和分类 |
| [papers/](papers/README.md) | 按届次、类别和赛段浏览试卷 |
| [topics/](topics/README.md) | 45 个知识点专题索引 |
| [data/](data/) | 题目、试卷、专题和完整性数据 |
| [docs/](docs/) | GitHub Pages 在线练题网页 |
| [scripts/](scripts/) | 阅读页导出及网页题答编译工具 |

本版提供题目文字、解析和公开来源链接。原归档中的 PDF、扫描页和图像合订件没有随仓库附带。资料的来源与使用说明见 [SOURCES.md](SOURCES.md)。

## 本地打开与维护

下载或克隆仓库后，可以直接用浏览器打开 `docs/index.html`。也可以在仓库目录启动预览：

```sh
python3 -m http.server 8000 --directory docs
```

然后访问 `http://localhost:8000`。题库和公式已包含在静态文件中，阅读原来源网页仍需联网。

修改 `data/questions.json` 中的题面或答案后，用 Python 3 重建 GitHub 阅读页：

```sh
python3 scripts/export_markdown.py
python3 tests/validate.py
```

网页使用已编译的原生 MathML。同步题面和答案到网页需要先安装 [Pandoc](https://pandoc.org/installing.html)，再运行：

```sh
python3 scripts/build_web.py
```

已提交的网页可以直接使用，无需在访问时安装编译工具。新增试卷、专题或题目时，还需同步网页索引；[贡献说明](CONTRIBUTING.md)列出了检查范围。

GitHub Pages 的发布目录为 `main` 分支下的 `/docs`。
