import React, { useState, useRef, useEffect, useContext } from 'react'

//  Cart Context
import CartContext from '../../Context/CartContext'
import UserContext from '../../Context/UserContext'

//  Component
import NavMenu from '../NavMenu'

//  React Router
import { Link } from 'react-router-dom'

//CSS Style
import {
  Navbar,
  Container,
  NavLeft,
  NavCenter,
  StyledLink,
  NavRight,
  Cart,
  MenuBtn,
} from './styles/header'

// React Icon
import { FaShoppingCart } from 'react-icons/fa'
import { MdPersonAdd } from 'react-icons/md'
import { TiThMenu } from 'react-icons/ti'

function Header() {
  const [isToggleMenu, setIsToggleMenu] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const navbar = useRef(null)

  const { totalAmount } = useContext(CartContext)
  const { status, LogInHandler, LogOutHandler } = useContext(UserContext)

  useEffect(() => {
    if (navbar.current.getBoundingClientRect().width <= 992) {
      setIsToggleMenu(true)
    }

    const resizeHandler = () => {
      if (navbar.current.getBoundingClientRect().width <= 992) {
        setIsToggleMenu(true)
      } else {
        setIsToggleMenu(false)
      }
    }
    window.addEventListener('resize', resizeHandler)
    // Clear Function
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <Navbar ref={navbar}>
      <Container>
        <NavLeft>
          <Link to='/'>
            <img src='images/icon.png' alt='company-img' />
          </Link>
        </NavLeft>
        {isToggleMenu ? (
          <MenuBtn onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <TiThMenu />
          </MenuBtn>
        ) : (
          <>
            <NavCenter>
              <li>
                <StyledLink to='/'>Home</StyledLink>
              </li>
              <li>
                <StyledLink to='/About'>About</StyledLink>
              </li>
              <li>
                <StyledLink to='/Products'>Products</StyledLink>
              </li>
              {status && (
                <li>
                  <StyledLink to='/Checkout'>Checkout</StyledLink>
                </li>
              )}
            </NavCenter>
            <NavRight>
              <Cart to='/Cart'>
                Cart
                <span>
                  <FaShoppingCart />
                  <p>{totalAmount}</p>
                </span>
              </Cart>

              <button
                onClick={status ? LogOutHandler : LogInHandler}
                type='button'
              >
                {status ? 'Logout' : 'Login'}
                <span>
                  <MdPersonAdd />
                </span>
              </button>
            </NavRight>
          </>
        )}
        <NavMenu
          isOpenMenu={isOpenMenu}
          totalAmount={totalAmount}
          setIsOpenMenu={setIsOpenMenu}
        />
      </Container>
    </Navbar>
  )
}

export default Header
