import React, { useContext } from 'react'

//  Products Context
import ProductsContext from '../../Context/ProductsContext'

//  Component
import GridView from '../../Component/GridView'

// CSS Style
import {
  Section,
  Container,
  Title,
  Card,
  AllProductBtn,
} from './styles/feature'

function Feature() {
  const { allProducts } = useContext(ProductsContext)
  return (
    <Section>
      <Container>
        <Title>featured products</Title>
        <Card>
          {allProducts.slice(0, 3).map((result) => {
            return <GridView key={result.id} {...result} height={'15rem'} />
          })}
        </Card>
        <AllProductBtn to='/products'>all products</AllProductBtn>
      </Container>
    </Section>
  )
}

export default Feature
