'use strict'

const express = require('express')
const ProductCtrl=require('../controllers/products')
const api=express.Router()
var cors=require('cors');
api.use(cors());
api.get('/products',cors(),ProductCtrl.getProducts)
api.get('/products/:id',ProductCtrl.getProduct)
api.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });

   
   
   // Add headers
  
module.exports=api;