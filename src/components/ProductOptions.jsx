import React from 'react'
import { Container } from 'react-bootstrap'
import { GetItemsFromCart } from './CartSide'

const ProductOptions = ({ food }) => {
  return (
    <Container>
      <div
        style={{
          minHeight: '20vh',
          backgroundSize: 'cover',
          position: 'relative',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${coverImage})`,
          backgroundPosition: '50%',
        }}
      />
    </Container>
  )
}

function AddToCart(food) {}
export default ProductOptions
