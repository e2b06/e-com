import styled from 'styled-components'

//  React Router
import { Link } from 'react-router-dom'

export const Container = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 992px) {
    display: block;
  }
`

export const ImgContainer = styled.div`
  border-radius: 5px;
  height: 12.5rem;
  overflow: hidden;
  width: 100%;
  max-width: 18.5rem;
  margin-right: 2rem;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (max-width: 992px) {
  }
  margin-bottom: 1rem;
`

export const RowViewRight = styled.div`
  width: auto;

  > h2 {
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  > h5 {
    color: #b99179;
    font-size: 1rem;
    letter-spacing: 2px;
  }

  > p {
    color: #324d67;
    line-height: 1.5;
    margin: 1rem 0 1.5rem;
    width: auto;
    max-width: 42rem;
  }
`

export const DetailsBtn = styled(Link)`
  border-radius: 5px;
  background-color: #ab7a5f;
  color: #eaded7;
  font-size: 0.5rem;
  letter-spacing: 2px;
  padding: 0.35rem 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms linear;

  :hover {
    background-color: #c5a491;
    color: #5f4435;
  }
`
