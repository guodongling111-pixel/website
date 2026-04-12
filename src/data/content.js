export const skills = {
  frontend: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
  mapping: ['Leaflet'],
  data: ['Python', 'Selenium'],
  deployment: ['Vercel'],
};

export const artemisFeatures = [
  {
    id: 'itinerary',
    title: '行程生成与编辑系统',
    description: '基于用户输入自动生成多日结构化行程，并通过"点击选择"方式从海量内容中筛选景点，支持用户对结果进行自由编辑与调整，实现高效与灵活的平衡。',
  },
  {
    id: 'poi-filter',
    title: '标签化分类系统',
    description: '围绕"出片与在地体验"构建结构化标签体系，通过文艺/小众/拍照等标签帮助用户快速筛选高价值兴趣点，降低决策成本，提升选择效率。',
  },
  {
    id: 'food',
    title: '餐饮融合系统',
    description: '基于年轻用户"低强度、松弛感旅行"的行为特征，将餐厅与外卖选项嵌入行程时间轴，支持晚出发、酒店休息等灵活场景。',
  },
  {
    id: 'import',
    title: '内容导入系统',
    description: '支持小红书链接解析，将非结构化攻略内容转化为可选择的行程节点，提升信息利用效率。',
  },
];

export const projects = [
  {
    id: 'artemis',
    title: '阿尔忒弥斯 Artemis',
    subtitle: '智能旅行行程规划工具',
    description: '解决旅行规划信息过载问题的地图驱动型行程生成工具，通过空间路径优化与结构化行程设计，帮助用户高效完成旅行规划。',
    fullDescription: '阿尔忒弥斯是一款面向自由行用户的智能行程规划工具，致力于解决旅行信息分散、规划效率低和路线不合理的问题。通过地图驱动的路径优化与结构化行程设计，帮助用户从海量攻略中快速生成清晰、可执行的旅行路线。',
    background: {
      problem: '自由行用户（尤其是年轻女性与Citywalk人群）在旅行规划中面临信息过载问题，需要在小红书、抖音等多个平台反复筛选攻略，信息碎片化严重。同时行程规划过程复杂，需要兼顾路线合理性、时间安排与餐饮选择，整体效率较低。',
      goal: '构建一个以地图为核心的智能行程规划系统，通过结构化信息与路径优化算法，帮助用户快速生成高质量旅行路线，并具备可扩展为真实产品的能力。',
    },
    features: artemisFeatures,
    tech: ['React', 'Leaflet', 'Python', 'Vercel'],
    highlights: [
      '基于地理距离的路线优化，减少路径折返',
      '将内容平台信息转化为结构化数据（小红书导入）',
      '行程时间结构化设计（上午 / 下午 / 晚上）',
      '地图、内容与行程规划的融合型产品设计',
      '围绕"出片与在地文化体验"构建产品核心价值，区别于传统效率导向的旅行工具',
    ],
    links: {
      github: 'https://github.com',
      demo: 'https://vercel.com',
    },
  },
  {
    id: 'ecommerce-ai',
    title: '跨境电商AI选品系统',
    subtitle: 'AI驱动的选品与爆款预测工具',
    description: '基于数据分析与AI模型的选品工具，提升跨境电商商家的选品效率与爆款预测能力。',
    fullDescription: '该项目围绕跨境电商商家"选品效率低、爆款预测难"的核心问题，构建了一套基于数据驱动与AI模型的选品系统。通过对10,000+商品数据的分析与建模，实现爆款特征提取与竞品分析，辅助商家进行更科学的选品决策。',
    background: {
      problem: '跨境电商商家在选品过程中依赖经验，缺乏数据支持，导致选品效率低、爆款预测难，同时市场竞争激烈，需要更高效的数据工具辅助决策。',
      goal: '构建一个基于AI与数据分析的选品系统，提高选品效率，并增强爆款预测能力。',
    },
    features: [
      '爆款特征分析：基于商品数据提取潜在爆款特征',
      '竞品分析：对比同类商品表现，辅助决策',
      '数据驱动选品：基于10,000+商品数据提供选品建议',
      '模型辅助决策：结合AI模型提升选品精准度',
    ],
    tech: ['Python', 'Selenium', 'Data Analysis'],
    highlights: [
      '基于10,000+商品数据构建选品分析体系',
      '结合AI模型进行爆款预测与特征提取',
      '整合业务与数据，实现产品化落地',
      '基于1500+用户反馈数据持续优化模型效果',
    ],
    links: {
      github: 'https://github.com',
    },
  },
  {
    id: 'ui-practice',
    title: 'UI组件练习',
    subtitle: '前端组件与界面设计',
    description: '用于练习前端组件开发与界面设计的项目集合。',
    fullDescription: '包含多个可复用UI组件与界面设计练习，重点在于组件结构与交互设计。',
    features: ['组件复用', '响应式设计', '基础交互效果'],
    tech: ['React', 'CSS'],
    links: {
      github: 'https://github.com',
    },
  },
];

export const profile = {
  name: '郭冬玲',
  role: '产品实习生 | 产品设计 × 前端实现 × 数据应用',
  intro: '具备产品思维与数据理解能力，擅长从用户需求出发，将复杂问题拆解为清晰可执行的产品方案',
  background: {
    education: '英语 + 国际贸易双专业',
    certifications: 'IELTS 6.5 / TEM-4',
    focus: '产品设计 / 前端开发 / 数据应用',
  },
  skills: [
    '产品思维（用户问题拆解与功能设计）',
    '前端开发能力（React）',
    '地图与空间信息应用（Leaflet）',
    '数据抓取与分析（Python / Selenium）',
  ],
  interests: [
    '旅行科技（Travel Tech）',
    '地图与空间信息产品',
    'AI与数据驱动产品',
  ],
  email: '1748025085@qq.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};