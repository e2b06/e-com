import React, { useContext } from 'react'

// Cart Context
import CartContext from '../../Context/CartContext'
import UserContext from '../../Context/UserContext'

// Component
import EmptyCart from '../../Component/EmptyCart'
import SectionTitle from '../../Component/SectionTitle'
import Payment from '../../Component/Payment'

// React Router
import { Redirect, useRouteMatch } from 'react-router-dom'

function Checkout() {
  const { totalAmount } = useContext(CartContext)
  const { status, user } = useContext(UserContext)
  const { path } = useRouteMatch()

  return (
    <>
      {status || <Redirect to='/' />}

      <div>
        <SectionTitle path={path} />
        {totalAmount === 0 ? <EmptyCart /> : <Payment {...user} />}
      </div>
    </>
  )
}

export default Checkout
