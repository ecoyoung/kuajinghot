# 首批跨境电商信源登记与实抓结果

2026-10-09，按运营者“找一批权威信源网站或渠道接入”的指令选取。配置见 `industry/sources.json`。已注册 21 个渠道：16 个启用，5 个暂缓。16 个启用渠道完成本地真实抓取，共入库 121 条原始资料，121 条都有来源日期；随后经运营者授权完成全部处理：92 条公开资讯，其中 13 条精选，29 条预筛排除；没有失败或待处理资料。每源首次最多导入 8 条。

## 已启用的 16 个渠道

| 信源 | 分级 | 重点用途 | 实抓列表数 / 首次入库 | 频率 |
|---|---|---|---|---|
| [eBay 官方新闻](https://www.ebayinc.com/stories/news/rss/) | T1 | 跨境电商、官方 | 30 / 8 | 120 分钟 |
| [Alizila · 阿里巴巴官方资讯](https://www.alizila.com/feed/) | T1 | 跨境电商、官方 | 10 / 8 | 120 分钟 |
| [Digital Commerce 360](https://www.digitalcommerce360.com/feed/) | T2 | 跨境电商、行业媒体 | 10 / 8 | 120 分钟 |
| [Practical Ecommerce](https://www.practicalecommerce.com/feed) | T2 | 跨境电商、行业媒体 | 30 / 8 | 120 分钟 |
| [Shopify 官方财报与新闻](https://www.shopify.com/news/category/press-releases) | T1 | 官方、财报、市场增长 | 7 / 7 | 240 分钟 |
| [Shopify 商家产品更新](https://changelog.shopify.com/feed.xml) | T1 | 官方、经营服务 | 1609 / 8 | 240 分钟 |
| [SHEIN 集团官方新闻](https://www.sheingroup.com/newsroom) | T1 | 官方、品牌策略 | 124 / 8 | 240 分钟 |
| [美国 FTC 监管公告](https://www.ftc.gov/feeds/press-release.xml) | T1 | 监管、平台规则 | 10 / 8 | 240 分钟 |
| [美国 CPSC 产品召回](https://www.cpsc.gov/Newsroom/CPSC-RSS-Feed/Recalls-RSS) | T1 | 监管、商品合规 | 40 / 8 | 240 分钟 |
| [英国 HMRC 税务与关务](https://www.gov.uk/government/organisations/hm-revenue-customs.atom) | T1 | 监管、税务关务 | 20 / 8 | 240 分钟 |
| [英国商业贸易部公告](https://www.gov.uk/government/organisations/department-for-business-and-trade.atom) | T1 | 监管、市场扩张 | 20 / 8 | 240 分钟 |
| [雨果跨境 · 行业报道](https://www.cifnews.com/) | T2 | 行业媒体、跨境电商 | 20 / 8 | 240 分钟 |
| [Retail Dive · 零售业报道](https://www.retaildive.com/feeds/news/) | T2 | 行业媒体、市场增长 | 10 / 8 | 240 分钟 |
| [Sea / Shopee 投资者公告](https://www.sea.com/api/invest/news?page=1&size=20) | T1 | 官方、财报、市场增长 | 20 / 8 | 360 分钟 |
| [Amazon 官方卖家与业务新闻](https://www.aboutamazon.com/news/small-business) | T1 | 官方、平台规则、市场增长 | 11 / 8 | 240 分钟 |
| [科沃斯全球官方新闻](https://www.ecovacs.com/global/newsroom/official-news) | T1 | 官方、品牌策略、市场扩张 | 11 / 2 | 360 分钟 |

“列表数”是订阅或列表返回的候选数量，不是新增热点数；Shopify 更新 RSS 包含长历史档案，框架首次导入上限与日期窗口负责限制回填。Atom 中只有更新时间的条目按源提供的更新时间入库；英国部门流包含指引更新，需模型区分新规发布与旧指引修订。

## 已配置但暂缓启用的 5 个渠道

| 信源 | 原因 |
|---|---|
| [PDD Holdings 投资者公告](https://investor.pddholdings.com/rss/news-releases.xml) | 网页与 RSS 内容可读取；本机受保护的代理请求反复超时/连接失败，暂不启用。 |
| [Amazon 美国站卖家公告](https://sell.amazon.com/blog/announcements) | 公开 HTML 可解析 11 条并含日期；本机代理实抓返回 HTTP 200 但仅有 <!doctype html>，暂不启用。 |
| [安克创新官方新闻与业绩](https://www.anker.com.cn/posts) | 官网内嵌 JSON 有 96 条新闻记录；本机 .cn 域名经 Fake-IP 解析，被私网保护阻止，暂不启用。 |
| [美国 CPSC 监管新闻](https://www.cpsc.gov/Newsroom/CPSC-RSS-Feed/News-RSS) | RSS 可解析 50 条，但缺少发布日期；尚未核验可靠的详情日期规则，暂不启用。 |
| [中国商务部政策发布](https://www.mofcom.gov.cn/zcfb/index.html) | 公开列表可解析 8 条并含日期；本机 .cn 域名经 Fake-IP 解析，被私网保护阻止，暂不启用。 |

这五项均为 disabled 配置，不能算作自动采集成功。安克与商务部列表/JSON 映射已使用真实公开响应核验，仍需在具有真实公网 DNS 的部署环境执行受保护的实抓，成功后从后台启用。不要通过打开 ALLOW_PRIVATE_NETWORK_FETCH 绕过检查。Amazon 卖家博客暂缓期间，已启用 About Amazon 的卖家与业务新闻，但它不能替代完整的 Seller Central 各站点公告。

## 信源使用边界

- T1 指官方一手来源。企业新闻用于确认企业自己的动作；其中的宣传措辞、市场地位或增长归因不等于独立验证。财报须区分集团/电商分部以及 GMV/收入/利润，保留期间、币种和地域。
- Sea 接口由其公开投资者页面使用，原文链接为官方 PDF；本次通过本地一次性辅助流程提取了 8 份 PDF 正文并交由模型分析；常驻采集流程的 PDF 正文抽取仍需另行验证，财务数字仍需人工核对。
- FTC、CPSC、HMRC 与商业贸易部内容范围较宽，需预筛剔除无关事项；召回不自动等于平台规则变更。雨果跨境包括投稿与商业内容，作为 T2 补充线索，不能冒充平台公告。
- 同一官方机构的多个渠道共用 owner_entity_id，避免重复计热度。所有源的 site_fulltext 与 syndicate_fulltext 均为 false。订阅可读取不代表有全文转载许可。
- 源级 enabled 表示可参加采集；AGENTS.md 要求开发期间 COLLECT_ENABLED、MODEL_CALLS_ENABLED、飞书与 IndexNow 安全阀保持 false。本次只执行显式手动抓取，没有启动定时采集、模型付费调用或推送。

## 后续渠道

- [Amazon Seller Central 公告](https://sellercentral.amazon.com/seller-forums)：需按站点限定官方新闻栏目，并可靠区分发布时间和最后回复时间，不能把卖家讨论全部当作官方公告。
- [TikTok Shop 美国卖家学院](https://seller-us.tiktok.com/university/new-policies)：公开页当前需要动态加载；未找到可稳定复用的订阅/API，暂未配置。还需选择英国、东南亚等市场。
- 石头科技最新投资者披露、海关总署、欧盟产品与税务监管：待核验稳定列表与正文。石头科技全球 news.atom 最晚仅到 2019 年，已排除。
- 公众号与 X：需明确账号、采集服务凭据和预算；本轮未调用付费服务。

## 本地与部署

本机系统代理为 127.0.0.1:1082，已写入忽略提交的 .env 的 EGRESS_PROXY_URL；适用于本机，正式部署不能照搬该地址。.cn 域名按框架路由规则直连，因此仍被本机 Fake-IP 影响。公开信源通过现有 rss/web_list/json_list 接入，没有修改共享采集器或弱化网络保护。

`node --env-file=.env scripts/seed.ts` 只补入新的 id，不覆盖后台配置。本地预览库已注册全部渠道，并按本次结果启停先前五项。升级已有部署时，需从后台检查现有记录；不能仅靠修改文件期待旧源自动更新。

尚需运营者明确优先国家/平台、重点品牌与品类，以及未来模型预算；第一批无须再次选名单即可使用。
