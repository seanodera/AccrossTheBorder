import React from 'react'
import { Container } from 'react-bootstrap'

const CartSide = () => {
  return <Container fluid>Cart</Container>
}

function GetItemsFromCart() {
  var cart = localStorage.getItem('cart')
  if (cart) {
    if (cart === undefined || cart === '') {
      return []
    } else return JSON.parse(cart)
  } else {
    return []
  }
}

const Foods = [
  {
    name: 'Meat Platter',
    description: 'Something long and whatever',
    price: 20.0,
    id: 1,
    image: '/assets/product.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Meat Platter',
    description: 'Something long and whatever',
    price: 16.0,
    id: 2,
    image: '/assets/product1.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Meat Platter',
    description: 'Something long and whatever',
    price: 10.0,
    id: 3,
    image: '/assets/product2.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Meat Platter',
    description: 'Something long and whatever',
    price: 5.0,
    id: 4,
    image: '/assets/product3.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Meat Platter',
    description: 'Something long and whatever',
    price: 3.6,
    id: 5,
    image: '/assets/product4.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Meat Platter',
    description: 'Something long and whatever',
    price: 25.0,
    id: 6,
    image: '/assets/product5.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Meat Platter',
    description: 'Something long and whatever',
    price: 75.0,
    id: 7,
    image: '/assets/product6.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Meat Platter',
    description: 'Something long and whatever',
    price: 45.0,
    id: 8,
    image: '/assets/product7.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'PLow the i say and repeat plow',
    description: 'Something long and whatever',
    price: 36.0,
    id: 9,
    image: '/assets/product8.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
]

export default CartSide
export { GetItemsFromCart, Foods }
