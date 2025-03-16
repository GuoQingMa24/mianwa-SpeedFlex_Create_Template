# 🚀 SpeedFlex_Create_Template：便捷高效的脚手架创建工具

---

## 🌟 一、项目概述

SpeedFlex_Create_Template 是一款为开发者量身定制的**脚手架创建工具**，旨在提供快速、灵活的项目初始化体验 🎉。它集成了多种优秀的开源库，能够高效地从远程 Git 仓库克隆模板，并通过友好的命令行交互界面和详尽的操作指引，显著提升开发效率。
目前，该工具已正式发布至 [NPM 官网](https://www.npmjs.com/)，只需简单几步即可下载并投入使用，让你的项目启动快如闪电 ⚡！

---

## 🛠️ 二、运行指南

### 1. 克隆项目

首先，将项目 Clone 到本地：

```bash
git clone https://github.com/GuoQingMa24/mianwa-SpeedFlex_Create_Template.git
cd mianwa-SpeedFlex_Create_Template
```

### 2. 安装依赖

使用 pnpm 安装项目所需依赖：

```bash
pnpm install
```

💡 **Tips**: 如果你还没安装 pnpm，可以用 npm install -g pnpm 快速搞定！

### 3. 全局挂载

安装完成后，通过以下命令将 CLI 工具挂载到全局：

```bash
npm link
```

### 4. 运行脚手架

开发模式下运行（直接使用 TypeScript）：

```bash
npm run dev
```

⚙️ **注意**: dev 模式依赖 ts-node，确保已安装！

## 📘 三、技术细节与运行说明

### 🧬 技术栈

- **语言**: TypeScript（强类型支持，代码更健壮 💪）
- **打包工具**: tsup（基于 esbuild，超快构建 ⚡）
- **模块化**: ESM（现代化模块系统，拥抱未来 🌐）
- **核心依赖**: commander、chalk、inquirer、degit 等

### 🔍 类型定义

由于部分依赖（如 degit）默认使用 CommonJS 模块，而本项目采用 ESM，类型定义需要特别处理：

- **自定义类型**: 为 degit 等模块编写了 types/degit.d.ts，确保类型安全。
- **官方类型**: 通过 @types/node 等获取标准库类型支持。
- **成果**: 项目运行时类型检查无忧，开发体验丝滑 ✨。

### ⚒️ 运行机制

TypeScript 文件无法直接在 Node.js 环境中运行，因此：

1. 使用 tsup 将 .ts 文件打包为 .js。
2. 打包后的文件位于 dist/ 目录，可直接执行。
3. 示例 tsup 配置（tsup.config.ts）：

```js
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  clean: true,
  banner: { js: '#!/usr/bin/env node' },
});
```

### 📦 发布说明

项目已发布至 NPM，可通过以下命令全局安装：

```js
npm i speedcreate
speedcreate create <app-name>
```

## 🎨 四、内置模板集合

目前，脚手架已集成以下模板，满足不同开发需求：

- **antf-vitesse**
  基于 Ant Design 和 Vite 的高性能模板，适合企业级项目。
- **vitesse-list**
  Vite 驱动的轻量模板，快速启动，灵活扩展。

> 🌈 **未来计划**: 持续收集更多优质模板，欢迎社区贡献！

## 🎉 五、快速上手

构建项目：

```js
npm run build
```

本地测试：

```js
npm run start create my-app
```

全局使用：

```js
npm link
speedcreate create my-app
```

## 💡 小贴士

- **调试**: 开发时用 npm run dev，实时查看效果。
- **问题反馈**: 遇到问题？欢迎提交 [Issue](https://github.com/GuoQingMa24/mianwa-SpeedFlex_Create_Template/issues)！
- **贡献代码**: Fork 项目，提交 PR，一起让它更强大吧 ✌️！
