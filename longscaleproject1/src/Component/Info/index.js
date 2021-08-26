import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
// CSS style
import {
  Section,
  Container,
  InfoHead,
  Title,
  Content,
  InfoFooter,
  CardContainer,
} from './styles/info'

function Info() {
  return (
    <Section>
      <Container>
        <InfoHead>
          <Title>
            custom furniture
            <br />
            built only for you
          </Title>
          <Content>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            culpa sed est eius minima. Illo culpa beatae, quasi sit nisi
            similique assumenda nam eaque molestias?
          </Content>
        </InfoHead>

        <InfoFooter>
          <CardContainer>
            <span>
              <GiCompass />
            </span>
            <h5>Mission</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quos, quaerat fugit cupiditate veniam et sit eum,
              ab magnam ullam autem molestiae!
            </p>
          </CardContainer>
          <CardContainer>
            <span>
              <GiDiamondHard />
            </span>
            <h5>Vision</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quos, quaerat fugit cupiditate veniam et sit eum,
              ab magnam ullam autem molestiae?
            </p>
          </CardContainer>
          <CardContainer>
            <span>
              <GiStabbedNote />
            </span>
            <h5>History</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quos, quaerat fugit cupiditate veniam et sit eum,
              ab magnam ullam autem molestiae?
            </p>
          </CardContainer>
        </InfoFooter>
      </Container>
    </Section>
  )
}

export default Info
