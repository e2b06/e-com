import React from 'react'

//  Helper
import { currencyFunc } from '../../Utils/helper/currency'

// CSS Style
import {
  Container,
  ImgContainer,
  DetailsLinkContainer,
  DetailsLink,
  ProductFooter,
} from './styles/gridview'

// Icons
import { FaSearch } from 'react-icons/fa'

function GridView({ id, image, name, price, height }) {
  return (
    <Container>
      <ImgContainer height={height}>
        <img src={image} alt={`${name}-img`} />
        <DetailsLinkContainer>
          <DetailsLink
            to={{ pathname: `/Products/${id}`, state: { id, name } }}
          >
            <FaSearch />
          </DetailsLink>
        </DetailsLinkContainer>
      </ImgContainer>
      <ProductFooter>
        <h5>{name}</h5>
        <p>${currencyFunc(price)}</p>
      </ProductFooter>
    </Container>
  )
}

export default GridView
