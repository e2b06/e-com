import styled from 'styled-components'
import { Link } from 'react-router-dom'

//  Jumbotron Section
export const Section = styled.section`
  background-color: #fff;
  padding: 3.5rem 0;
`

// Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`

// Jumbotron Left
export const JumbotronLeft = styled.div`
  width: auto;
  max-width: 30rem;

  @media screen and (max-width: 1240px) {
    max-width: none;
    margin: 0 auto;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 2px;
  text-transform: capitalize;
`

export const Content = styled.p`
  color: #617d98;
  font-size: 1.25rem;
  margin: 2rem 0 3rem;
  line-height: 2;
  width: 100%;
  max-width: 30rem;

  @media screen and (max-width: 1240px) {
    max-width: none;
  }
`

export const ShopBtn = styled(Link)`
  background-color: #ab7a5f;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  color: #eaded7;
  font-size: 0.95rem;
  letter-spacing: 2px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 300ms linear;

  :hover {
    background-color: #c5a491;
    color: #5f4435;
  }

  @media screen and (max-width: 1240px) {
    padding: 0.5rem;
  }
`
/////    Jumbotron Left    /////

/////    Jumbotron Right    /////
export const JumbotronRight = styled.div`
  position: relative;
  height: 35rem;
  margin-right: 2rem;
  max-width: 40rem;
  width: 100%;

  ::after {
    border: solid #decbc0;
    border-radius: 5px 0 0 0;
    border-width: 215px 20px;
    bottom: 10px;
    content: '';
    left: 168px;
    position: absolute;
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`

//  Main Images
export const MainImgContainer = styled.div`
  border-radius: 5px;
  height: 34.35rem;
  overflow: hidden;
  width: 100%;
  max-width: 27rem;
  margin-left: auto;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`

//  Sub Images
export const SubImgContainer = styled.div`
  border-radius: 5px;
  bottom: 7px;
  left: 85px;
  overflow: hidden;
  width: auto;
  max-width: 15.5rem;
  position: absolute;
  z-index: 999;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`
/////    Jumbotron Right    /////
