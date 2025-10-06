# Winter Clothes E-Commerce Website

A modern, fully-functional e-commerce website for winter clothing built with React and Bootstrap. This project features a complete shopping experience with product browsing, search functionality, shopping cart, and checkout process.

## 🌟 Features

### Core Features
- **Product Catalog**: Browse through a curated selection of winter clothing items
- **Search Functionality**: Search products by name or description
- **Category Filtering**: Filter products by category (Jackets, Coats, Sweaters, etc.)
- **Product Sorting**: Sort by price, rating, or name
- **Shopping Cart**: Add/remove items, update quantities
- **Responsive Design**: Mobile-friendly layout using Bootstrap
- **Persistent Cart**: Cart data saved to localStorage

### Product Features
- Product ratings and reviews
- Size selection
- Stock availability indicators
- Featured products section
- Product detail pages with comprehensive information

### Shopping Experience
- Dynamic cart management
- Real-time cart count badge
- Price calculations (subtotal, shipping, tax)
- Free shipping on orders over $100
- Secure checkout process
- Order confirmation

### Pages
1. **Home**: Hero carousel, featured products, categories, newsletter signup
2. **Products**: Full product listing with filters and search
3. **Product Detail**: Individual product information
4. **Cart**: Shopping cart management
5. **Checkout**: Complete checkout form with order summary
6. **About**: Company information and mission
7. **Contact**: Contact form and information

## 📁 Project Structure

```
winter-clothes-ecommerce/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # React components
│   │   ├── Navbar.js          # Navigation bar with search
│   │   ├── Footer.js          # Footer component
│   │   ├── ProductCard.js     # Individual product card
│   │   ├── ProductList.js     # Product listing with filters
│   │   ├── ProductDetail.js   # Product detail page
│   │   ├── Cart.js            # Shopping cart
│   │   └── Checkout.js        # Checkout page
│   ├── pages/                 # Page components
│   │   ├── Home.js            # Home page
│   │   ├── About.js           # About page
│   │   └── Contact.js         # Contact page
│   ├── context/               # React Context
│   │   └── CartContext.js     # Cart state management
│   ├── data/                  # Static data
│   │   └── products.js        # Product data
│   ├── App.js                 # Main App component
│   ├── App.css                # Global styles
│   ├── index.js               # Entry point
│   └── index.css              # Base styles
├── package.json               # Dependencies
└── README.md                  # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🛠️ Technologies Used

- **React** (18.2.0) - UI library
- **React Router DOM** (6.20.0) - Routing
- **Bootstrap** (5.3.2) - CSS framework
- **React Bootstrap** (2.9.1) - Bootstrap components for React
- **Bootstrap Icons** (1.11.2) - Icon library
- **React Scripts** (5.0.1) - Build tools

## 💡 Key Components

### Cart Context
Global state management for the shopping cart using React Context API:
- Add to cart
- Remove from cart
- Update quantity
- Calculate totals
- Persistent storage (localStorage)

### Navigation Bar
- Responsive navigation
- Search functionality
- Cart badge with item count
- Mobile-friendly menu

### Product Card
- Product image
- Name and category
- Rating display
- Price
- Size selection
- Add to cart button
- Stock indicator

### Shopping Cart
- Item management
- Quantity controls
- Price calculations
- Order summary
- Shipping information

### Checkout
- Shipping information form
- Payment information form
- Order summary
- Form validation
- Order confirmation

## 🎨 Design Features

- Modern, clean UI
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Bootstrap grid system
- Custom color scheme
- Hover effects
- Loading states
- Success/error alerts

## 📦 Product Categories

- Jackets
- Coats
- Sweaters
- Hoodies
- Accessories
- Footwear
- Bottoms

## 🔒 Features to Note

- **Responsive**: Works on all device sizes
- **Accessible**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and lazy loading
- **SEO**: Proper meta tags and structure
- **User Experience**: Intuitive navigation and clear CTAs

## 🌐 Available Scripts

### `npm start`
Runs the app in development mode

### `npm build`
Builds the app for production

### `npm test`
Launches the test runner

### `npm eject`
Ejects from Create React App (one-way operation)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: ≥ 992px

## 🎯 Future Enhancements

- User authentication
- Product reviews and ratings
- Wishlist functionality
- Order history
- Payment gateway integration
- Email notifications
- Admin dashboard
- Inventory management
- Multi-language support
- Currency conversion

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

For any questions or feedback, please use the contact form on the website.

---

**Built with ❤️ using React and Bootstrap**
