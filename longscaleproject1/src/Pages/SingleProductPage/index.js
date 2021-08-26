import React, { useContext, useEffect } from 'react'

//    Products Context
import ProductsContext from '../../Context/ProductsContext'

//  React Router
import { useLocation, useRouteMatch } from 'react-router-dom'

//  Component
import DetailsProduct from '../../Component/DetailsProduct'
import Loading from '../../Component/Loading'
import ErrorMessage from '../../Component/ErrorMessage'

//  Constant
import { singe_product_url } from '../../Utils/constant'
import SectionTitle from '../../Component/SectionTitle'

function SingleProduct() {
  const { singleProduct, fetchSingle, isError_single, isLoading_single } =
    useContext(ProductsContext)

  const {
    state: { id, name },
  } = useLocation()

  const { path } = useRouteMatch()

  useEffect(() => {
    fetchSingle(singe_product_url + id)
  }, [])

  return (
    <>
      <SectionTitle name={name} path={path} />
      {isLoading_single ? (
        <Loading />
      ) : isError_single ? (
        <ErrorMessage />
      ) : (
        <DetailsProduct key={singleProduct.id} {...singleProduct} />
      )}
    </>
  )
}

export default SingleProduct
