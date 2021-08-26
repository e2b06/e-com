import React, { useContext } from 'react'

// Cart Context
import CartContext from '../../Context/CartContext'
import UserContext from '../../Context/UserContext'

//  Helper
import { currencyFunc } from '../../Utils/helper/currency'

// CSS Style
import {
  Section,
  Container,
  TotalBox,
  Subtotal,
  ShippingFee,
  OrderTotal,
  StyledLink,
  LoginBtn,
} from './styles/carttotalbox'

function CartTotalBox() {
  const { shippingFee, subtotal } = useContext(CartContext)
  const { status, LogInHandler } = useContext(UserContext)

  return (
    <Section>
      <Container>
        <div>
          <TotalBox>
            <Subtotal>
              subtotal : <span>${currencyFunc(subtotal)}</span>
            </Subtotal>
            <ShippingFee>
              shipping fee : <span>${currencyFunc(shippingFee)}</span>
            </ShippingFee>
            <hr />
            <OrderTotal>
              order total :<span>${currencyFunc(subtotal + shippingFee)}</span>
            </OrderTotal>
          </TotalBox>
          {status ? (
            <div>
              <StyledLink to='/Checkout'>process to checkout</StyledLink>
            </div>
          ) : (
            <LoginBtn onClick={LogInHandler} type='button'>
              login
            </LoginBtn>
          )}
        </div>
      </Container>
    </Section>
  )
}

export default CartTotalBox
