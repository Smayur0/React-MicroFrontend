# MicroFE Monorepo

This is a **React microfrontend monorepo** using **Webpack 5 Module Federation**.  
It contains two apps:

- **Shell** → The host application
- **Remote** → A microfrontend exposing components to the Shell

The monorepo uses **pnpm** for package management.

---

## 🏗 Monorepo Structure

MicroFE-monorepo/
├── apps/
│ ├── shell/ # Host application (Module Federation)
│ │ ├── src/
│ │ ├── package.json
│ │ └── vite.config.js
│ └── remote/ # Microfrontend module
│ ├── src/
│ ├── package.json
│ └── vite.config.js
├── node_modules/ # Shared dependencies
├── pnpm-lock.yaml # Lockfile for reproducible installs
└── pnpm-workspace.yaml # Workspace configuration

### Key Points:

- Both apps share **dependencies** through the root `node_modules`
- Each app has its own **webpack config** and **package.json**
- Module Federation allows **Shell to consume components from Remote dynamically**

---

## ⚡ Prerequisites

- Node.js >= 18
- pnpm >= 8

Install dependencies:

```bash
pnpm install

pnpm start
