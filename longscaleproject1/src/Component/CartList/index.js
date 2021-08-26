import React, { useContext } from 'react'

// Cart Context
import CartContext from '../../Context/CartContext'

//  Component
import CartItems from '../CartItems'

// CSS Style
import {
  Section,
  Container,
  CartHeader,
  CartCenter,
  CartFooter,
  ContinueShoppingLink,
  ClearCartBtn,
} from './styles/cartlist'

function CartList() {
  const { cartProducts, clearCart } = useContext(CartContext)

  return (
    <Section>
      <Container>
        <CartHeader>
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </CartHeader>
        <hr />
        <CartCenter>
          {cartProducts.map((cartitem, index) => {
            return <CartItems key={cartitem.id} {...cartitem} index={index} />
          })}
        </CartCenter>
        <hr />
        <CartFooter>
          <ContinueShoppingLink to='/Products'>
            continue shopping
          </ContinueShoppingLink>
          <ClearCartBtn onClick={clearCart} type='button'>
            clear shopping cart
          </ClearCartBtn>
        </CartFooter>
      </Container>
    </Section>
  )
}

export default CartList
