import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, quantity } = action
      const existing = state.items.find((i) => i.id === product.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
          ),
        }
      }
      const itemToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      }
      return { ...state, items: [...state.items, itemToAdd] }
    }
    case 'REMOVE': {
      const id = action.id
      return { ...state, items: state.items.filter((i) => i.id !== id) }
    }
    case 'UPDATE_QTY': {
      const { id, quantity } = action
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== id) }
      }
      return {
        ...state,
        items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      }
    }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const addToCart = (product, quantity = 1) =>
    dispatch({ type: 'ADD', product, quantity })
  const removeFromCart = (id) => dispatch({ type: 'REMOVE', id })
  const updateQuantity = (id, quantity) =>
    dispatch({ type: 'UPDATE_QTY', id, quantity })
  const clearCart = () => dispatch({ type: 'CLEAR' })

  const subtotal = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [state.items]
  )
  const totalQuantity = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  )

  const value = useMemo(
    () => ({
      items: state.items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      totalQuantity,
    }),
    [state.items, subtotal, totalQuantity]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
