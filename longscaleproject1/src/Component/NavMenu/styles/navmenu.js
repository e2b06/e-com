import styled from 'styled-components'

// React Router
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 300ms linear;
  transform: ${({ isOpenMenu }) =>
    isOpenMenu ? 'translateX(0)' : 'translateX(-100%)'};
`

export const CloseMenuBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  > svg {
    color: #bb2525;
    font-size: 2.5rem;
    transition: all 300ms linear;

    :hover {
      color: #e66b6b;
    }
  }
`

export const MenuHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  > a > img {
    width: 150px;
  }
`

export const MenuCenter = styled.ul`
  list-style: none;
  margin-bottom: 2rem;

  > li {
    align-items: center;
    display: flex;
    height: 3.5rem;
    transition: all 300ms linear;

    :hover {
      background-color: #f1f5f8;

      > a {
        transform: translateX(15%);
      }
    }
  }
`

export const StyledLink = styled(Link)`
  color: #324d67;
  font-size: 1rem;
  letter-spacing: 2px;
  margin: 0 1.5rem;
  text-decoration: none;
  transition: all 300ms linear;
`

export const MenuFooter = styled.div`
  display: grid;
  grid-gap: 1.75rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  width: 225px;

  //  Cart Link && LogIn / LogOut Btn
  > a,
  > button {
    align-items: center;
    background-color: transparent;
    border: none;
    color: #102a42;
    cursor: pointer;
    display: flex;
    font-size: 1.75rem;
    letter-spacing: 2px;
    text-decoration: none;

    > span {
      display: flex;
      align-items: center;
      margin-left: 0.25rem;
    }
  }
`

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
