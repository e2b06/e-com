import React from 'react'

// CSS Styles
import { Container } from './styles/star'

// React Icons
import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im'

function Star({ star }) {
  // Modify Star Values
  const starVals = Math.round(star) + 0.5
  const starArrays = Array.from({ length: 5 }, (v, i) => starVals - i)

  return (
    <Container>
      {starArrays.map((star) => {
        if (star === 0.5) {
          return (
            <React.Fragment key={Math.random()}>
              <ImStarHalf />
            </React.Fragment>
          )
        } else if (Math.sign(star) === 1) {
          return (
            <React.Fragment key={Math.random()}>
              <ImStarFull />
            </React.Fragment>
          )
        } else if (Math.sign(star) === -1) {
          return (
            <React.Fragment key={Math.random()}>
              <ImStarEmpty />
            </React.Fragment>
          )
        } else {
          return ''
        }
      })}
    </Container>
  )
}

export default Star
