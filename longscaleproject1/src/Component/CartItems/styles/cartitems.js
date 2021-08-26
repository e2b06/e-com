import styled from 'styled-components'

// Cart Center
export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  grid-template-rows: 75px;
  margin-bottom: 3rem;
  grid-template-rows: 75px;
  place-items: center;
  grid-gap: 3rem 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 170px 1fr 1fr 1fr auto;
  }
`

//  Item
export const Item = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`

//  Image
export const ItemLeft = styled.div`
  border-radius: 5px;
  height: 4.5rem;
  margin-right: 1rem;
  overflow: hidden;
  max-width: 6rem;
  width: 100%;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`

export const ItemRight = styled.div`
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: capitalize;
  width: 100%;

  //  Text
  > p {
    align-items: center;
    color: #617d98;
    display: flex;
    font-size: 0.85rem;
  }
`
export const ColorIcon = styled.span`
  background-color: ${({ color }) => color};
  border-radius: 5px;
  height: 1rem;
  margin-left: 0.25rem;
  width: 1rem;
  transition: all 500ms linear;

  @media screen and (max-width: 992px) {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
  }
`

//  Price
export const Price = styled.div`
  > p {
    color: #ab7a5f;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 768px) {
    > p {
      display: none;
    }
  }
`

// Quantity
export const Quantity = styled.div`
  align-items: center;
  display: flex;

  // Amount
  > h1 {
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin: 0 0.5rem;
    width: 2rem;
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

// Subtotal
export const Subtotal = styled.div`
  margin-right: 1rem;

  > p {
    color: #617d98;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 768px) {
    > p {
      display: none;
    }
  }
`

// Dele Item Btn
export const RemoveBtn = styled.button`
  align-items: center;
  background-color: #bb2525;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  padding: 0.25rem;
`
