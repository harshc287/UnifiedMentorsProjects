# ❄️ WinterWear - E-Commerce Store

A modern, responsive e-commerce website for winter clothing built with React and Bootstrap.

## Features

- **Product Catalog**: Browse through a wide range of winter clothing items
- **Search Functionality**: Search products by name, description, or category
- **Category Filtering**: Filter products by categories (coats, jackets, sweaters, etc.)
- **Product Details**: Detailed product pages with size and color selection
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Clean, modern interface with smooth animations

## Technologies Used

- **React 18**: Frontend framework
- **React Router**: Client-side routing
- **Bootstrap 5**: CSS framework for responsive design
- **React Bootstrap**: Bootstrap components for React
- **Context API**: State management for cart functionality

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar with search
│   ├── ProductCard.js     # Product display card
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js            # Home page with product grid
│   ├── ProductDetail.js   # Individual product page
│   ├── Cart.js            # Shopping cart page
│   └── Category.js        # Category filtering page
├── context/
│   └── CartContext.js     # Cart state management
├── data/
│   └── products.js        # Product data
└── App.js                 # Main application component
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd winter-clothing-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Features Overview

### 🏠 Home Page
- Hero carousel with featured collections
- Product grid with filtering and sorting options
- Search functionality
- Category navigation

### 🛍️ Product Pages
- Detailed product information
- Size and color selection
- Add to cart functionality
- Product images and descriptions

### 🛒 Shopping Cart
- View all cart items
- Update quantities
- Remove items
- Order summary with totals
- Responsive cart management

### 📱 Responsive Design
- Mobile-first approach
- Bootstrap grid system
- Responsive navigation
- Touch-friendly interface

## Product Categories

- Coats & Jackets
- Sweaters & Cardigans
- Hoodies & Fleece
- Winter Accessories
- Footwear
- Thermal Underwear

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from Unsplash
- Bootstrap for the responsive framework
- React community for excellent documentation