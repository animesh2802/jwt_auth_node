# ⚡ Vite + React + Tailwind CSS Starter Pack (PNPM)

A fast, modern, and minimal boilerplate for building web apps using **React**, **Vite**, and **Tailwind CSS** — bundled with **pnpm** for fast and efficient package management.

![Vite](https://img.shields.io/badge/Built%20With-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)
![pnpm](https://img.shields.io/badge/Package%20Manager-pnpm-F69220?logo=pnpm&logoColor=white&style=for-the-badge)

---

## 🚀 Features

- ⚛️ **React 18** with functional components and hooks  
- ⚡ **Vite** for lightning-fast dev & build  
- 🎨 **Tailwind CSS** configured and ready to use  
- 💨 Just run and code — zero config hassle  
- 🧩 Easily customizable and scalable  

---

## 📦 Tech Stack

- **React** — Component-based UI  
- **Vite** — Lightning-fast frontend tooling  
- **Tailwind CSS** — Utility-first CSS framework  
- **pnpm** — Fast, efficient, and disk-friendly package manager  

---

## 📁 Project Structure

vite-react-tailwind-pnpm-starter/ ├── public/ │ └── favicon.svg ├── src/ │ ├── App.jsx │ ├── main.jsx │ └── index.css # Tailwind directives ├── tailwind.config.js # Tailwind config ├── postcss.config.js # PostCSS plugins ├── package.json └── README.md

yaml
Copy
Edit

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/animesh2802/vite-tailwind-starter.git
cd vite-tailwind-starter
2. Install dependencies
bash
Copy
Edit
pnpm install
3. Start the development server
bash
Copy
Edit
pnpm run dev
Your app will be running at: http://localhost:5173

✨ Custom Tailwind Colors
To use your own hex colors in Tailwind:

html
Copy
Edit
<div class="bg-[#1e293b] text-white p-4">
  Custom Tailwind Color
</div>
Or extend the palette in tailwind.config.js:

js
Copy
Edit
theme: {
  extend: {
    colors: {
      primary: '#1e293b',
    }
  }
}
💡 Recommended VS Code Extensions
Tailwind CSS IntelliSense

ES7+ React/Redux snippets

Prettier

ESLint

🧪 Useful Scripts

Command	Description
pnpm run dev	Start local dev server
pnpm run build	Build production assets
pnpm run preview	Preview production build
📄 License
MIT License © Your Name

🌟 Support
If you found this helpful, consider ⭐ starring the repo and sharing it!

Happy hacking! 💻🔥