import React, { useContext, useState } from 'react'

//  Cart Context
import CartContext from '../../Context/CartContext'

// CSS Styles
import {
  ColorContainer,
  ColorBtn,
  AmountContainer,
  StyledLink,
} from './styles/addtocart'

//  React Icons
import { FiMinus, FiPlus } from 'react-icons/fi'
import { TiTick } from 'react-icons/ti'

function AddToCart({ items }) {
  const { addCartProducts } = useContext(CartContext)

  //  Local State
  const [colorIndex, setColorIndex] = useState(0)

  const {
    amount,
    addAmountHanlder,
    colors,
    images,
    minusAmountHanlder,
    name,
    resetAmountHandler,
    price,
    stock,
  } = items

  return (
    <form>
      <ColorContainer>
        <h5>Colors:</h5>
        <div>
          {colors.map((color, index) => {
            return (
              <ColorBtn
                color={color}
                active={colorIndex === index}
                key={index}
                onClick={() => {
                  setColorIndex(index)
                }}
                type='button'
              >
                {colorIndex === index && <TiTick />}
              </ColorBtn>
            )
          })}
        </div>
      </ColorContainer>
      <AmountContainer>
        <button onClick={minusAmountHanlder} type='button'>
          <FiMinus />
        </button>
        <h1>{amount}</h1>
        <button onClick={addAmountHanlder} type='button'>
          <FiPlus />
        </button>
      </AmountContainer>
      <StyledLink
        onClick={() => {
          resetAmountHandler()
          addCartProducts({
            color: colors[colorIndex],
            id: new Date().getTime().toString(),
            images: images[0].url,
            name,
            price,
            subtotal: price * amount,
            quantity: amount,
            stock,
          })
        }}
        to={{
          pathname: '/Cart',
        }}
      >
        add to cart
      </StyledLink>
    </form>
  )
}

export default AddToCart
