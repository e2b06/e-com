import React from 'react'
import {
  Section,
  Container,
  PromotionHeader,
  PromotionFooter,
  FooterLeft,
  FooterRight,
  InputContainer,
} from './styles/promotion'

function Promotion() {
  return (
    <Section>
      <Container>
        <PromotionHeader>
          <h1>Join our newsletter and get 20% off</h1>
        </PromotionHeader>
        <PromotionFooter>
          <FooterLeft>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint unde quaerat ratione soluta veniam provident adipisci cumque
              eveniet tempore?
            </p>
          </FooterLeft>
          <FooterRight>
            <InputContainer>
              <input type='text' placeholder='Enter Email' />
              <button>Subscribe</button>
            </InputContainer>
          </FooterRight>
        </PromotionFooter>
      </Container>
    </Section>
  )
}

export default Promotion
