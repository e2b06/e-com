import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Section = styled.section`
  background-color: #fff;
  padding: 4.5rem;
`

export const Container = styled.div`
  text-align: center;
  height: 60vh;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
`

export const FillInLink = styled(Link)`
  border-radius: 5px;
  background-color: #ab7a5f;
  color: #eaded7;
  font-size: 0.95rem;
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
