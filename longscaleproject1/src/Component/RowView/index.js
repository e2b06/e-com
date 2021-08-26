import React from 'react'

//  React Router
import { useRouteMatch } from 'react-router-dom'

//  Helper
import { currencyFunc } from '../../Utils/helper/currency'

//  CSS Style

import {
  Container,
  ImgContainer,
  RowViewRight,
  DetailsBtn,
} from './styles/rowview'

function RowView({ id, image, name, price, description }) {
  const { url } = useRouteMatch()
  return (
    <Container>
      <ImgContainer>
        <img src={image} alt={`${name}-img`} />
      </ImgContainer>
      <RowViewRight>
        <h2>{name}</h2>
        <h5>${currencyFunc(price)}</h5>
        {/* 20 words with description */}
        <p>{description.split(' ').slice(0, 20).join(' ')} ...</p>
        <DetailsBtn to={{ pathname: `${url}/${id}`, state: { id, name } }}>
          details
        </DetailsBtn>
      </RowViewRight>
    </Container>
  )
}

export default RowView
