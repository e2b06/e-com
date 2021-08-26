import styled from 'styled-components'

export const Section = styled.section`
  padding: 5rem 0;
`

export const Container = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1170px;
  margin: 0 auto;
  width: 90vw;

  @media screen and (max-width: 992px) {
    display: block;
  }
`

//  Left
export const StoryLeft = styled.div`
  margin: auto 0;
`

export const ImgContainer = styled.div`
  border-radius: 5px;
  height: 31rem;
  overflow: hidden;
  width: auto;
  max-height: 29rem;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 4rem;
  }
`

//  Right
export const StoryRight = styled.div`
  //  Title
  > h1 {
    font-size: 2.45rem;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    padding-bottom: 0.75rem;
    position: relative;
    text-transform: capitalize;

    ::before {
      border: solid #ab7a5f;
      border-width: 2px 50px;
      bottom: 0;
      content: '';
      position: absolute;
    }
  }

  //  Contents
  > p {
    color: #617d98;
    line-height: 2;
    width: auto;
  }
`
