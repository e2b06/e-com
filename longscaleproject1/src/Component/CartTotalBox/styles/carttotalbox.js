import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Section = styled.section`
  background-color: #fff;
  padding: 3rem 0 5rem;
`

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: flex;
  justify-content: flex-end;

  > div {
    @media screen and (max-width: 776px) {
      margin: 0 auto;
    }
  }
`
/////    Total Box    /////
export const TotalBox = styled.div`
  border: 1px solid #bcccdc;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1.5rem 3rem 0;

  //  Subtotal, OrderTotal, OrderTotal
  > h4,
  > h5,
  > p {
    display: grid;
    grid-template-columns: 200px 1fr;
    height: auto;
    place-content: center;
    text-transform: capitalize;
  }

  hr {
    height: 1px;
    border: none;
    background-color: #bcccdc;
  }
`

export const Subtotal = styled.h5`
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
`
export const ShippingFee = styled.p`
  margin-bottom: 1.25rem;
`

export const OrderTotal = styled.h4`
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin: 2rem 0;
`
/////    Total Box    /////

/////    Check Out Link    /////
export const StyledLink = styled(Link)`
  background-color: #ab7a5f;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  color: #eaded7;
  display: block;
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms linear;

  :hover {
    background-color: #c5a491;
    color: #5f4435;
  }
`

/////    LogIn Button    /////
export const LoginBtn = styled.button`
  background-color: #ab7a5f;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  color: #eaded7;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms linear;
  width: 100%;

  :hover {
    background-color: #c5a491;
    color: #5f4435;
  }
`
