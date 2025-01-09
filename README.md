# DevOps Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode toggle
- 🎨 Animated background
- 📱 Fully responsive design
- 🚀 Fast and optimized
- 🔧 Easy to customize

## Customization Guide

### Personal Information

1. Open `src/data/personal.ts` and update your information:
   - Name
   - Title
   - About section
   - Contact information
   - Social links

### Projects

1. Add your projects in `src/data/projects.ts`:
   ```typescript
   export const projects = [
     {
       title: "Project Name",
       description: "Project description",
       technologies: ["Tech1", "Tech2"],
       githubUrl: "https://github.com/...",
       liveUrl: "https://...",
       image: "https://..." // Optional
     }
   ];
   ```

### Certifications

1. Update certifications in `src/data/certifications.ts`:
   ```typescript
   export const certifications = [
     {
       name: "Certification Name",
       issuer: "Issuing Organization",
       date: "Month Year",
       credentialUrl: "https://...",
       image: "https://..." // Optional
     }
   ];
   ```

### References

1. Add references in `src/data/references.ts`:
   ```typescript
   export const references = [
     {
       name: "Reference Name",
       position: "Position",
       company: "Company",
       testimonial: "Testimonial text",
       image: "https://..." // Optional
     }
   ];
   ```

### Resume

1. Add your resume PDF file to the `public` folder
2. Update the resume link in `src/App.tsx`

## Deployment Guide

### Netlify Deployment

1. Push your code to GitHub
2. Log in to Netlify
3. Click "New site from Git"
4. Choose your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Vercel Deployment

1. Push your code to GitHub
2. Log in to Vercel
3. Click "New Project"
4. Import your repository
5. Configure project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```