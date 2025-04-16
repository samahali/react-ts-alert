# 🚨 Alert Components using React + TypeScript + Vite

A customizable and responsive alert component system built with **React**, **TypeScript**, and **SCSS** — powered by **Vite**.

## 🔍 Overview

This project showcases a set of flexible and reusable alert components with support for different alert types, icons, and responsive design.

---

## ✨ Features

### 🎨 Multiple Alert Types

- **Info** (blue)  
- **Warning** (yellow)  
- **Danger** (red)  
- **Success** (green)  

### 🛠 Flexible Content

- Accepts both `string` and `ReactNode` as content
- Supports custom icons

### 🎯 Type-Safe Development

- Built entirely with **TypeScript**
- Ensures better DX with strong typing

### 💅 Consistent Styling

- SCSS mixins for reusable styles
- Easily themeable and maintainable
- Responsive by default

---

## 🚀 Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **SCSS Modules**

---

## 📦 Project Setup

This template provides a minimal setup to get React working with Vite, including:

- Fast refresh via `@vitejs/plugin-react`
- Linting support with ESLint

Currently supported plugins:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) – uses Babel for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc) – uses SWC for Fast Refresh

---

## 🧹 Expanding the ESLint Configuration

If you're building a production-grade app, you can enable type-aware lint rules:

```ts
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Or stricter rules:
    ...tseslint.configs.strictTypeChecked,
    // Optional stylistic rules:
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

---

## 🔧 Recommended Plugins

You can add React-specific ESLint plugins for better linting:

```ts
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```