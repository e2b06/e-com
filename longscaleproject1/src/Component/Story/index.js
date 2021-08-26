import React from 'react'
import {
  Section,
  Container,
  ImgContainer,
  StoryLeft,
  StoryRight,
} from './styles/story'

function Story() {
  return (
    <Section>
      <Container>
        <StoryLeft>
          <ImgContainer>
            <img
              src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg'
              alt=''
            />
          </ImgContainer>
        </StoryLeft>
        <StoryRight>
          <h1>our story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </StoryRight>
      </Container>
    </Section>
  )
}

export default Story
