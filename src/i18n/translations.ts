export type Lang = 'zh' | 'en'
export type BiStr = { zh: string; en: string }

export const t = {
  nav: {
    features:    { zh: '功能特性', en: 'Features' },
    download:    { zh: '下载', en: 'Download' },
    changelog:   { zh: '更新日志', en: 'Changelog' },
    help:        { zh: '帮助', en: 'Help' },
    downloadBtn: { zh: '下载', en: 'Download' },
    langSwitch:  { zh: '中文 / EN', en: 'EN / 中文' },
  },
  hero: {
    badge:       { zh: 'AI 驱动 · 本地运行 · 保护隐私', en: 'AI-Powered · Local · Privacy-First' },
    headline1:   { zh: '让每一张', en: 'Every Great' },
    headlineEm:  { zh: '好照片', en: 'Photo' },
    headline2:   { zh: '被看见', en: 'Deserves to Shine' },
    sub:         { zh: 'AuraSelect 用 AI 自动分析你的照片，从千张中精准找出精品，节省 90% 筛片时间。', en: 'AuraSelect uses AI to analyze your photos and surface the best ones from thousands, saving 90% of your culling time.' },
    macDownload: { zh: '下载 Mac 版', en: 'Download for Mac' },
    winDownload: { zh: '下载 Windows', en: 'Download for Windows' },
    apSilicon:   { zh: 'Apple Silicon (M1/M2/M3 推荐)', en: 'Apple Silicon (M1/M2/M3 Recommended)' },
    intel:       { zh: 'Intel 芯片 (2019 及更早)', en: 'Intel Chip (2019 and earlier)' },
    note:        { zh: 'v1.2.0 · 免费试用 · 无需注册 · ', en: 'v1.2.0 · Free trial · No registration · ' },
    changelog:   { zh: '查看更新日志', en: 'View changelog' },
  },
  features: {
    label: { zh: '功能特性', en: 'Features' },
    title: { zh: '专业摄影师的筛片助手', en: "The Photographer's Culling Assistant" },
    sub:   { zh: '四维 AI 评分，精准定位每张照片的价值', en: 'Four-dimensional AI scoring that pinpoints the value of every shot' },
    items: [
      {
        title: { zh: 'AI 智能评分', en: 'AI Smart Scoring' },
        desc:  { zh: '技术、美学、人像、构图四维独立评分，毫秒级分析', en: 'Technical, aesthetic, portrait, and composition scoring — millisecond analysis' },
      },
      {
        title: { zh: '批量高速处理', en: 'Batch Processing' },
        desc:  { zh: '千张照片分钟级完成，支持 RAW/JPEG 全格式', en: 'Process thousands of photos in minutes, RAW and JPEG supported' },
      },
      {
        title: { zh: '5 级精准分级', en: '5-Level Grading' },
        desc:  { zh: 'Masterpiece → Trash 五档分级，找到你的最佳之作', en: 'From Masterpiece to Trash — five tiers to surface your best work' },
      },
      {
        title: { zh: '完全本地运行', en: 'Fully Local' },
        desc:  { zh: '无需上传，数据不离机，隐私 100% 掌控在你手中', en: 'No uploads, no cloud. Your photos never leave your device' },
      },
    ],
  },
  privacy: {
    label: { zh: '隐私保护', en: 'Privacy' },
    title: { zh: '你的照片，只属于你', en: 'Your Photos Stay Yours' },
    sub:   { zh: '本地优先设计，从架构层保护你的创作资产', en: 'Local-first by design. Privacy baked into the architecture.' },
    cards: [
      {
        title: { zh: '100% 本地处理', en: '100% Local Processing' },
        desc:  { zh: 'AI 模型完全在你的 Mac/PC 上运行，无需联网', en: 'AI models run entirely on your Mac/PC, no internet required' },
      },
      {
        title: { zh: '零数据上传', en: 'Zero Data Upload' },
        desc:  { zh: '照片、元数据、评分结果永不离开你的设备', en: 'Photos, metadata, and scores never leave your device' },
      },
      {
        title: { zh: '开源 AI 模型', en: 'Open-Source Models' },
        desc:  { zh: '使用公开的 ONNX 模型，算法透明可审计', en: 'Built on open ONNX models — transparent and auditable' },
      },
    ],
  },
  install: {
    label: { zh: '快速上手', en: 'Getting Started' },
    title: { zh: '3 步开始你的第一次筛片', en: 'Start Culling in 3 Steps' },
    steps: [
      {
        title: { zh: '下载安装包', en: 'Download Installer' },
        desc:  { zh: '选择适合你设备的版本下载', en: 'Download the version for your device' },
      },
      {
        title: { zh: '运行安装器', en: 'Run Installer' },
        desc:  { zh: '打开 .dmg 或 .exe，按提示完成安装', en: 'Open the .dmg or .exe and follow the prompts' },
      },
      {
        title: { zh: '启动应用', en: 'Launch the App' },
        desc:  { zh: '导入照片文件夹，AI 自动开始分析', en: 'Import a photo folder and let AI do the rest' },
      },
    ],
  },
  faq: {
    label: { zh: '常见问题', en: 'FAQ' },
    title: { zh: '你可能想知道', en: 'You Might Be Wondering' },
    items: [
      {
        q: { zh: '支持哪些系统版本？', en: 'What OS versions are supported?' },
        a: { zh: 'macOS 12 Monterey 及更高版本；Windows 10/11（64 位）。', en: 'macOS 12 Monterey or later; Windows 10/11 (64-bit).' },
      },
      {
        q: { zh: '免费试用包括哪些功能？', en: "What's included in the free trial?" },
        a: { zh: '免费版每次可分析 50 张照片，所有 AI 功能均可体验，无时间限制。', en: 'The free version lets you analyze 50 photos per session with full AI features, no time limit.' },
      },
      {
        q: { zh: '本地模式和云端模式有什么区别？', en: "What's the difference between local and cloud mode?" },
        a: { zh: '本地模式：免费，AI 在设备上运行，速度取决于硬件。云端模式：VIP 功能，服务器加速，适合大批量任务。', en: 'Local mode: free, AI runs on-device, speed depends on hardware. Cloud mode: VIP feature, server-accelerated for large batches.' },
      },
      {
        q: { zh: '我的照片会被上传吗？', en: 'Are my photos uploaded anywhere?' },
        a: { zh: '本地模式下绝对不会。云端模式下照片会加密传输至分析服务器，处理完成后立即删除。', en: 'Never in local mode. In cloud mode, photos are encrypted in transit and deleted immediately after analysis.' },
      },
      {
        q: { zh: 'AuraSelect 如何确定照片等级？', en: 'How does AuraSelect determine photo grades?' },
        a: { zh: '综合技术质量（清晰度/曝光）、美学分数（NIMA 模型）、人像质量（面部检测/关键点）和构图评分，归一化后映射到 5 个等级。', en: 'It combines technical quality (sharpness/exposure), aesthetic score (NIMA model), portrait quality (face detection/landmarks), and composition, normalized into 5 grades.' },
      },
      {
        q: { zh: '如何获得更新？', en: 'How do I get updates?' },
        a: { zh: '应用内置自动更新检测，新版本发布后会在启动时提示。也可在官网下载页手动下载最新版。', en: 'The app has built-in update detection and prompts on launch when a new version is available. You can also manually download from this page.' },
      },
    ],
  },
  footer: {
    copyright: { zh: '© 2026 AuraSelect. All rights reserved.', en: '© 2026 AuraSelect. All rights reserved.' },
    product:   { zh: '产品', en: 'Product' },
    legal:     { zh: '法律', en: 'Legal' },
    links: {
      features:  { zh: '功能特性', en: 'Features' },
      download:  { zh: '下载', en: 'Download' },
      changelog: { zh: '更新日志', en: 'Changelog' },
      privacy:   { zh: '隐私政策', en: 'Privacy Policy' },
      terms:     { zh: '用户协议', en: 'Terms of Service' },
    },
  },
} as const
