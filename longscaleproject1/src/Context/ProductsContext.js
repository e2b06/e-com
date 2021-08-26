import React, { useReducer, useEffect } from 'react'

//  Reducer
import { reducer } from '../Reducer/ProductsReducer'

//  Constant
import { url } from '../Utils/constant'

const ProductsContext = React.createContext()

//  Default State
const defaultState = {
  allProducts: [],
  isGrid: true,
  isError_all: false,
  isError_single: false,
  isLoading_all: true,
  isLoading_single: true,
  singleProduct: {},
}

function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState)

  //  All Product Fetch Function
  const fetchAll = async (url) => {
    //  Loading
    dispatch({ type: 'LOADING_ALL' })

    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({ type: 'SUCCESS_ALL', payload: data })
      // controller = null
    } catch {
      dispatch({ type: 'ERROR_ALL' })
      console.log(new Error())
    }
  }

  //  Single Product Fetch Function
  const fetchSingle = async (url) => {
    //  Loading
    dispatch({ type: 'LOADING_SINGLE' })

    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({ type: 'SUCCESS_SINGLE', payload: data })
      // controller = null
    } catch {
      dispatch({ type: 'ERROR_SINGLE' })
      console.log(new Error())
    }
  }

  //  Fetch All Products
  useEffect(() => {
    fetchAll(url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        dispatch,
        fetchSingle,
        ...state,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext

export { ProductsProvider }
