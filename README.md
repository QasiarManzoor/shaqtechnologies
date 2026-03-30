# ShaQTechnologies

ShaQTechnologies company website built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy on Cloudflare via GitHub

This project can be deployed in two ways:

### Option 1: Cloudflare Pages

Import this repository into Cloudflare Pages and use:

- Production branch: `main`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

### Option 2: Cloudflare Workers Builds

If you are using the Cloudflare **Workers Builds** screen that asks for both a build command and a deploy command, use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Non-production branch deploy command: `npx wrangler versions upload`
- Root directory / Path: `/`
- Node version: `22`

The repository already includes a `wrangler.jsonc` file configured to deploy the Vite `dist` folder as static assets with SPA routing.

After the first deploy, attach:

- `shaqtechnologies.com`
- `www.shaqtechnologies.com`

Then redirect `www` to the apex domain if desired.
