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
| `npm run format` | Format project files with oxfmt |

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to a static hosting provider. Configure the host to serve `index.html` for application routes.
