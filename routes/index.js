'use strict'

const express = require('express')
const ProductCtrl=require('../controllers/products')
const api=express.Router()
api.get('/products',ProductCtrl.getProducts)
api.get('/products/:id',ProductCtrl.getProduct)
api.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });
   var cors=require('cors');
   
   api.use(cors());
   // Add headers
  
module.exports=api;