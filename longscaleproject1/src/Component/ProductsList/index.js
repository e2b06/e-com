import React, { useContext } from 'react'

//  Filter Context
import FilterContext from '../../Context/FilterContext'

//  Component
import GridView from '../GridView'
import RowView from '../RowView'

//  CSS Style
import {
  GridContainer,
  RowContainer,
  EmptyMessage,
} from './styles/productslist'

function ProductsList() {
  const {
    filter: { filterProducts },
    isGrid,
  } = useContext(FilterContext)

  if (isGrid) {
    return (
      <>
        <GridContainer>
          {filterProducts.map((result) => {
            return <GridView key={result.id} {...result} height={'10.5rem'} />
          })}
        </GridContainer>
        {filterProducts.length === 0 && (
          <EmptyMessage>
            <h4>Sorry, no products matched your search.</h4>
          </EmptyMessage>
        )}
      </>
    )
  } else {
    return (
      <>
        <RowContainer>
          {filterProducts.map((result) => {
            return <RowView key={result.id} {...result} />
          })}
        </RowContainer>
        {filterProducts.length === 0 && (
          <EmptyMessage>
            <h4>Sorry, no products matched your search.</h4>
          </EmptyMessage>
        )}
      </>
    )
  }
}

export default ProductsList
