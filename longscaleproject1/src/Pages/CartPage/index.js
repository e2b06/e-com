import React, { useContext } from 'react'

//  Cart Context
import CartContext from '../../Context/CartContext'

//  React Router
import { useLocation } from 'react-router-dom'

//  Component
import CartList from '../../Component/CartList'
import CartTotalBox from '../../Component/CartTotalBox'
import EmptyCart from '../../Component/EmptyCart'
import SectionTitle from '../../Component/SectionTitle'

function Cart() {
  const { totalAmount } = useContext(CartContext)

  const { pathname } = useLocation()

  if (totalAmount === 0) {
    return (
      <div>
        <EmptyCart />
      </div>
    )
  } else {
    return (
      <>
        <SectionTitle path={pathname} />
        <CartList />
        <CartTotalBox />
      </>
    )
  }
}

export default Cart
