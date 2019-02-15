import React from 'react'

function Product(props) {
  return (
    <div>
      <p>
        {props.product.name}
      </p>
    </div>
  )
}

export default Product;