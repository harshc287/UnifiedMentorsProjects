# WinterWear - Winter Clothing E-commerce Website

A modern, responsive e-commerce website built with React and Bootstrap for winter clothing. Features a complete shopping experience with product browsing, search, cart functionality, and detailed product pages.

## 🌟 Features

- **Responsive Design**: Mobile-first design using Bootstrap 5
- **Product Catalog**: Browse winter clothing with filtering and sorting
- **Search Functionality**: Real-time search with suggestions
- **Shopping Cart**: Add/remove items, quantity management
- **Product Details**: Detailed product pages with image gallery
- **Modern UI**: Clean, winter-themed design with hover effects
- **State Management**: React Context for cart state
- **Routing**: React Router for navigation

## 🛍️ Product Categories

- Winter Jackets
- Sweaters
- Base Layers
- Footwear
- Accessories (Scarves, Gloves, Hats, Socks)
- Vests
- Coats

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd winter-clothing-ecommerce
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

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar with search
│   ├── ProductCard.js     # Product card component
│   ├── ProductList.js     # Product listing with filters
│   ├── ProductDetail.js   # Individual product page
│   ├── Cart.js           # Shopping cart page
│   └── Footer.js         # Footer component
├── context/
│   └── CartContext.js    # Cart state management
├── data/
│   └── products.js       # Sample product data
├── App.js               # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🎨 Components Overview

### Navbar
- Brand logo and navigation links
- Real-time search with dropdown suggestions
- Shopping cart icon with item count
- Responsive mobile menu

### ProductList
- Product grid with filtering and sorting
- Category filters
- Price range filters
- Search functionality
- Newsletter signup

### ProductCard
- Product image with hover effects
- Product information and pricing
- Add to cart and wishlist buttons
- Quick view functionality

### ProductDetail
- Large product images with gallery
- Size and color selection
- Quantity selector
- Add to cart functionality
- Product specifications and reviews tabs

### Cart
- Shopping cart items list
- Quantity management
- Price calculations
- Checkout process
- Related products

### Footer
- Company information
- Quick links
- Newsletter signup
- Social media links
- Contact information

## 🛒 Shopping Features

- **Add to Cart**: Add products with size and color selection
- **Cart Management**: Update quantities, remove items
- **Search**: Find products by name, category, or description
- **Filtering**: Filter by category and price range
- **Sorting**: Sort by name, price, or category
- **Wishlist**: Save favorite products (UI only)

## 🎯 Key Technologies

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Bootstrap 5**: Responsive UI framework
- **React Bootstrap**: Bootstrap components for React
- **React Icons**: Icon library
- **Context API**: State management

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## 🎨 Styling

- Bootstrap 5 for responsive grid and components
- Custom CSS for winter theme
- Hover effects and animations
- Modern card-based design
- Winter color scheme

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 13,
  name: "New Winter Item",
  price: 99.99,
  image: "image-url",
  category: "Category",
  description: "Product description",
  sizes: ["S", "M", "L"],
  colors: ["Black", "White"],
  inStock: true
}
```

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Inline styles or CSS classes
- Bootstrap customization: Override Bootstrap variables

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: support@winterwear.com
- Phone: 1-800-WINTER-1

---

**WinterWear** - Stay warm and stylish this winter! ❄️