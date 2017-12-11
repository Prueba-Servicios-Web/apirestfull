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
   const cors=require('cors');
   
   api.use(cors({origin:true,credentials: true}));
   // Add headers
   api.use(function (req, res, next) {
   
       // Website you wish to allow to connect
       res.setHeader('Access-Control-Allow-Origin', '*');
   
       // Request methods you wish to allow
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   
       // Request headers you wish to allow
       res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   
       // Set to true if you need the website to include cookies in the requests sent
       // to the API (e.g. in case you use sessions)
       res.setHeader('Access-Control-Allow-Credentials', true);
   
       // Pass to next layer of middleware
       next();
   });
module.exports=api;