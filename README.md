# ShopHub - E-commerce Training Project

A modern e-commerce application built with React, Vite, and Tailwind CSS. This project uses the [Platzi Fake Store API](https://fakeapi.platzi.com/) to display products, categories, and shopping cart functionality.

## 🎯 Purpose

This project is designed as a **training assignment for developers**. It contains a fully functional e-commerce application with intentional bugs and incomplete features that developers will need to identify and fix.

## ✨ Features

- 📦 Product listing with grid layout
- 🔍 Search functionality
- 🏷️ Category filtering
- 🛒 Shopping cart with quantity management
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Platzi Fake Store API** - Product data source

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

## 🚀 Getting Started

### Installation

1. Clone or download this project

2. Navigate to the project directory:

```bash
cd project
```

3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ErrorMessage.jsx
│   ├── pages/              # Page components
│   │   ├── ProductsListPage.jsx
│   │   ├── ProductDetailsPage.jsx
│   │   └── CartPage.jsx
│   ├── context/            # React Context providers
│   │   └── CartContext.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useProducts.js
│   │   └── useCategories.js
│   ├── utils/              # Utility functions
│   │   └── api.js
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎓 For Developers

This project is part of your training assignment. Your task is to:

1. **Explore the codebase** - Understand how the application works
2. **Find and fix bugs** - There are intentional bugs throughout the code
3. **Improve functionality** - Some features are incomplete or not working correctly
4. **Learn best practices** - Understand React patterns and common pitfalls

Refer to the **TASKS.md** file for specific assignments.

## 📚 API Documentation

This project uses the Platzi Fake Store API:

- Base URL: `https://api.escuelajs.co/api/v1`
- [Full API Documentation](https://fakeapi.platzi.com/en/rest/products/)

### Main Endpoints Used:

- `GET /products` - Get all products
- `GET /products/{id}` - Get product by ID
- `GET /categories` - Get all categories
- `GET /products/?categoryId={id}` - Filter products by category


## 📄 License

This project is for educational purposes only.

## 🙏 Acknowledgments

- [Platzi Fake Store API](https://fakeapi.platzi.com/) for providing the product data
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Vite](https://vitejs.dev/) for the amazing build tool
