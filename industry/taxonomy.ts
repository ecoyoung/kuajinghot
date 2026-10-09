// 跨境电商分类草案：上线前由运营者确认 key、标签和实体。
export const CATEGORIES = [
  {"key": "platform-rules", "label": "平台规则", "section": "平台规则与合规", "guide": "平台费用、准入、账号、商品、广告规则及影响跨境卖家的监管变化；明确站点、生效日期、适用对象。财报和经营规模归市场增长。"},
  {"key": "industry", "label": "市场增长", "section": "市场体量与增长", "guide": "平台财报、GMV、收入、用户、订单、渗透率、市场扩张及融资并购；区分统计口径、市场、期间和同比环比。品牌自身渠道策略归品牌出海。"},
  {"key": "brand-strategy", "label": "品牌出海", "section": "品牌出海策略", "guide": "品牌的海外定位、渠道组合、本地化、产品、定价、供应链与组织策略，以及有可核验经营结果的案例；泛泛营销建议归解读。"},
  {"key": "commerce-services", "label": "经营服务", "section": "物流与经营服务", "guide": "物流、海外仓、履约、支付、ERP、广告和独立站工具的实际上线、费用与服务变化；正式政策规则归平台规则。"},
  {"key": "tip", "label": "经营实践", "section": "实践与解读", "guide": "有步骤、有条件、有依据的选品、广告、利润、库存、履约和本地化实践；发布服务归经营服务。", "commentary": true},
  {"key": "opinion", "label": "行业解读", "section": "实践与解读", "guide": "有事实支持的行业研究、判断、趋势分析与访谈；原始财报归市场增长，正式规则归平台规则。", "commentary": true},
 ] as const satisfies ReadonlyArray<{ key: string; label: string; feedLabel?: string; section: string; guide: string; commentary?: true }>;
