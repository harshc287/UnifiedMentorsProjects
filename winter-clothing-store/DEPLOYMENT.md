# Deployment Guide

## Quick Deployment Options

### 1. Netlify (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

3. Or connect your Git repository to Netlify for automatic deployments

### 2. Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### 3. GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/winter-clothing-store",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Static Server (Local Testing)

1. Install serve globally:
   ```bash
   npm install -g serve
   ```

2. Serve the build:
   ```bash
   serve -s build
   ```

## Environment Variables

Copy `.env.example` to `.env` and update the values as needed for your deployment environment.

## Build Optimization

The project is already optimized for production with:
- Code splitting
- Minification
- Tree shaking
- Asset optimization

## Performance Tips

- Images are loaded from Unsplash CDN for optimal performance
- Bootstrap CSS is loaded from CDN
- React components are optimized for re-rendering
- Cart state is managed efficiently with Context API