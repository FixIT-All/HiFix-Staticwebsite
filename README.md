# HiFix Static Website

HiFix is a frontend website for a home and lifestyle services platform. It presents service categories, company information, case studies, FAQs, and contact details.

This repository contains the React/Vite website only; it does not include a backend API service.

## Requirements

- Node.js and npm

## Getting started

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Trigger the GitHub Pages deployment workflow on `main` (requires `gh auth login`) |
| `npm run format` | Format project files with oxfmt |

## Deployment

GitHub Pages is deployed by the `Deploy to GitHub Pages` Actions workflow. To trigger a deployment from your local terminal, authenticate GitHub CLI once with `gh auth login`, then run:

```sh
npm run deploy
```

The workflow builds the site and publishes `dist/`.
