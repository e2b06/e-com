import styled from 'styled-components'

export const Section = styled.section`
  background-color: #222;
  padding: 2rem 0;
`

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
  width: 90vw;
`

export const Content = styled.p`
  color: white;
  font-size: 0.95rem;
  letter-spacing: 2px;

  // Company Name
  > span {
    color: #ab7a5f;
    margin: 0 0.15rem 0 0.35rem;
  }
`
