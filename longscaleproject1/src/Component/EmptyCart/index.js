import React from 'react'
import { Section, Container, Title, FillInLink } from './styles/emptycart'

function EmptyCart() {
  return (
    <Section>
      <Container>
        <Title>Your cart is empty</Title>
        <FillInLink to='/Products'>fill it</FillInLink>
      </Container>
    </Section>
  )
}

export default EmptyCart
