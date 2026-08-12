# Gretex Hiring Assignment - Nexus AI Landing Page

A premium, fully responsive, and highly interactive SaaS landing page built for the Gretex Industries hiring assignment. 

This project goes above and beyond a standard static frontend by incorporating a fully functioning backend API, SQLite database integration, advanced Framer Motion physics, and an optimized, mobile-first responsive layout.

---

## ✨ Features & Evaluation Highlights

Based on the evaluation criteria, this project delivers:

1. **Visual Design & Polish (30%)**
   - **Glassmorphism**: True blurring and translucent backgrounds on the navigation bar that dynamically adjust opacity.
   - **Parallax Scrolling**: Background elements (grids and glowing orbs) move at different scroll speeds to create 3D depth in the Hero section.
   - **Magnetic Buttons**: Call-to-action buttons use spring physics to physically pull towards the user's cursor.
2. **Responsiveness (25%)**
   - **Flawless Mobile Experience**: Complex desktop UI like the Code Snippets window and 3-column feature grids seamlessly collapse into vertical, mobile-friendly layouts.
   - **Touch-Friendly**: The Testimonials section is an auto-snapping horizontal carousel optimized for touch/swipe gestures on mobile devices.
3. **Code Quality (20%)**
   - **Component-Driven Architecture**: The UI is broken down into highly modular, single-responsibility files (e.g., `FAQ.tsx`, `Hero.tsx`, `MagneticButton.tsx`).
   - **TypeScript Strict Mode**: Fully typed props and APIs.
4. **Backend & DB (15%)**
   - **Working Endpoint**: A fully functional Next.js API route (`/api/contact`) that accepts POST requests.
   - **Database Persistence**: Integrated with Prisma ORM and a local SQLite database.
   - **Security**: Includes a Honeypot field (to trap bots) and in-memory rate limiting (max 5 requests/min) to prevent spam.
5. **Details & Extras (10%)**
   - **Advanced Animations**: Infinite marquees, scroll-linked fade-ins, and buttery-smooth accordion transitions.
   - **Loading States**: Artificial delay added to the API to demonstrate the button's built-in loading spinner and disabled state.

---

## 🚀 Setup & Run Instructions

### Prerequisites
- Node.js (v18+)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup the Database
This project uses Prisma with a local SQLite database so you don't have to configure any external cloud databases. Generate the Prisma client and push the schema to create the local `dev.db` file:
```bash
npx prisma generate
npx prisma db push
```

### 3. Run the Frontend Development Server
Start the Next.js frontend:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The page is fully interactive.

---

## ✉️ Testing the Contact Form & Backend

The contact form at the bottom of the page is fully wired up to a backend API and database. Here is how to test it:

### 1. Submit a Message
1. Scroll down to the **Contact** section at the bottom of the page.
2. Fill out your Name, Email, Subject, and Message.
3. Click **Send Message**.
4. You will see the button switch to a loading state with a spinner (`Sending...`).
5. Upon success, a beautiful toast notification will slide in confirming the message was sent, and the form will clear.

### 2. View the Saved Data (Prisma Studio)
To prove the data was actually saved to the database, you can open Prisma Studio (a visual database browser):
```bash
npx prisma studio
```
This will open a new browser tab (usually at `http://localhost:5555`). 
Click on the **ContactSubmission** model to see a spreadsheet view of the exact message you just submitted!

---

## 🛠️ Tech Choices

- **Next.js 16 (App Router)**: Provides server-side rendering, powerful routing, and server-side API routes out-of-the-box. Used for maximum performance and modern React 19 features.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and ensuring a highly responsive, pixel-perfect design.
- **Framer Motion**: Used for high-quality, complex animations (parallax, magnetic buttons, layout transitions) that give the page a "premium" SaaS feel.
- **Prisma & SQLite**: Selected for a lightweight, easy-to-setup database solution that requires zero external configuration by the reviewer.
- **Lucide React**: Clean, modern SVG icon library.
- **Sonner**: Used for elegant, non-intrusive toast notifications upon form submission.

---

## ⚖️ Assumptions & Trade-offs
1. **SQLite Database**: I chose SQLite for the backend because it requires zero external setup or cloud dependencies, making it perfect for an evaluation assignment. For a production app, this would easily swap to PostgreSQL.
2. **Honeypot over reCAPTCHA**: Instead of implementing complex third-party captchas (which degrade UX), I implemented a hidden "honeypot" field in the contact form to deter automated bots without frustrating legitimate users.
3. **Single Page Layout**: Designed as a single page application (SPA) with smooth-scrolling anchor links (`#products`, `#pricing`, `#contact`) rather than multiple routes. This creates a more cohesive narrative for a product landing page.
4. **Theme Handling**: Rather than relying on `next-themes` (which injects script tags that conflict with React 19 strict mode constraints), I built a custom, lightweight CSS-variable based theme toggler to avoid console errors and hydration mismatches.
