# Gretex Hiring Assignment - Nexus AI Landing Page

This is a premium, fully responsive SaaS landing page built for the Gretex Industries hiring assignment.

## 🚀 Setup & Run Steps

### Prerequisites
- Node.js (v18+)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup the Database
This project uses Prisma with an SQLite database for the contact form backend. Generate the Prisma client and push the schema to the database:
```bash
npx prisma generate
npx prisma db push
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🔑 Environment Variables
This project requires minimal configuration. By default, Prisma creates a local SQLite database file at `prisma/dev.db`.

If you prefer to configure it manually, you can create a `.env` file in the root directory:
```env
DATABASE_URL="file:./dev.db"
```

## 🛠️ Tech Choices
- **Next.js 16 (App Router)**: Provides server-side rendering, powerful routing, and API routes out-of-the-box. Used for maximum performance and modern React 19 features.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and ensuring a highly responsive, pixel-perfect design.
- **Framer Motion**: Used for high-quality, complex animations (scroll animations, hover effects, magnetic buttons) that give the page a "premium" SaaS feel.
- **Prisma & SQLite**: Selected for a lightweight, easy-to-setup database solution to power the Contact Form submissions.
- **Lucide React**: Clean, modern SVG icon library.
- **Sonner**: Used for elegant, non-intrusive toast notifications upon form submission.

## ⚖️ Assumptions & Trade-offs
1. **SQLite Database**: I chose SQLite for the backend because it requires zero external setup or cloud dependencies, making it perfect for an evaluation assignment. For a production app, this would easily swap to PostgreSQL.
2. **Honeypot over reCAPTCHA**: Instead of implementing complex third-party captchas (which degrade UX), I implemented a hidden "honeypot" field in the contact form to deter automated bots without frustrating legitimate users.
3. **Single Page Layout**: Designed as a single page application (SPA) with smooth-scrolling anchor links (`#products`, `#pricing`, `#contact`) rather than multiple routes. This creates a more cohesive narrative for a product landing page.
4. **Theme Handling**: Rather than relying on `next-themes` (which injects script tags that conflict with React 19 strict mode constraints), I built a custom, lightweight CSS-variable based theme toggler to avoid console errors and hydration mismatches.
