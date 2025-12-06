#  VanshDev. Portfolio

A modern, high-performance developer portfolio featuring a futuristic dark theme, neon green accents, and a "hacker-style" aesthetic. Built to showcase projects, skills, and experience with smooth animations and a fully responsive design.

# Overview
![Project Preview](assets/MyPortfolio.png)


##  Features

*   **Futuristic Design**: Dark mode UI with high-contrast Neon Green accents.
*   **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop screens.
*   **Interactive Animations**:
    *   Typing effect in the Hero section.
    *   Smooth scroll navigation with active section highlighting.
    *   Framer Motion entrance and hover effects.
*   **Project Showcase**: Grid layout to display projects with tech stacks and links to Live Demos/GitHub.
*   **Contact Form**: Functional contact form powered by **EmailJS** (no backend server required).
*   **Resume Download**: Integrated download button for CV/Resume.
*   **Social Sidebar**: Sticky sidebar for quick access to social media profiles.

##  Tech Stack

This project is built using a modern frontend stack focusing on performance and developer experience.

*   **Framework**: [React](https://react.dev/) (v19)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Email Service**: [EmailJS](https://www.emailjs.com/)

##  Project Structure

```bash
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx    # Responsive top navigation
│   ├── Hero.tsx      # Landing section with typing effect
│   ├── Projects.tsx  # Grid of project cards
│   ├── Skills.tsx    # Technical skills categorization
│   ├── About.tsx     # Biographical section
│   ├── Contact.tsx   # EmailJS form integration
│   ├── LeftSidebar.tsx # Social media links
│   └── SectionTitle.tsx # Reusable header component
├── constants.ts      # Configuration for text, links, and data
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main layout
└── main.tsx          # Entry point
```

##  Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the app.

##  Customization

You can easily personalize the content without digging deep into the components.

1.  **Update Content**: Open `src/constants.ts`. Here you can change:
    *   `NAV_LINKS` (Navigation items)
    *   `HERO_DATA` (Name, role, tagline)
    *   `PROJECTS` (Your portfolio items)
    *   `SKILLS` (Your technical stack)
    *   `SOCIAL_LINKS` (URLs for GitHub, LinkedIn, etc.)

2.  **Add Resume**: Place your PDF resume in the `public/` folder and rename it to `resume.pdf` (or update the path in `constants.ts`).

##  Deployment

This project can be easily deployed to Vercel, Netlify, or GitHub Pages.

**Build for production:**
```bash
npm run build
```

The output files will be in the `dist/` folder, ready to be hosted.

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made by Vansh Pratap Singh**

