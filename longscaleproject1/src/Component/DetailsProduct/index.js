import React, { useState } from 'react'

//  Component
import AddToCart from '../AddToCart'
import Star from '../../Component/Star'

//  Helper
import { currencyFunc } from '../../Utils/helper/currency'

//  CSS Styles
import {
  Section,
  Container,
  StyledLink,
  WholeDetailsContainer,
  DetailsLeft,
  MainImgContainer,
  ImgBar,
  SubImgContainer,
  DetailsRight,
  WholeInfoContainer,
  InfoContainer,
} from './styles/detailsproduct'

function DetailsProduct({
  images,
  name,
  stars,
  reviews,
  price,
  description,
  stock,
  id,
  company,
  colors,
}) {
  //  Local State
  const [imgIndex, setImgIndex] = useState(0)
  const [amount, setAmount] = useState(1)

  //  Add Handler
  const addAmountHanlder = () => {
    if (amount >= stock) {
      setAmount(stock)
    } else {
      setAmount(amount + 1)
    }
  }
  //  Minus Handler
  const minusAmountHanlder = () => {
    if (amount === 1) {
      setAmount(1)
    } else {
      setAmount(amount - 1)
    }
  }

  //  Reset Handler
  const resetAmountHandler = () => {
    setAmount(1)
  }
  return (
    <Section>
      <Container>
        <StyledLink onClick={resetAmountHandler} to='/Products'>
          back to products
        </StyledLink>
        <WholeDetailsContainer>
          <DetailsLeft>
            <MainImgContainer>
              <img src={images[imgIndex].url} alt='' />
            </MainImgContainer>
            <ImgBar>
              {images.map(({ id, url }, i) => {
                return (
                  <button key={id} type='button' onClick={() => setImgIndex(i)}>
                    <SubImgContainer>
                      <img src={url} alt={`${name}-img`} />
                    </SubImgContainer>
                  </button>
                )
              })}
            </ImgBar>
          </DetailsLeft>
          <DetailsRight>
            <div>
              <h1>{name}</h1>
              <p>
                <Star star={stars} />({reviews} customer reviews)
              </p>
              <h5>${currencyFunc(price)}</h5>
              <p>{description}</p>
              <WholeInfoContainer>
                <InfoContainer>
                  <h5>Available:</h5>
                  <p>{stock !== 0 ? 'in stock' : 'out of stock'}</p>
                </InfoContainer>
                <InfoContainer>
                  <h5>SKU:</h5>
                  <p>{id}</p>
                </InfoContainer>
                <InfoContainer>
                  <h5>Brand:</h5>
                  <p>{company}</p>
                </InfoContainer>
                <hr />
              </WholeInfoContainer>
              {stock !== 0 && (
                <AddToCart
                  items={{
                    colors,
                    images,
                    name,
                    price,
                    stock,
                    amount,
                    addAmountHanlder,
                    minusAmountHanlder,
                    resetAmountHandler,
                  }}
                />
              )}
            </div>
          </DetailsRight>
        </WholeDetailsContainer>
      </Container>
    </Section>
  )
}

export default DetailsProduct
