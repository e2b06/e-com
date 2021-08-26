import styled from 'styled-components'

export const Section = styled.section``

//  Container
export const Form = styled.form`
  float: left;
  margin-right: 1.5rem;
  top: 15px;
  position: sticky;
  width: 12.5rem;

  // All Sort Title
  h5 {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  @media screen and (max-width: 768px) {
    float: none;
    position: initial;
    text-align: center;
    width: 35%;
    margin: 0 auto 3rem;
  }
`
//  Input Box
export const SearchBox = styled.input`
  background-color: #f1f5f8;
  border-color: transparent;
  border-radius: 5px;
  letter-spacing: 1px;
  padding: 0.5rem;
`

//  Category
export const Category = styled.div`
  margin: 1.25rem 0;
`

//  Category Button
export const CategoryBtn = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: ${({ active }) => active && '1px solid #617d98'};
  color: #617d98;
  cursor: pointer;
  display: block;
  font-size: 0.85rem;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
  padding-bottom: 0.25rem;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Company = styled.div`
  margin: 1.25rem 0;

  > select {
    background-color: #f1f5f8;
    border-color: transparent;
    border-radius: 5px;
    padding: 0.25rem;
  }
`

export const Colors = styled.div`
  > div {
    align-items: center;
    display: flex;
    height: 2rem;

    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
`

export const ColorsBtn = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: #617d98;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
  margin-right: 0.5rem;
  opacity: 0.5;
  opacity: ${({ active }) => active && '1'};
  text-transform: capitalize;

  ${({ color }) =>
    color &&
    `
    background-color: ${color};
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    `}

  //  Tick Icons
  >svg {
    color: #fff;
  }
`
//  ALL Button (colors)
export const ColorsWordBtn = styled.span`
  border-bottom: ${({ active }) => active && '1px solid #617d98'};
  padding-bottom: 0.25rem;
`

export const Price = styled.div`
  margin: 1.25rem 0;

  > label {
    display: block;
    padding: 0.25rem 0;
  }

  > input {
    padding: 0.25rem 0;
  }
`

export const Shipping = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1.25rem;

  > label {
    margin-right: 0.5rem;
    padding: 0.25rem 0;
    text-transform: capitalize;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

// Clear Filters Btn
export const ClearBtn = styled.button`
  background-color: #bb2525;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  letter-spacing: 2px;
  padding: 0.25rem;
  text-transform: capitalize;
`
