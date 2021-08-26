import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = styled.nav`
  display: flex;
  height: 5rem;
`

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  margin: 0 auto;
  max-width: 1170px;
  position: relative;
  width: 90vw;
`

export const NavLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  > a > img {
    margin-left: -15px;
    width: 175px;
  }
`

export const NavCenter = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;

  li {
    margin: 0 0.5rem;
  }
`

// Center Links
//  Style Link(react-rounter)
export const StyledLink = styled(Link)`
  color: #324d67;
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 0.5rem;
  text-decoration: none;

  :hover {
    border-bottom: 2px solid #ab7a5f;
  }
`

export const NavRight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 225px;

  //  Cart Link && LogIn / LogOut Button
  > a,
  > button {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;
    color: #102a42;
    cursor: pointer;
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-decoration: none;

    > span {
      display: flex;
      align-items: center;
      margin-left: 0.25rem;
    }
  }
`

// Cart Link (include NavRight Style)
// for styling Cart Bag Count
export const Cart = styled(Link)`
  > span {
    position: relative;

    // Cart Bag Count
    > p {
      display: grid;
      place-content: center;
      background-color: #ab7a5f;
      border-radius: 50%;
      color: #fff;
      font-size: 0.8rem;
      height: 1.5rem;
      position: absolute;
      width: 1.5rem;
      top: -10px;
      right: -15px;
    }
  }
`

//  Toggle in 992px screen width
export const MenuBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: auto;

  > svg {
    color: #ab7a5f;
    font-size: 2rem;
  }
`
