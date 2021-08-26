import styled from 'styled-components'

// React Router
import { Link } from 'react-router-dom'

export const Section = styled.section`
  background-color: #fff;
  padding-top: 4rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
`
/////  Cart Header  /////
export const CartHeader = styled.div`
  display: flex;
  margin-right: 2rem;
  margin-bottom: 2rem;
  justify-content: space-around;

  // title
  > p {
    color: #617d98;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 2px;
    margin-left: 3rem;
  }

  //  Subtotal
  p:nth-child(4) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 776px) {
    display: none;
  }
`
/////  Cart Header  /////

/////  Cart Center  /////
export const CartCenter = styled.div`
  margin: 3rem 0;
`
/////  Cart Center  /////

/////  Cart Footer  /////
export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

//  Continue Shopping Button
export const ContinueShoppingLink = styled(Link)`
  background-color: #ab7a5f;
  border-radius: 5px;
  color: #fff;
  font-size: 0.85rem;
  letter-spacing: 2px;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: capitalize;
`

//  Clear Shopping Cart
export const ClearCartBtn = styled.button`
  background-color: #222;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 0.85rem;
  letter-spacing: 2px;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: capitalize;
`
/////  Cart Footer  /////
