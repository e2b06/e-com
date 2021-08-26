import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Feature Section
export const Section = styled.section`
  background-color: #f1f5f8;
  padding: 4.5rem 0 6rem;
`

export const Container = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 2px;
  padding-bottom: 0.75rem;
  position: relative;
  text-transform: capitalize;

  ::before {
    border: solid #ab7a5f;
    border-width: 2px 50px;
    bottom: 0;
    content: '';
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  margin: 4.5rem 0;

  @media screen and (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 844px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const AllProductBtn = styled(Link)`
  background-color: #ab7a5f;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  color: #eaded7;
  font-size: 0.85rem;
  letter-spacing: 2px;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms linear;

  :hover {
    background-color: #c5a491;
    color: #5f4435;
  }
`
