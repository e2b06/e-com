import React, { useContext } from 'react'
import { Container, Info, CheckOutBtn } from './styles/payment'

//  Cart Context
import CartContext from '../../Context/CartContext'

//  Helper
import { currencyFunc } from '../../Utils/helper/currency'

function Payment({ displayName }) {
  const { shippingFee, subtotal } = useContext(CartContext)

  return (
    <Container>
      <div>
        <Info>
          <h2>Hello, {displayName}</h2>
          <p>Your total is ${currencyFunc(shippingFee + subtotal)}</p>
          <CheckOutBtn type='button'>CHECK OUT</CheckOutBtn>
        </Info>
      </div>
    </Container>
  )
}

export default Payment
