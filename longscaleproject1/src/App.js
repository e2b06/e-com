import React from 'react'

//  Component
import Header from './Component/Header'
import Footer from './Component/Footer'

//  Page
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import Products from './Pages/ProductsPage'
import Cart from './Pages/CartPage'
import Checkout from './Pages/CheckoutPage'
import Error from './Pages/ErrorPage'
import ProtectedRouter from './Pages/ProtectRouter'

//  React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//  Global Style
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/About'>
          <About />
        </Route>
        <Route path='/Products'>
          <Products />
        </Route>
        <Route exact path='/Cart'>
          <Cart />
        </Route>
        <ProtectedRouter exact path='/Checkout'>
          <Checkout />
        </ProtectedRouter>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
