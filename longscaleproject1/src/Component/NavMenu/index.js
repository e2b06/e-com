import React, { useContext } from 'react'

//  User Content
import UserContext from '../../Context/UserContext'

// React Router
import { Link } from 'react-router-dom'

// CSS Styles
import {
  Container,
  CloseMenuBtn,
  MenuHeader,
  MenuCenter,
  StyledLink,
  MenuFooter,
  Cart,
} from './styles/navmenu'

// React Icons
import { FaShoppingCart } from 'react-icons/fa'
import { MdPersonAdd } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

function NavMenu({ isOpenMenu, setIsOpenMenu, totalAmount }) {
  const { status, LogInHandler, LogOutHandler } = useContext(UserContext)
  return (
    <Container isOpenMenu={isOpenMenu}>
      <MenuHeader>
        <Link to='/' onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <img src='images/icon.png' alt='company-img' />
        </Link>
        <CloseMenuBtn onClick={() => setIsOpenMenu(!isOpenMenu)} type='button'>
          <IoClose />
        </CloseMenuBtn>
      </MenuHeader>
      <div>
        <MenuCenter>
          <li>
            <StyledLink to='/' onClick={() => setIsOpenMenu(!isOpenMenu)}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to='/About' onClick={() => setIsOpenMenu(!isOpenMenu)}>
              About
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to='/Products'
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              Products
            </StyledLink>
          </li>
          {status && (
            <li>
              <StyledLink
                to='/Checkout'
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              >
                Checkout
              </StyledLink>
            </li>
          )}
        </MenuCenter>
        <MenuFooter>
          <Cart to='/Cart' onClick={() => setIsOpenMenu(!isOpenMenu)}>
            Cart
            <span>
              <FaShoppingCart />
              <p>{totalAmount}</p>
            </span>
          </Cart>
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            onClick={status ? LogOutHandler : LogInHandler}
          >
            {status ? 'Logout' : 'Login'}
            <span>
              <MdPersonAdd />
            </span>
          </button>
        </MenuFooter>
      </div>
    </Container>
  )
}

export default NavMenu
