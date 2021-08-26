import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  // Product Counts
  > p {
    display: inline-block;
    color: #324d67;
    text-transform: capitalize;
    /* width: 100%;
    max-width: 9rem; */
  }

  // horizontal line
  > hr {
    border: none;
    border-top: 1px solid #bcccdc;
    flex-grow: 1;
    margin: 0 2rem;
  }

  @media screen and (max-width: 577px) {
    display: block;
    text-align: center;

    > hr {
      margin: 1rem 0;
    }
  }
`

// Button Container
export const BtnContainer = styled.div`
  align-items: center;
  display: flex;
  margin-right: 2rem;

  @media screen and (max-width: 577px) {
    margin: 0 0 1rem;
    justify-content: center;
  }
`

//  Grid Btn
export const GridBtn = styled.button`
  align-items: center;
  border: 1px solid #222;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  margin-right: 0.5rem;
  padding: 0.25rem;

  ${({ isGrid }) =>
    isGrid
      ? `
      background-color: #222;
      color: #fff
    `
      : `

      background-color: transparent;
      color: #222;
  `}
`

//  Row Btn
export const RowBtn = styled(GridBtn)`
  ${({ isGrid }) =>
    isGrid
      ? `
      background-color: transparent;
      color: #222;
    `
      : `
    background-color: #222;
    color: #fff
  `}
`

// Option
export const Option = styled.form`
  width: 100%;
  max-width: 12rem;

  > label {
    margin-right: 0.25rem;
    text-transform: capitalize;
  }

  > select {
    border: none;
    font-size: 1rem;
    padding: 0.25rem 0 0.25rem 0.5rem;
    text-transform: capitalize;
  }
`
