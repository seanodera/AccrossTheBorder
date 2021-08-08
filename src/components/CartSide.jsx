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
    name: 'Oceanic Delight',
    description: 'Udon with prawns served with bread',
    price: 20.0,
    id: 1,
    image: '/assets/product.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Cheated Salad',
    description: 'Caesor salad with meat and eggs',
    price: 16.0,
    id: 2,
    image: '/assets/product1.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Clams',
    description: 'Clams mixed with vegetables in our special cream sauce',
    price: 10.0,
    id: 3,
    image: '/assets/product2.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Beef Burger',
    description: 'Pure american beef burger',
    price: 5.0,
    id: 4,
    image: '/assets/product3.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Grilled Chicken',
    description: 'Chicken served with Worcestershire Sauce',
    price: 36.0,
    id: 5,
    image: '/assets/product4.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Shrimp Chow mein',
    description: 'Ramen, shrimps and eggs',
    price: 25.0,
    id: 6,
    image: '/assets/product5.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Waffles',
    description: 'Sweet Breakfast',
    price: 3.0,
    id: 7,
    image: '/assets/product6.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Pineapple',
    description: 'Pineapple Fruit dressing with lemons and oranges',
    price: 45.0,
    id: 8,
    image: '/assets/product7.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
  {
    name: 'Festive Cheese Crepe',
    description: 'Festive desert',
    price: 36.0,
    id: 9,
    image: '/assets/product8.jpg',
    extras: [{ name: 'BBQ sauce', price: 0.8, id: 1 }],
  },
]

export default CartSide
export { GetItemsFromCart, Foods }
