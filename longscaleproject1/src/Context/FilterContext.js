import React, { useContext, useReducer, useEffect } from 'react'

//  Products Context
import ProductsContext from './ProductsContext'

//  Reducer
import { reducer } from '../Reducer/FilterReducer'

const FilterContext = React.createContext()

// default state
const defaultState = {
  filter: {
    //  filter list
    categories: ['all'],
    colors: ['all'],
    companies: ['all'],
    filterProducts: [],
    shipping: [],

    //  Controled Input Values
    filterVals: {
      category: '',
      color: '',
      company: '',
      input: '',
      price: '309999',
      shipping: false,
    },
  },
  isGrid: true,
  sortVal: 'PRICE_LOWEST',
  sortedProducts: [],
}

function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState)

  // obtain results data from Products Context
  const { allProducts } = useContext(ProductsContext)

  // Set Grid View Function (Sort Component)
  const setGrid = () => {
    dispatch({ type: 'GRID_STYLE' })
  }

  // Set Row View Function (Sort Component)
  const setRow = () => {
    dispatch({ type: 'ROW_STYLE' })
  }

  // Set Sort Function (Sort Component)
  // Pass Action Type Directly By value --> value === tpye name
  const setSort = (value) => {
    dispatch({ type: value, payload: value })
  }

  // Set Filter Values Function (Filter Component)
  const setFilterVals = (filter) => {
    dispatch({ type: 'SEARCH_PRODUCTS', payload: { ...filter } })
  }

  //
  const setClearFitler = () => {
    dispatch({ type: 'CLEAR_FILTER' })
  }

  // Get Results from Products Context (First time)
  useEffect(() => {
    //  Get Products
    dispatch({ type: 'GET_PRODUCTS', payload: allProducts })
    //  Set Sort
    dispatch({ type: 'PRICE_LOWEST' })
  }, [allProducts])

  //
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGrid,
        setFilterVals,
        setClearFitler,
        setRow,
        setSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContext
export { FilterProvider }
