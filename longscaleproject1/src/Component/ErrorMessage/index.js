import React from 'react'
import { Section, Container, BackHomeBtn } from './styles/errormessage'

function ErrorMessage() {
  return (
    <Section>
      <Container>
        <h1>404</h1>
        <h5>Sorry, the page you tried cannot be found</h5>
        <BackHomeBtn to='/'>back home</BackHomeBtn>
      </Container>
    </Section>
  )
}

export default ErrorMessage
