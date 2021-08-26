import React, { useContext } from 'react'

// User Context
import UserContext from '../../Context/UserContext'

// React Router
import { Redirect, Route } from 'react-router-dom'

function ProtectedRouter({ children, ...rest }) {
  const { status } = useContext(UserContext)

  return (
    <Route
      {...rest}
      render={() => (status ? children : <Redirect from='Checkout' to='/' />)}
    />
  )
}

export default ProtectedRouter
