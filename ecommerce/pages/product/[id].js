import React from 'react'
import { useRouter } from 'next/router'
import {data} from '../../utils/data'

const ProductPage = () => {
    const router = useRouter() // Es un hook de next, que permite moverse entre rutas
    const {id} = router.query // Extrae el parametro id
    const product = data.products.find((product) => product.id === parseInt(id))

    if(!product) {
        return <div>Product not found</div>
    }
  return (
    <div>Product id - {product.id}</div>
  )
}

export default ProductPage