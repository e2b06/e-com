import React, { useReducer } from 'react'

//  Reducer
import { reducer } from '../Reducer/CartReducer'

//  constant
import { cartStorage } from '../Utils/helper/cartstorage'

const CartContext = React.createContext()

//  get item from local storage
const defaultState = cartStorage.getItem() || {
  cartProducts: [],
  subtotal: 0,
  totalAmount: 0,
  shippingFee: 554,
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState)

  //  Add Product to Cart (AddToCart)
  const addCartProducts = (product) => {
    dispatch({ type: 'ADD_CART', payload: product })
  }

  //  Add Product Amount  (CartItems)
  const addProductAmount = (index, stock) => {
    dispatch({ type: 'ADD_PRODUCT_AMOUNT', payload: { index, stock } })
  }

  //  Reduce Product Amount (CartItems)
  const minusProductAmount = (index) => {
    dispatch({ type: 'MINUS_PRODUCT_AMOUNT', payload: index })
  }

  //  Remove Cart Product (CartItems)
  const removeProduct = (id) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id })
  }

  //  Clear Cart  (CartTotalBox)
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  return (
    <CartContext.Provider
      value={{
        addCartProducts,
        addProductAmount,
        clearCart,
        minusProductAmount,
        removeProduct,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartContext
export { CartProvider }
