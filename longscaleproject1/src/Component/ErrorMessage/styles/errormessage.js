import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Section = styled.section`
  background-color: #eaded7;
  padding: 9rem 0;
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
  /* height: 60vh; */
  text-align: center;
  > h1 {
    font-size: 8.5rem;
    margin-bottom: 1rem;
  }

  > h5 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`

export const BackHomeBtn = styled(Link)`
  background-color: #ab7a5f;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  color: #eaded7;
  font-size: 0.95rem;
  letter-spacing: 2px;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms linear;

  :hover {
    background-color: #c5a491;
    color: #5f4435;
  }
`
