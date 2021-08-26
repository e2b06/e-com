//  cartStorage.setItem() --> set whole state in local storage

//  constant
import { cartStorage } from '../Utils/helper/cartstorage'

export const reducer = (state, dispatch) => {
  //
  if (dispatch.type === 'ADD_CART') {
    //  Checking with second products

    if (state.cartProducts.length !== 0) {
      //  result === filter douable oject

      //  Checking with color & name
      const result = state.cartProducts.filter(
        ({ color, name }) =>
          color === dispatch.payload.color && name === dispatch.payload.name
      )

      if (result.length !== 0) {
        const [temVal] = result

        //  Constant with max stock

        if (temVal.quantity >= temVal.stock) {
          return {
            ...state,
          }
        } else {
          //  Find index with same object

          const modifyIndex = state.cartProducts.findIndex(
            ({ id }) => id === temVal.id
          )
          const updateProducts = [
            ...((state.cartProducts[modifyIndex] = {
              ...temVal,
              id: new Date().getTime().toString(),
              quantity: temVal.quantity + dispatch.payload.quantity,
            }),
            state.cartProducts),
          ]

          const stateVals = {
            ...state,
            cartProducts: [...updateProducts],
            totalAmount: updateProducts.reduce((a, b) => a + b.quantity, 0),
            subtotal: updateProducts.reduce(
              (a, b) => a + b.quantity * b.price,
              0
            ),
          }

          cartStorage.setItem(stateVals)
          return stateVals
        }
      } else {
        //  cartProducts === previous and new product
        const cartProducts = [...state.cartProducts, dispatch.payload]

        //  reduce() -->  totalAmount / subtotal
        const stateVals = {
          ...state,
          cartProducts,
          totalAmount: cartProducts.reduce((a, b) => a + b.quantity, 0),
          subtotal: cartProducts.reduce((a, b) => a + b.quantity * b.price, 0),
        }

        cartStorage.setItem(stateVals)
        return stateVals
      }
    } else {
      const cartProducts = [...state.cartProducts, dispatch.payload]

      const stateVals = {
        ...state,
        cartProducts,
        totalAmount: cartProducts.reduce((a, b) => a + b.quantity, 0),
        subtotal: cartProducts.reduce((a, b) => a + b.quantity * b.price, 0),
      }

      cartStorage.setItem(stateVals)
      // return product
      return stateVals
    }
  } else if (dispatch.type === 'ADD_PRODUCT_AMOUNT') {
    //  separate cartProduct from original state value

    const updateProduct = [...state.cartProducts]
    const { index, stock } = dispatch.payload
    const previousTotalAmount =
      state.totalAmount - updateProduct[index].quantity

    updateProduct[index] = {
      ...updateProduct[index],
      quantity:
        updateProduct[index].quantity >= stock
          ? stock
          : updateProduct[index].quantity + 1,
    }

    const updateSubtotal = updateProduct.reduce(
      (a, b) => a + b.quantity * b.price,
      0
    )

    const stateVals = {
      ...state,
      totalAmount: previousTotalAmount + updateProduct[index].quantity,
      cartProducts: [...updateProduct],
      subtotal: updateSubtotal,
    }

    cartStorage.setItem(stateVals)

    return stateVals
  } else if (dispatch.type === 'MINUS_PRODUCT_AMOUNT') {
    const updateProduct = [...state.cartProducts]
    const index = dispatch.payload
    const previousTotalAmount =
      state.totalAmount - updateProduct[index].quantity

    updateProduct[index] = {
      ...updateProduct[index],
      quantity:
        updateProduct[index].quantity === 1
          ? 1
          : updateProduct[index].quantity - 1,
    }
    const updateSubtotal = updateProduct.reduce(
      (a, b) => a + b.quantity * b.price,
      0
    )

    const stateVals = {
      ...state,
      totalAmount: previousTotalAmount + updateProduct[index].quantity,
      cartProducts: [...updateProduct],
      subtotal: updateSubtotal,
    }

    cartStorage.setItem(stateVals)

    return stateVals
  } else if (dispatch.type === 'REMOVE_PRODUCT') {
    const [removeProduct] = state.cartProducts.filter(
      (product) => product.id === dispatch.payload
    )

    const stateVals = {
      ...state,
      cartProducts: state.cartProducts.filter(
        (product) => product.id !== dispatch.payload
      ),
      totalAmount: state.totalAmount - removeProduct.quantity,
      subtotal: state.subtotal - removeProduct.price * removeProduct.quantity,
    }

    cartStorage.setItem(stateVals)
    return stateVals
  } else if (dispatch.type === 'CLEAR_CART') {
    const stateVals = {
      ...state,
      cartProducts: [],
      totalAmount: 0,
      subtotal: 0,
    }

    cartStorage.setItem(stateVals)
    return stateVals
  }
}
