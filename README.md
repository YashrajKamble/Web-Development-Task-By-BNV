# 🛍️ Modern E-Commerce Web Application

<div align="center">
  <p>
    <a href="#getting-started">Get Started</a> ·
    <a href="#api-integration">API</a> ·
    <a href="#deployment">Deployment</a> ·
    <a href="#contributing">Contributing</a>
  </p>
  
  [![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

## 📋 Project Overview

A modern, responsive e-commerce platform built with cutting-edge web technologies. This application provides a seamless shopping experience with features like product categorization, real-time search, and an intuitive user interface.

### 🌟 Key Features

- **Modern React Architecture**: Built with React 19 for optimal performance
- **Lightning Fast**: Powered by Vite for rapid development and production builds
- **Responsive Design**: Fully responsive layout that works on all devices
- **Product Management**: Browse and filter products by categories
- **Instant Search**: Real-time product search functionality
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Performance Optimized**: Code splitting and lazy loading for fast load times

## 🛠️ Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|----------|
| React | 19.1.1 | Frontend Library |
| Vite | 7.1.2 | Build Tool & Dev Server |
| Tailwind CSS | 4.1.13 | Utility-First CSS Framework |
| React DOM | 19.1.1 | DOM Rendering |
| ESLint | 9.33.0 | Code Linting |

### Development Dependencies

- @vitejs/plugin-react: ^5.0.0
- @types/react: ^19.1.10
- @types/react-dom: ^19.1.7
- eslint: ^9.33.0
- eslint-plugin-react-hooks: ^5.2.0
- eslint-plugin-react-refresh: ^0.4.20

## 🌐 API Integration

This project integrates with the following APIs:

### Product API
- **Base URL**: `https://fakestoreapi.com`
- **Endpoints**:
  - `GET /products` - Fetch all products
  - `GET /products/categories` - Get product categories
  - `GET /products/category/{category}` - Get products by category
  - `GET /products/{id}` - Get single product details

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or Yarn (v1.22.0 or higher)
- Git

### Installation Guide

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # OR using Yarn
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add any required environment variables:
   ```env
   VITE_API_BASE_URL=https://fakestoreapi.com
   ```

### Available Scripts

In the project directory, you can run:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |
| `npm run lint:fix` | Fix auto-fixable linting issues |

## 🏗️ Project Structure

```
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, and other static assets
│   ├── components/      # Reusable UI components
│   │   ├── BlogSection/     # Blog posts section
│   │   ├── ColorSection/    # Color theme showcase
│   │   ├── Feedback/        # Customer testimonials
│   │   ├── Footer/          # Site footer
│   │   ├── Header/          # Navigation header
│   │   ├── HeroSection/     # Main banner
│   │   ├── Nav/             # Navigation menu
│   │   ├── SubHeroSection/  # Secondary banner
│   │   └── TrendingSection/ # Featured products
│   ├── hooks/           # Custom React hooks
│   │   ├── useCurrency.jsx  # Currency formatting
│   │   ├── useIcons.jsx     # SVG icon components
│   │   └── useScrollTop.jsx # Scroll-to-top functionality
│   ├── services/        # API services
│   │   ├── api.js       # API configuration
│   │   └── productService.js # Product-related API calls
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .eslintrc.js         # ESLint configuration
├── .gitignore           # Git ignore file
├── index.html           # Main HTML file
├── package.json         # Project dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 🛠️ Development

### Code Quality

This project enforces code quality with:
- ESLint for JavaScript/JSX linting
- Prettier for code formatting
- EditorConfig for consistent coding styles

To run the linter:
```bash
npm run lint
```

To automatically fix linting issues:
```bash
npm run lint:fix
```

### Git Hooks

Pre-commit hooks are set up to run:
- ESLint checks
- Code formatting with Prettier
- Test suite (if applicable)

## 🚀 Deployment

### Building for Production

Create an optimized production build:
```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

### Deployment Options

#### Vercel (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the repository to Vercel
3. Vercel will automatically detect the Vite project and configure the build settings

#### Netlify
1. Push your code to a Git repository
2. Create a new site in Netlify and link your repository
3. Set the build command to `npm run build` and publish directory to `dist`

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing development experience
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Fake Store API](https://fakestoreapi.com/) for the mock product data
