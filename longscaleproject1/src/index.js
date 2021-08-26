import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Context
import { ProductsProvider } from './Context/ProductsContext'
import { FilterProvider } from './Context/FilterContext'
import { CartProvider } from './Context/CartContext'
import { UserProvider } from './Context/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <ProductsProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </ProductsProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
