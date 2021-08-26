import React from 'react'

//  CSS Styles
import { Section, Container, Path, StyledLink } from './styles/sectiontitle'

function SectionTitle({ name, path }) {
  //  spread path
  let arr = path.split('/').join('  / ').split('  ')

  //  Previous Link & Current Link
  const previous = [...arr.splice(0, arr.length - 1)]
  const [current] = arr.splice(arr.length - 1)

  return (
    <Section>
      <Container>
        <Path>
          <StyledLink to='/'>Home</StyledLink>

          {previous.map((pre) => {
            return (
              //  to={} can't contain string with space
              <StyledLink key={Math.random()} to={pre.replace(' ', '')}>
                {pre}
              </StyledLink>
            )
          })}
          <span>{name ? `/ ${name}` : `${current}`}</span>
        </Path>
      </Container>
    </Section>
  )
}

export default SectionTitle
