// 项目名称与项目克隆地址
export const nameToRepoURL = {
  'vue-lint-vitesse-lite': 'huanxiaomang/vue-lint-vitesse-lite',
  'npm-ts-tsup': 'huanxiaomang/npm-ts-tsup',
  antfu的vitesse: 'antfu-collective/vitesse',
} as const;

// 从 nameToRepoURL 中提取模板名称类型
type TemplateName = keyof typeof nameToRepoURL;
// 项目指南命令
export const projGuideCommands: Record<TemplateName, readonly string[]> = {
  'vue-lint-vitesse-lite': ['cd $PATH', 'pnpm i', 'pnpm dev'],
  'npm-ts-tsup': ['cd $PATH', 'pnpm i', 'pnpm dev'],
  antfu的vitesse: ['cd $PATH', 'pnpm i', 'pnpm dev'],
} as const;
