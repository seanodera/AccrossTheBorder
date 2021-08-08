import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Container,
} from 'react-bootstrap'
import { GetItemsFromCart, Foods } from '../components/CartSide'
//import GetCart from '../utils/GetCart'

const HomeScreen = () => {
  const [CartItems, setCartItems] = useState([])
  const [Total, setTotal] = useState(0.0)

  useEffect(() => {
    setCartItems(GetItemsFromCart())
  }, [])
  useEffect(() => {
    let _total = 0
    CartItems.forEach((item) => {
      console.log(item.name + item.id)
      let tempTotal = item.price * item.count
      _total = _total + tempTotal
      setTotal(_total)
    })
  }, [CartItems])

  return (
    <section>
      <Row>
        <Col sm='7'>
          <Card>
            <Container fluid className='py-0 px-0 mx-0 my-0'>
              <Row sm='auto'>
                {Foods.map((food, index) => {
                  return (
                    <Card
                      key={index}
                      className='px-0 py-0 mx-2 my-2'
                      style={{ maxWidth: '13rem' }}
                    >
                      <div className=' my-0 image'>
                        <img
                          src={food.image}
                          className='img img-responsive full-width'
                          alt={food.name}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>{food.name}</Card.Title>
                        <Card.Text>{food.description}</Card.Text>
                        <Card.Text>&euro;{food.price}</Card.Text>
                        <Button
                          variant='outline-primary'
                          onClick={() => {
                            let newArr = GetItemsFromCart()
                            var _food = newArr.find((element) => {
                              return element.id === food.id
                            })
                            if (_food === undefined) {
                              newArr.push({
                                price: food.price,
                                count: 1,
                                id: food.id,
                                name: food.name,
                              })
                              setCartItems(newArr)
                              localStorage.setItem(
                                'cart',
                                JSON.stringify(newArr)
                              )
                            } else {
                              console.log(_food)
                              var filtered = newArr.filter(
                                (value, index, arr) => {
                                  return value.id !== _food.id
                                }
                              )
                              filtered.push({
                                price: food.price,
                                count: _food.count + 1,
                                id: food.id,
                                name: food.name,
                              })
                              setCartItems(filtered)
                              localStorage.setItem(
                                'cart',
                                JSON.stringify(filtered)
                              )
                            }
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Card.Body>
                    </Card>
                  )
                })}
              </Row>
            </Container>
          </Card>
        </Col>

        <Col sm='4'>
          <Card
            style={{
              backgroundColor: '#363636',
              // width: '31.25%',
            }}
          >
            <Card.Header>Cart</Card.Header>
            <Card.Body>
              <ListGroup>
                {CartItems.map((cartData, index) => {
                  return (
                    <ListGroupItem
                      key={index}
                      style={{
                        display: 'flex',
                      }}
                    >
                      <div className='mx-2'>
                        <p style={{ color: '#FF1744' }}> {cartData.count}</p>
                      </div>
                      <Col
                        style={{
                          width: '75%',
                          alignItems: 'flex-start',
                          textAlign: 'left',
                        }}
                      >
                        <strong>{cartData.name} </strong>
                      </Col>
                      <div style={{ alignSelf: 'end' }}>
                        <b>&euro;{cartData.price}.00</b>
                      </div>
                      <Button
                        variant='link'
                        onClick={() => {
                          CartItems.splice(index, CartItems.length)
                          localStorage.setItem(
                            'cart',
                            JSON.stringify(CartItems)
                          )
                          setTotal(0)
                          setCartItems(GetItemsFromCart())
                        }}
                      >
                        X
                      </Button>
                    </ListGroupItem>
                  )
                })}
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Container
                style={{
                  borderTop: '4px',
                  borderTopColor: '#c4c4c4',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                className='py-3 px-3'
              >
                <strong>Total: &euro;{Total}</strong>
                <Button variant='primary'>Confirm Order</Button>
              </Container>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default HomeScreen
