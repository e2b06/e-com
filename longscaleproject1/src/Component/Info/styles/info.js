import styled from 'styled-components'

export const Section = styled.section`
  background-color: #eaded7;
  padding: 5rem 0;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
  height: 45vh;

  @media screen and (max-width: 1280px) {
    height: auto;
  }
`

export const InfoHead = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    display: block;
  }
`

export const Title = styled.h3`
  color: #453227;
  font-size: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-transform: capitalize;
  width: 100%;
`

export const Content = styled.p`
  color: #795744;
  line-height: 1.75;
`

export const InfoFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  justify-content: space-between;
  margin-top: 4rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 844px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardContainer = styled.div`
  background-color: #c5a491;
  border-radius: 5px;
  padding: 2.5rem 2rem 3rem;
  text-align: center;
  width: 100%;

  //  Card Icon
  span {
    background-color: #eaded7;
    border-radius: 50%;
    display: inline-flex;
    font-size: 2rem;
    justify-content: center;
    padding: 1rem;
  }

  //  Card Title
  h5 {
    color: #453227;
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin: 1rem 0;
  }

  //  Card Content
  p {
    color: #5f4435;
    line-height: 1.5;
  }
`
