import React from 'react'

//  Component
import SectionTitle from '../../Component/SectionTitle'
import Filter from '../../Component/Filter'
import Sort from '../../Component/Sort'
import ProductsList from '../../Component/ProductsList'

//  Page
import SingleProduct from '../SingleProductPage'

//  React Router
import { Route, Switch, useLocation, useRouteMatch } from 'react-router-dom'

//  CSS Styles
import { Container } from './styles/productspage'
import ErrorMessage from '../../Component/ErrorMessage'

function Products() {
  const { pathname, state } = useLocation()
  const { path } = useRouteMatch()

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <SectionTitle path={pathname} />
          <Container>
            <Filter />
            <Sort />
            <ProductsList />
          </Container>
        </Route>

        <Route exact path={`${path}/:productId`}>
          {state ? <SingleProduct /> : <ErrorMessage />}
        </Route>

        <Route>
          <ErrorMessage path='*' />
        </Route>
      </Switch>
    </>
  )
}

export default Products
