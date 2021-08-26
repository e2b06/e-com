import React, { useContext } from 'react'

//  Component
import Jumbotron from '../../Component/Jumbotron'
import Loading from '../../Component/Loading'
import Feature from '../../Component/Feature'
import Info from '../../Component/Info'
import Promotion from '../../Component/Promotion'

//  Products Context
import ProductsContext from '../../Context/ProductsContext'

function Home() {
  const { isLoading } = useContext(ProductsContext)
  return (
    <div>
      <Jumbotron />
      {isLoading ? <Loading /> : <Feature />}
      <Info />
      <Promotion />
    </div>
  )
}

export default Home
