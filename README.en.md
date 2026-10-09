# KuajingHot

A cross-border ecommerce news platform built on [AIHOT](https://github.com/KKKKhazix/AIHOT). Focus areas include marketplace rules, platform growth, international brand strategies, logistics, payments and merchant operations.

The project includes 21 source configurations: 16 enabled and verified, with 5 deferred pending connectivity or publication-date checks. Sources include official company and regulator channels alongside specialist trade media. Public outputs show summaries and original links; full-text publication is disabled.

See the [Chinese README](README.md) for installation, configuration and checks, the [source register](docs/source-register.md) for channel details, and the [deployment guide](docs/deploy.md) for production setup. Node.js 24.11+ and PostgreSQL 16/17 are required; Docker Compose is supported.

API credentials belong in the ignored `.env` file. Collected news, database dumps and local runtime data are not distributed with the source code. Ongoing collection and paid processing require explicit environment switches and request budgets.

Code is licensed under [MIT](LICENSE), preserving the original copyright notice of 数字生命卡兹克. Third-party content remains the property of its respective owners. Font notices are in [NOTICE](NOTICE).
