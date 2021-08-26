import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Section = styled.section`
  background-color: #fff;
  padding: 6rem 0 5rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  width: 90vw;
`

// Back To Products Button
export const StyledLink = styled(Link)`
  border: none;
  border-radius: 5px;
  background-color: #ab7a5f;
  color: #eaded7;
  cursor: pointer;
  font-size: 0.85rem;
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

// Whole Details Container --> contain Left & Right
export const WholeDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  margin-top: 3rem;
  height: auto;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

/////  Product Details Left  /////

export const DetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 992px) {
    height: 45rem;
  }

  @media screen and (max-width: 577px) {
    height: 25rem;
  }
`

// Big Img
export const MainImgContainer = styled.div`
  border-radius: 5px;
  height: 32rem;
  overflow: hidden;
  width: auto;
  margin-bottom: 1rem;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    height: 100%;
  }
`

// Img Bar
export const ImgBar = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, 1fr);

  // button contain sub img
  > button {
    border: none;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
  }
`

// Small Img (in Img Bar)
export const SubImgContainer = styled.div`
  height: 4.5rem;
  width: 100%;

  /* max-width: 6rem; */

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    height: 6rem;
  }

  @media screen and (max-width: 577px) {
    height: 3rem;
  }
`

/////  Product Details Left  /////

/////  Product Details Right  /////

export const DetailsRight = styled.div`
  display: flex;
  align-items: center;

  > div {
    // mofity whole <p>
    p {
      color: #324d67;
    }

    // Name
    > h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
      text-transform: capitalize;
    }

    // Star
    > p:nth-child(2) {
      align-items: center;
      display: flex;
      height: 1.5rem;
      margin: 0.75rem 0;
    }

    // Price
    > h5 {
      color: #ab7a5f;
      font-size: 1.25rem;
      letter-spacing: 2px;
      margin-bottom: 0.75rem;
    }

    // Description
    > p:nth-child(4) {
      line-height: 2;
      max-width: 45rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 992px) {
    display: block;
  }
`
// Whole Info Container
export const WholeInfoContainer = styled.div`
  display: grid;
  grid-gap: 1.25rem 0;
  margin-top: 1.25rem;
  text-transform: capitalize;
`

// Each Info Container
export const InfoContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 1.5rem;
  width: 16rem;

  // Title
  > h5 {
    font-size: 1rem;
  }
  // Data
  > p {
    width: 7rem;
  }
`

/////  Product Details Right  /////
