import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()

import Product from '../models/ProductModel.js'


// fetch all products
// GET api/products
//access public
router.get('/', asyncHandler(async (req, res) => {
    const product = await Product.find({})
    res.json(product)
}))


// fetch by id
//GET api/products/:id
//access public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {

        res.json(product)
    }
    else {
        res.status(404)
        throw new Error('product not found')
    }
}))


export default router