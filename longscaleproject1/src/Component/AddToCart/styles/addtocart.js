import styled from 'styled-components'

// React Router
import { Link } from 'react-router-dom'

// Color Container
export const ColorContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 1.5rem;
  margin: 2rem 0;
  width: 16rem;

  // Title
  > h5 {
    font-size: 1.15rem;
  }
  // Data
  > p {
    width: 7rem;
  }
  // Color Button Container
  > div {
    display: flex;
  }
`

// Color Button
export const ColorBtn = styled.button`
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: grid;
  font-size: 1.25rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  opacity: ${({ active }) => active || '0.5'};
  width: 1.5rem;
  place-content: center;
`
// Amount Container
export const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;

  // Amount
  > h1 {
    font-size: 2.5rem;
    letter-spacing: 1px;
    margin: 0 0.75rem;
    width: 4rem;
    text-align: center;
  }

  // Minus / Plus Button
  > button {
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: 1.25rem;
  }
`

export const StyledLink = styled(Link)`
  border: none;
  border-radius: 5px;
  background-color: #ab7a5f;
  color: #eaded7;
  cursor: pointer;
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
