import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.tsx'
import { CartProvider } from './context/CartContext'
import { CartUIProvider } from './context/CartUIContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <CartUIProvider>
          <App />
        </CartUIProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
