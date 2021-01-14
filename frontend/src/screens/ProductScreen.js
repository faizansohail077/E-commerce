import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { detailProduct } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreen = ({ match }) => {
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetail
    useEffect(() => {
        dispatch(detailProduct(match.params.id))
    }, [match])

    return (
        <>
            <Link to='/' className="btn btn-light my-3">Go back</Link>
            {loading ? <Loader /> : error ? <Message>{error}</Message> :(
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color="green" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Price: ${product.price}</h3>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>

                        </ListGroup>

                        <ListGroup variant='flush'>
                            <Row className="my-2">
                                <Col>
                                    status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                                </Col>
                            </Row>

                        </ListGroup>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0} >Add to cart</Button>
                        </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
            )}
        </>
    )
}

export default ProductScreen
