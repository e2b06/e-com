import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Section = styled.section`
  background-color: #eaded7;
  padding: 3rem 0 3.5rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
`

// Section Path
export const Path = styled.h1`
  color: #453227;
  font-size: 2rem;
  letter-spacing: 2px;
  text-transform: capitalize;
`

// Style Link(react-router)
export const StyledLink = styled(Link)`
  color: #795744;
  padding-right: 0.5rem;
  text-decoration: none;
  transition: all 300ms linear;

  :hover {
    color: #453227;
  }
`
