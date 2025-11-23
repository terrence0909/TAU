# TAU Portfolio

A modern, responsive portfolio website showcasing cloud engineering expertise, full-stack projects, and professional experience. Built with React, TypeScript, and Tailwind CSS for a clean, performant user experience.

## 🌐 Live Demo

Visit: https://github.com/terrence0909/TAU

## 📋 Overview

This portfolio website serves as a professional showcase for cloud engineering work, featuring project highlights, technical skills, and contact information. The site is optimized for performance, accessibility, and mobile responsiveness.

## ✨ Features

- **Clean, Modern Design** - Minimalist aesthetic with smooth animations and transitions
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Project Showcase** - Highlight key projects with descriptions and links
- **Contact Integration** - Built-in contact form powered by Formspree
- **Fast Performance** - Optimized bundle size and lazy loading
- **Dark Theme** - Eye-friendly dark mode design with high contrast

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite (lightning-fast development and production builds)
- **Styling**: Tailwind CSS for utility-first responsive design
- **UI Components**: shadcn/ui for accessible, customizable components
- **Icons**: Lucide React for clean, consistent iconography
- **Form Handling**: Formspree for email submissions

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Local Development

```bash
# Clone the repository
git clone https://github.com/terrence0909/TAU.git

# Navigate to the project directory
cd TAU

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173` with hot module reloading enabled.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 📁 Project Structure

```
TAU/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── pages/               # Page components
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## 🔧 Editing Your Portfolio

### Option 1: Local Development
Clone the repo and edit files locally in your preferred IDE. This is the recommended approach for making changes and pushing updates.

### Option 2: GitHub Web Editor
Click the edit (pencil) icon on any file to make quick changes directly on GitHub.

### Option 3: GitHub Codespaces
Use GitHub's cloud development environment for editing without local setup.

## 📧 Contact Form Setup

The contact form is integrated with Formspree. To set up email notifications:

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form ID
3. Update the form endpoint in `src/components/Contact.tsx`:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

## 🌐 Custom Domain

To connect a custom domain:

1. Go to **Project Settings** → **Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration instructions

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 📦 Available Scripts

```bash
npm run dev         # Start development server with HMR
npm run build       # Build optimized production bundle
npm run preview     # Preview production build locally
npm run lint        # Run code quality checks (if configured)
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the color palette and design tokens.

### Content
Update component content in `src/components/` to reflect your projects, skills, and experience.

### Typography
Modify font sizes and styles in Tailwind classes throughout the components.

## ⚡ Performance Optimization

- Optimized images with lazy loading
- Code splitting with Vite
- Minified production builds
- Responsive design reduces unnecessary rendering

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- No external data exposure
- Form submissions encrypted via Formspree
- No sensitive credentials in repository
- Content Security Policy friendly

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and improve this portfolio template for your own use.

## 💬 Questions?

Have questions about the setup or customization? Reach out via the contact form or check the [Lovable Documentation](https://docs.lovable.dev).

---

**Built by Tshepo Tau** | Cloud Engineer | Full-Stack Developer