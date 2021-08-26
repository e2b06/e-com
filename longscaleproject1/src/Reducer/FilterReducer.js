export const reducer = (state, dispatch) => {
  if (dispatch.type === 'GET_PRODUCTS') {
    const {
      filter: {
        categories,
        companies,
        colors,
        prices,
        shipping,
        ...restFilter
      },
      ...restState
    } = state

    const category = []
    const company = []
    const color = []
    // Push category in filter object
    dispatch.payload.forEach((product) => {
      category.push(product.category)
      company.push(product.company)
      color.push(product.colors)
    })

    // Remove Duplicates Function
    const removeDuplicates = (array) => {
      return array.filter((item, index, arr) => arr.indexOf(item) === index)
    }

    return {
      ...restState,
      sortedProducts: dispatch.payload,
      filter: {
        ...restFilter,
        categories: removeDuplicates([...categories, ...category]),
        companies: removeDuplicates([...companies, ...company]),
        colors: removeDuplicates([colors, ...color].join().split(',')),
        filterProducts: dispatch.payload,
      },
    }
  } else if (dispatch.type === 'GRID_STYLE') {
    return {
      ...state,
      isGrid: true,
    }
  } else if (dispatch.type === 'ROW_STYLE') {
    return {
      ...state,
      isGrid: false,
    }
  } else if (dispatch.type === 'PRICE_LOWEST') {
    return {
      ...state,
      sortVal: dispatch.payload,
      sortedProducts: state.sortedProducts.sort((a, b) => a.price - b.price),
    }
  } else if (dispatch.type === 'PRICE_HIGHEST') {
    return {
      ...state,
      sortVal: dispatch.payload,
      sortedProducts: state.sortedProducts.sort((a, b) => b.price - a.price),
    }
  } else if (dispatch.type === 'NAME_SEQUENCE') {
    return {
      ...state,
      sortVal: dispatch.payload,
      sortedProducts: state.sortedProducts.sort((a, b) =>
        a.name === b.name ? 0 : a.name > b.name ? 1 : -1
      ),
    }
  } else if (dispatch.type === 'NAME_REVERSE') {
    return {
      ...state,
      sortVal: dispatch.payload,
      sortedProducts: state.sortedProducts.sort((a, b) =>
        a.name === b.name ? 0 : a.name < b.name ? 1 : -1
      ),
    }
  } else if (dispatch.type === 'SEARCH_PRODUCTS') {
    return {
      ...state,
      filter: {
        ...state.filter,
        inputVals: dispatch.payload.input,
        filterVals: {
          ...dispatch.payload,
        },

        filterProducts: state.sortedProducts.filter(
          ({ company, category, colors, name, shipping, price }) => {
            return (
              name.includes(dispatch.payload.input.toLowerCase()) &&
              category === (dispatch.payload.category || category) &&
              company === (dispatch.payload.company || company) &&
              colors.includes(dispatch.payload.color || colors[0]) &&
              price <= dispatch.payload.price &&
              (dispatch.payload.shipping ? shipping : true)
            )
          }
        ),
      },
    }
  } else if (dispatch.type === 'CLEAR_FILTER') {
    return {
      ...state,
      filter: {
        ...state.filter,
        filterProducts: [...state.sortedProducts],
        filterVals: {
          category: '',
          color: '',
          company: '',
          input: '',
          price: '309999',
          shipping: false,
        },
      },
    }
  }
}
