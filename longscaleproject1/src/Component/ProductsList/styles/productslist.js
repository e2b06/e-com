import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  margin-top: 2rem;

  @media screen and (max-width: 1170px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const RowContainer = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 2rem;
  place-content: center;
`

export const EmptyMessage = styled.div`
  height: 70vh;
  > h4 {
    letter-spacing: 2px;
  }
`
