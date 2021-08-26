import React from 'react'

// CSS Style
import {
  Section,
  Container,
  JumbotronLeft,
  Title,
  Content,
  ShopBtn,
  JumbotronRight,
  MainImgContainer,
  SubImgContainer,
} from './styles/jumbotron'

function Jumbotron() {
  return (
    <Section>
      <Container>
        <JumbotronLeft>
          <Title>
            design your <br />
            comfort zone
          </Title>
          <Content>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            quidem inventore numquam, fugit architecto maiores quis. Totam,
            ratione aliquam sed quidem, cum ipsa, minima nesciunt corrupti
            excepturi fuga laboriosam!
          </Content>
          <ShopBtn to='/products'>shop now</ShopBtn>
        </JumbotronLeft>
        <JumbotronRight>
          <MainImgContainer>
            <img src='images/mainhero.png' alt='jumpbotron-img' />
          </MainImgContainer>
          <SubImgContainer>
            <img src='images/subhero.png' alt='jumpbotron-img' />
          </SubImgContainer>
        </JumbotronRight>
      </Container>
    </Section>
  )
}

export default Jumbotron
