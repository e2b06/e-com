export const reducer = (state, dispatch) => {
  if (dispatch.type === 'LOADING_ALL') {
    return {
      ...state,
      isLoading_all: true,
    }
  } else if (dispatch.type === 'ERROR_ALL') {
    return {
      ...state,
      isError_all: true,
      isLoading_all: false,
    }
  } else if (dispatch.type === 'SUCCESS_ALL') {
    return {
      ...state,
      isLoading_all: false,
      allProducts: dispatch.payload,
    }
  } else if (dispatch.type === 'LOADING_SINGLE') {
    return {
      ...state,
      isLoading_single: true,
    }
  } else if (dispatch.type === 'ERROR_SINGLE') {
    return {
      ...state,
      isError_single: true,
      isLoading_single: false,
    }
  } else if (dispatch.type === 'SUCCESS_SINGLE') {
    return {
      ...state,
      isLoading_single: false,
      singleProduct: dispatch.payload,
    }
  }
}
