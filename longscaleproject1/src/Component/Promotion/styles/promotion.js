import styled from 'styled-components'

export const Section = styled.div`
  padding: 5rem 0;
`

export const Container = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    height: auto;
  }
`

export const PromotionHeader = styled.div`
  // Title
  > h1 {
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }
`

export const PromotionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    display: block;
  }
`
export const FooterLeft = styled.div`
  width: auto;
  max-width: 600px;

  // Content
  > p {
    color: #617d98;
    line-height: 2;
    margin-bottom: 1.5rem;
  }
`

export const FooterRight = styled.div`
  width: auto;
  max-width: 40rem;
`

export const InputContainer = styled.div`
  border: 2px solid #222;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr auto;
  height: auto;
  overflow: hidden;
  width: auto;

  // Input
  > input {
    border: none;
    color: #324d67;
    font-size: 1rem;
    height: 100%;
    padding: 0.5rem 1rem;
    width: 20rem;

    ::placeholder {
      color: #222;
    }
  }

  // Subscrible Btn
  > button {
    background-color: #ab7a5f;
    border: none;
    border-left: 2px solid #222;
    color: #222;
    font-size: 1rem;
    height: 100%;
    letter-spacing: 2px;
    padding: 0.5rem 0.75rem;
    transition: all 300ms linear;

    :hover {
      color: #fff;
    }
  }
`
