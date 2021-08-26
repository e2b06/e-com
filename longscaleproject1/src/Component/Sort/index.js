import React, { useContext } from 'react'

// React Icons
import { IoGrid, IoMenu } from 'react-icons/io5'
import FilterContext from '../../Context/FilterContext'

// CSS Style
import { Container, BtnContainer, GridBtn, RowBtn, Option } from './styles/sort'

function Sort() {
  const {
    filter: { filterProducts },
    isGrid,
    sortVal,
    setGrid,
    setRow,
    setSort,
  } = useContext(FilterContext)
  return (
    <section>
      <Container>
        <BtnContainer>
          <GridBtn isGrid={isGrid} onClick={setGrid}>
            <IoGrid />
          </GridBtn>
          <RowBtn isGrid={isGrid} onClick={setRow}>
            <IoMenu />
          </RowBtn>
        </BtnContainer>
        <p>{filterProducts.length} products found</p>

        <hr />
        <Option>
          <label htmlFor='sort'>sort by</label>
          <select
            name=''
            id='sort'
            value={sortVal}
            onChange={(e) => {
              setSort(e.target.value)
            }}
          >
            <option value='PRICE_LOWEST' label='price (lowest)'>
              price (lowest)
            </option>
            <option value='PRICE_HIGHEST' label='price (highest)'>
              price (highest)
            </option>
            <option value='NAME_SEQUENCE' label='name (a - z)'>
              name (a - z)
            </option>
            <option value='NAME_REVERSE' label='name (z - a)'>
              name (z - a)
            </option>
          </select>
        </Option>
      </Container>
    </section>
  )
}

export default Sort
