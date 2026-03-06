# Portfolio Website

A minimalistic developer portfolio built with React, Vite, and Tailwind CSS. Navy & Mint theme with dark/light mode.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Customize

- **Photo:** Replace the placeholder on the Home page: add your image to `public/` (e.g. `photo.jpg`) and update `Home.jsx` to use `<img src="/photo.jpg" alt="..." />`.
- **Copy:** Edit `src/data/about.js`, `src/data/projects.js`, and `src/data/now.js` for your bio, experience, education, projects, and “Currently” section.
- **Contact:** Update the email and social links in `Contact.jsx`. For the form, create a Formspree form and set `action="https://formspree.io/f/YOUR_FORM_ID"` in the form tag.

## Routes

- `/` — Home (landing)
- `/about` — About me
- `/projects` — Projects
- `/contact` — Contact
- `/now` — Currently (fun section)
