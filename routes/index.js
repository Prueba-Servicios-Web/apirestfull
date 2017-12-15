'use strict'

const express = require('express')
const ProductCtrl=require('../controllers/products')
const api=express.Router()
var cors=require('cors');
api.use(cors());
const bodyParser=require('body-parser');
api.use(bodyParser.urlencoded({extended:true}))
api.use(bodyParser.json())
api.get('/products',ProductCtrl.getProducts)
api.get('/products/:id',ProductCtrl.getProduct)
api.post('/products',ProductCtrl.addProduct)
api.put('/products/:id',ProductCtrl.updateProduct)
api.delete('/products/:id',ProductCtrl.deleteProduct)

module.exports=api;