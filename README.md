# Srikanth Kamalla — Personal Portfolio 💼

**Live demo:** https://portfolio-delta-dun-48.vercel.app/
---

## Overview ✨

A clean, responsive personal portfolio built with **React** and **Vite** showcasing projects, skills, education, internship experience, and contact details. It includes a contact form powered by EmailJS and deploys easily to GitHub Pages.

> Built with performance and accessibility in mind; ideal for showcasing your developer profile.

---

## Features ✅

- Landing / Hero section
- About & Education
- Skills & Projects gallery
- Internship experience section
- Contact form (EmailJS integration)
- Responsive layout and lightweight animations

---

## Technologies & Tools 🔧

- React (v19)
- Vite
- EmailJS (@emailjs/browser)
- particles.js (for background effects)
- react-icons
- GitHub Pages (gh-pages)

---

## Quick Start — Local Development ⚡

Prerequisites: Node.js (LTS) and npm/yarn

1. Clone the repo

```bash
git clone https://github.com/srikanthkamalla/Portfolio.git
cd Portfolio
```

2. Install dependencies

```bash
npm install
# or
# yarn
```

3. Run dev server

```bash
npm run dev
```

Open http://localhost:5173 (Vite default) in your browser.

---

## Scripts (from `package.json`) 🧭

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint
- `npm run deploy` — deploy `dist` to GitHub Pages (uses `gh-pages`)

> Note: `predeploy` runs `npm run build` automatically before `deploy`.

---

## Environment Variables (EmailJS) 🔑

The contact form uses EmailJS and expects the following env variables (Vite):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Create a local `.env` (or `.env.local`) file at project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_api_key
```

---

## Folder Structure 📁

```
src/
  ├─ components/        # React components (Hero, About, Projects, Contact, ...)
  ├─ styles/            # CSS files per-section
  ├─ assets/            # images and static assets
  ├─ main.jsx           # app entry
  └─ App.jsx
```

---

## Deploying to GitHub Pages 🚀

The project includes a `deploy` script using `gh-pages`:

```bash
npm run build
npm run deploy
```

After running the deploy, your site will be published at the `homepage` URL from `package.json`.

---

## Contributing 🤝

Contributions are welcome — feel free to open issues or PRs. Keep changes small and include a description of the work.

---

## License ⚖️

No license file found in the repository. If you intend to open-source this project, consider adding a license (e.g., **MIT**). If you want, I can add a `LICENSE` file for you.

---

## Contact ✉️

- Email: `srikanthkamalla2919@gmail.com`
- GitHub: https://github.com/srikanthkamalla
- LinkedIn: https://www.linkedin.com/in/srikanthkamalla/

---

Made with ❤️ by Srikanth Kamalla