export const RELEASE: { category: string; tag: string; unit: string } | null = null;
export const PLAIN_TERMS: readonly string[] = ["gmv", "dtc", "d2c", "b2b", "b2c", "sku", "fba", "vat", "api", "erp", "ipo", "ceo"];
export const ITEM_TYPES = ["policy_change", "product_launch", "operating_method", "market_research", "industry_event", "opinion_analysis", "tutorial_explainer"] as const;
export const CATEGORY_TAGS = ["平台规则", "市场增长", "品牌策略", "经营服务", "经营实践", "行业解读", "其他"] as const;
export const TOPIC_TAGS = ["费用佣金", "账号与准入", "商品合规", "税务关务", "财报", "GMV", "用户与订单", "市场扩张", "本地化", "渠道布局", "独立站", "广告营销", "物流履约", "海外仓", "支付结算", "供应链", "选品定价", "融资并购"] as const;
export const ENTITY_TAGS = ["Amazon", "Alibaba", "Temu", "Shopee", "eBay", "Shopify", "TikTok Shop", "Walmart", "Mercado Libre", "SHEIN", "Anker", "ECOVACS", "Roborock"] as const;
export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  "政策": "平台规则",
  "监管": "平台规则",
  "佣金": "费用佣金",
  "增长": "市场增长",
  "品牌出海": "品牌策略",
  "教程": "经营实践",
  "观点": "行业解读",
  "融资": "融资并购"
};
export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[]; otherNames?: string[] }> = {
  "ftc": { name: "美国联邦贸易委员会", displayTag: null, aliases: ["FTC", "Federal Trade Commission"] },
  "cpsc": { name: "美国消费品安全委员会", displayTag: null, aliases: ["CPSC", "Consumer Product Safety Commission"] },
  "hmrc": { name: "英国税务海关总署", displayTag: null, aliases: ["HMRC", "HM Revenue & Customs"] },
  "uk-dbt": { name: "英国商业贸易部", displayTag: null, aliases: ["Department for Business and Trade"] },
  "mofcom": { name: "中国商务部", displayTag: null, aliases: ["商务部", "MOFCOM"] },
  "amazon": {
    "name": "Amazon / 亚马逊",
    "displayTag": "Amazon",
    "aliases": [
      "Amazon",
      "亚马逊"
    ],
    "otherNames": [
      "Amazon Seller Central",
      "Amazon Global Selling"
    ]
  },
  "alibaba": {
    "name": "Alibaba / 阿里巴巴",
    "displayTag": "Alibaba",
    "aliases": [
      "Alibaba",
      "阿里巴巴",
      "AliExpress",
      "速卖通"
    ],
    "otherNames": [
      "Alibaba Group",
      "Alibaba International"
    ]
  },
  "pdd": {
    "name": "PDD / Temu",
    "displayTag": "Temu",
    "aliases": [
      "PDD",
      "拼多多",
      "Temu"
    ],
    "otherNames": [
      "PDD Holdings"
    ]
  },
  "sea": {
    "name": "Sea / Shopee",
    "displayTag": "Shopee",
    "aliases": [
      "Sea Limited",
      "Sea Group",
      "Shopee",
      "虾皮"
    ],
    "otherNames": [
      "Sea"
    ]
  },
  "ebay": {
    "name": "eBay",
    "displayTag": "eBay",
    "aliases": [
      "eBay"
    ],
    "otherNames": []
  },
  "shopify": {
    "name": "Shopify",
    "displayTag": "Shopify",
    "aliases": [
      "Shopify"
    ],
    "otherNames": []
  },
  "tiktok-shop": {
    "name": "TikTok Shop",
    "displayTag": "TikTok Shop",
    "aliases": [
      "TikTok Shop",
      "TikTok 电商"
    ],
    "otherNames": []
  },
  "walmart": {
    "name": "Walmart / 沃尔玛",
    "displayTag": "Walmart",
    "aliases": [
      "Walmart",
      "沃尔玛"
    ],
    "otherNames": []
  },
  "mercadolibre": {
    "name": "Mercado Libre / 美客多",
    "displayTag": "Mercado Libre",
    "aliases": [
      "Mercado Libre",
      "MercadoLibre",
      "美客多"
    ],
    "otherNames": []
  },
  "shein": {
    "name": "SHEIN",
    "displayTag": "SHEIN",
    "aliases": [
      "SHEIN",
      "希音"
    ],
    "otherNames": []
  },
  "anker": {
    "name": "Anker / 安克创新",
    "displayTag": "Anker",
    "aliases": [
      "Anker",
      "安克创新"
    ],
    "otherNames": [
      "Anker Innovations",
      "eufy",
      "soundcore"
    ]
  },
  "ecovacs": {
    "name": "ECOVACS / 科沃斯",
    "displayTag": "ECOVACS",
    "aliases": [
      "ECOVACS",
      "科沃斯"
    ],
    "otherNames": []
  },
  "roborock": {
    "name": "Roborock / 石头科技",
    "displayTag": "Roborock",
    "aliases": [
      "Roborock",
      "石头科技"
    ],
    "otherNames": []
  }
};
export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = [
  { id: "amazon", name: "Amazon / 亚马逊", patterns: [/\bAmazon\b|亚马逊|\bAmazon\ Seller\ Central\b|\bAmazon\ Global\ Selling\b/i] },
  { id: "alibaba", name: "Alibaba / 阿里巴巴", patterns: [/\bAlibaba\b|阿里巴巴|\bAliExpress\b|速卖通|\bAlibaba\ Group\b|\bAlibaba\ International\b/i] },
  { id: "pdd", name: "PDD / Temu", patterns: [/\bPDD\b|拼多多|\bTemu\b|\bPDD\ Holdings\b/i] },
  { id: "sea", name: "Sea / Shopee", patterns: [/\bSea\ Limited\b|\bSea\ Group\b|\bShopee\b|虾皮/i] },
  { id: "ebay", name: "eBay", patterns: [/\beBay\b/i] },
  { id: "shopify", name: "Shopify", patterns: [/\bShopify\b/i] },
  { id: "tiktok-shop", name: "TikTok Shop", patterns: [/\bTikTok\ Shop\b|TikTok 电商/i] },
  { id: "walmart", name: "Walmart / 沃尔玛", patterns: [/\bWalmart\b|沃尔玛/i] },
  { id: "mercadolibre", name: "Mercado Libre / 美客多", patterns: [/\bMercado\ Libre\b|\bMercadoLibre\b|美客多/i] },
  { id: "shein", name: "SHEIN", patterns: [/\bSHEIN\b|希音/i] },
  { id: "anker", name: "Anker / 安克创新", patterns: [/\bAnker\b|安克创新|\bAnker\ Innovations\b|\beufy\b|\bsoundcore\b/i] },
  { id: "ecovacs", name: "ECOVACS / 科沃斯", patterns: [/\bECOVACS\b|科沃斯/i] },
  { id: "roborock", name: "Roborock / 石头科技", patterns: [/\bRoborock\b|石头科技/i] },
];
export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [
  {
    "entityId": "amazon",
    "domains": [
      "aboutamazon.com",
      "sellercentral.amazon.com",
      "ir.aboutamazon.com",
      "sell.amazon.com"
    ]
  },
  {
    "entityId": "alibaba",
    "domains": [
      "alibabagroup.com",
      "alizila.com"
    ]
  },
  {
    "entityId": "pdd",
    "domains": [
      "investor.pddholdings.com"
    ]
  },
  {
    "entityId": "sea",
    "domains": [
      "sea.com"
    ]
  },
  {
    "entityId": "ebay",
    "domains": [
      "ebayinc.com"
    ]
  },
  {
    "entityId": "shopify",
    "domains": [
      "shopify.com"
    ]
  },
  {
    "entityId": "tiktok-shop",
    "domains": [
      "newsroom.tiktok.com"
    ]
  },
  {
    "entityId": "walmart",
    "domains": [
      "corporate.walmart.com"
    ]
  },
  {
    "entityId": "mercadolibre",
    "domains": [
      "investor.mercadolibre.com"
    ]
  },
  {
    "entityId": "shein",
    "domains": [
      "sheingroup.com"
    ]
  },
  {
    "entityId": "anker",
    "domains": [
      "anker.com",
      "anker-in.com",
      "anker.com.cn"
    ]
  },
  {
    "entityId": "ecovacs",
    "domains": [
      "ecovacs.com"
    ]
  },
  {
    "entityId": "roborock",
    "domains": [
      "roborock.com"
    ]
  }
];
export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [];
