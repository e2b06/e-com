import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  height: 60vh;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  > div {
    width: 26rem;
    margin: auto;
    align-items: center;
  }
`

export const Info = styled.div`
  //  Greeting
  > h2 {
    letter-spacing: 2px;
    margin-bottom: 0.75rem;
  }

  //  Total Amount
  > p {
    color: #324d67;
    margin-bottom: 1.25rem;
  }
`

//  Check Out Btn
export const CheckOutBtn = styled.button`
  background-color: #ab7a5f;
  border: none;
  border-radius: 5px;
  color: #eaded7;
  cursor: pointer;
  font-size: 0.95rem;
  letter-spacing: 2px;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms linear;

  :hover {
    background-color: #c5a491;
    color: #5f4435;
  }
`
