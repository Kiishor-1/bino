# 🧽 Bino Explorer – AI Assistant Landing Page

A sleek, responsive, and modern landing page built using **Vite + React + Tailwind CSS** to promote **[Bino](https://bino.bot/)** – an AI assistant designed to integrate with WhatsApp and help users discover local businesses and services.

---

## 🚀 Project Overview

**Bino Explorer** is a static brand-awareness page that highlights Bino's features, testimonials, and value proposition. It's designed to be visually engaging and mobile-friendly, making it perfect for showcasing Bino's capabilities in a clean and concise manner.

### 🔗 Visit Bino: [https://bino.bot/](https://bino.bot/)

---

## 📁 Folder Structure

```bash
src/
├── App.css
├── App.jsx
├── main.jsx
└── components/
    └── Home/
        ├── Home.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Features.jsx
        ├── Explore.jsx
        ├── Empower.jsx
        ├── Testimonials.jsx
        └── Footer.jsx
```

---

## 📆 Tech Stack

* ⚡ [Vite](https://vitejs.dev/) – Next-generation frontend tooling
* ⚛️ [React](https://reactjs.org/) – UI library for building components
* 🎨 [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
* 🌐 [Bino](https://bino.bot/) – AI WhatsApp assistant (being promoted)

---

## 💻 Components Used

```jsx
export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Explore />
            <Empower />
            <Testimonials />
            <Footer />
        </div>
    );
}
```

Each section is designed to reflect a part of Bino's value proposition:

* `Navbar` – Top navigation bar with brand logo
* `Hero` – Landing section introducing Bino
* `Features` – Key benefits and feature highlights
* `Explore` – Visual demo / exploration section
* `Empower` – Empower users section
* `Testimonials` – Feedback from early users
* `Footer` – Links and copyright

---

## 🛠️ Setup & Run

```bash
# Clone the repo
git clone https://github.com/yourusername/bino-explorer.git

# Navigate into the project folder
cd bino-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📝 Notes

* This is a static landing page and **does not include backend or interactivity**.
* All components are modular and responsive.
* Ideal for quick deployments on Vercel, Netlify, or GitHub Pages.

