# 跨境电商热点 · KuajingHot

面向跨境出海电商的行业热点资讯平台，基于 [AIHOT](https://github.com/KKKKhazix/AIHOT) 开源框架定制。

重点关注平台规则、平台体量与增长、大品牌出海策略，补充物流履约、海外仓、支付、税务关务、独立站与经营实践。资料经过预筛、两轮评分、中文摘要和事件归组，通过网站、RSS、API 与 MCP 提供给读者。

## 已接入的信源

21 个渠道配置，其中 16 个已启用并验证真实采集，5 个因网络或日期核验问题暂缓。包括 eBay、Amazon、Alizila、Shopify、Sea、SHEIN、科沃斯等官方渠道，美国 FTC/CPSC、英国 HMRC/DBT，以及 Digital Commerce 360、Practical Ecommerce、Retail Dive、雨果跨境等行业媒体。

完整渠道、分级、采集方式与限制见 [信源登记](docs/source-register.md)。所有信源默认只公开摘要和原文链接，全文权限关闭。新闻数据库、模型回执及本机运行数据不随源码发布。

## 本地运行

需要 Node.js 24.11 以上、Docker，或自行准备 PostgreSQL 16/17。

```bash
git clone https://github.com/ecoyoung/kuajinghot.git
cd kuajinghot
node scripts/init-env.ts
```

编辑生成的 `.env`，填写自己的模型密钥并核对 provider。本站使用的 OpenAI 兼容配置如下：

```dotenv
LLM_BASE_URL=https://airouter.ziggie.cn/v1
LLM_API_KEY=填入自己的密钥
LLM_MODEL=grok-4.6
LLM_EXTRA_JSON={}
LLM_JSON_MODE=true
LLM_TIMEOUT_MS=240000
```

需要自动采集及模型处理时，配置 `COLLECT_ENABLED=true` 和 `MODEL_CALLS_ENABLED=true`，并在后台设置请求预算。处理一条资讯可能调用模型多次；预算以请求次数计。密钥只放在 `.env`，不要提交。

```bash
docker compose up -d --build
```

访问 <http://localhost:3000>，后台在 `/admin`。管理员密码由初始化脚本生成。非 Docker 部署、数据库迁移、HTTPS 与备份见 [部署文档](docs/deploy.md)。模型配置及本次处理说明见 [模型配置](docs/model-provider.md)。

## 定制与验证

- `site/`：站名、文案、品牌、模型和公开页面。
- `industry/`：分类、主题、信源、评分标准和写作提示词。
- `apps/`、`packages/`：网页、API、worker 与共享处理流程。

```bash
npm ci
npm run typecheck
DATABASE_URL=postgres://你的用户名@127.0.0.1:5432/kuajinghot_test npm test
npm run build -w @aihot/web
node --test apps/web/tests/*.test.ts
node scripts/smoke.ts --base http://localhost:3000
```

测试数据库名必须以 `_test` 或 `_ci` 结尾，数据库账号需有建库权限。smoke 需要先启动 API 和网页服务。

正式域名、运营主体、条款与隐私说明、持续运行预算以及行业评分校准仍需运营者确认，详见 [定制与上线清单](docs/cross-border.md)。

## 文档

- [行业定制](docs/customize.md) · [信源适配](docs/sources.md)
- [精选与校准](docs/selection.md) · [事件归组](docs/grouping.md)
- [架构](docs/architecture.md) · [部署](docs/deploy.md)

## 开源许可与致谢

代码沿用 [MIT 许可证](LICENSE)，保留上游作者数字生命卡兹克的版权声明。感谢 [KKKKhazix/AIHOT](https://github.com/KKKKhazix/AIHOT) 提供网站、采集、精选与事件聚合框架。字体等资源的许可见 [NOTICE](NOTICE)。第三方新闻内容的版权由原权利人持有。
