import React, { useContext, useState } from 'react'

//  Filter Context
import FilterContext from '../../Context/FilterContext'

//  CSS Style
import {
  Form,
  SearchBox,
  Category,
  CategoryBtn,
  Company,
  Colors,
  ColorsBtn,
  ColorsWordBtn,
  Price,
  Shipping,
  ClearBtn,
} from './styles/filter'

//  React Icons
import { TiTick } from 'react-icons/ti'

function Filter() {
  const {
    filter: { colors, categories, companies, filterVals },
    setClearFitler,
    setFilterVals,
  } = useContext(FilterContext)

  //  Local State
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [colorIndex, setColorIndex] = useState(0)

  return (
    <Form>
      <SearchBox
        onChange={(e) =>
          setFilterVals({ ...filterVals, input: e.target.value })
        }
        placeholder='Search'
        type='text'
        value={filterVals.input}
      />
      <Category>
        <h5>category</h5>
        {categories.map((category, index) => {
          return (
            <CategoryBtn
              active={categoryIndex === index}
              key={Math.random()}
              type='button'
              onClick={() => {
                setFilterVals({
                  ...filterVals,
                  category: category === 'all' ? '' : category,
                })
                setCategoryIndex(index)
              }}
            >
              {category}
            </CategoryBtn>
          )
        })}
      </Category>
      <Company>
        <h5>company</h5>
        <select
          name=''
          id=''
          onChange={(e) => {
            setFilterVals({
              ...filterVals,
              company: e.target.value === 'all' ? '' : e.target.value,
            })
          }}
          value={filterVals.company}
        >
          {companies.map((company) => {
            return (
              <option key={Math.random()} value={company}>
                {company}
              </option>
            )
          })}
        </select>
      </Company>
      <Colors>
        <h5>colors</h5>
        <div>
          {colors.map((color, index) => {
            //  destructure color code & text(all)
            const { colorCode, text } = color.includes('#')
              ? { colorCode: color }
              : { text: color }

            return (
              <ColorsBtn
                active={colorIndex === index}
                color={colorCode}
                key={Math.random()}
                onClick={() => {
                  setFilterVals({
                    ...filterVals,
                    color: color === 'all' ? '' : color,
                  })
                  setColorIndex(index)
                }}
                type='button'
              >
                <ColorsWordBtn active={colorIndex === index}>
                  {text}
                </ColorsWordBtn>
                {colorIndex === index && colorIndex !== 0 && <TiTick />}
              </ColorsBtn>
            )
          })}
        </div>
      </Colors>
      <Price>
        <h5>Price</h5>
        <label htmlFor='price'>${(filterVals.price / 100).toFixed(2)}</label>
        <input
          id='price'
          min='0'
          max='3099.99'
          onChange={(e) => {
            setFilterVals({ ...filterVals, price: e.target.value * 100 })
          }}
          step='0.01'
          type='range'
          value={(filterVals.price / 100).toFixed(2)}
        />
      </Price>
      <Shipping>
        <label htmlFor='shipping'>free shipping</label>
        <input
          checked={filterVals.shipping}
          id='shipping'
          onChange={() => {
            setFilterVals({
              ...filterVals,
              shipping: !filterVals.shipping,
            })
          }}
          type='checkbox'
        />
      </Shipping>
      <ClearBtn
        onClick={() => {
          setClearFitler()
          setCategoryIndex(0)
          setColorIndex(0)
        }}
        type='button'
      >
        clear filters
      </ClearBtn>
    </Form>
  )
}

export default Filter
