import React, { useContext, useEffect, useRef, useState } from 'react'

//  Cart Context
import CartContext from '../../Context/CartContext'

//  Helper
import { currencyFunc } from '../../Utils/helper/currency'

// CSS Styles
import {
  Container,
  Item,
  ItemLeft,
  ItemRight,
  ColorIcon,
  Price,
  Quantity,
  Subtotal,
  RemoveBtn,
} from './styles/cartitems'

// React Icons
import { FiMinus, FiPlus } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'

function CartItems({ images, name, color, price, quantity, id, index, stock }) {
  const { addProductAmount, minusProductAmount, removeProduct } =
    useContext(CartContext)

  const [isToggle, setIsToggle] = useState(false)
  const cartItemsRef = useRef(null)

  useEffect(() => {
    if (cartItemsRef.current.getBoundingClientRect().width <= 768) {
      setIsToggle(true)
    }

    //  Resize Handler
    const resizeHandler = () => {
      if (cartItemsRef.current.getBoundingClientRect().width <= 768) {
        setIsToggle(true)
      } else {
        setIsToggle(false)
      }
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return (
    <Container ref={cartItemsRef}>
      <Item>
        <ItemLeft>
          <img src={images} alt={`${name}-img`} />
        </ItemLeft>
        <ItemRight>
          <h5>{name}</h5>
          <p>
            color :<ColorIcon color={color}></ColorIcon>
          </p>
          {isToggle && <h5>${currencyFunc(price)}</h5>}
        </ItemRight>
      </Item>
      <Price>
        <p>${currencyFunc(price)}</p>
      </Price>
      <Quantity>
        <button onClick={() => minusProductAmount(index)} type='button'>
          <FiMinus />
        </button>
        <h1>{quantity}</h1>
        <button onClick={() => addProductAmount(index, stock)} type='button'>
          <FiPlus />
        </button>
      </Quantity>
      <Subtotal>
        <p>${currencyFunc(price * quantity)}</p>
      </Subtotal>
      <div>
        <RemoveBtn type='button' onClick={() => removeProduct(id)}>
          <MdDelete />
        </RemoveBtn>
      </div>
    </Container>
  )
}

export default CartItems
