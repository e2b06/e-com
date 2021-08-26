import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div``

export const ImgContainer = styled.div`
  border-radius: 5px;
  height: ${({ height }) => height};
  overflow: hidden;
  position: relative;
  width: auto;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`

//  Show up when hover
export const DetailsLinkContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  opacity: 0;
  right: 0;
  position: absolute;
  top: 0;
  transition: all 300ms linear;

  :hover {
    opacity: 100;
  }
`

// Details Link
export const DetailsLink = styled(Link)`
  align-items: center;
  background-color: #ab7a5f;
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  left: 50%;
  top: 50%;
  position: absolute;
  text-decoration: none;
  transform: translate(-50%, -50%);
  width: 2.5rem;
`

export const ProductFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  > h5 {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 1.25;
    text-transform: capitalize;
  }

  > p {
    color: #ab7a5f;
    letter-spacing: 2px;
  }
`
