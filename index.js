'use strict'

const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Category=require('./models/categorys')

const Product=require('./models/products')

const app=express()
const port=process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/api/category',(req,res)=>{
    console.log(req.body);
    let category=new Category()
   category.name=req.body.name
   category.save((err,categoryStore)=>{
        if(err) res.status(500).send({message:`error al guardar la categoria ${err}`})
        res.status(200).send({category:categoryStore})
    })
   
})

app.get('/api/category',(req,res)=>{
    Category.find((err,categoryList)=>{
        console.log(err);
        if(err) return res.status(500).send({message:`ocurrio un error ${err}`})
   if(!categoryList) return res.status(404).send({message:`No existen categorias`})
res.status(200).send({categoryList:categoryList}) 
})
})

app.get('/api/products',(req,res)=>{
    Product.find((err,products)=>{
        console.log(err);
        if(err) return res.status(500).send({message:`ocurrio un error ${err}`})
   if(!products) return res.status(404).send({message:`No existen productos`})
res.status(200).send({products:products}) 
})
})
app.get('/api/products/:id',(req,res)=>{
    let productid=req.params.id 
    console.log(productid)
    Product.findById(productid,(err,product)=>{
        console.log(err);
        if(err) return res.status(500).send({message:`ocurrio un error ${err}`})
   if(!product) return res.status(404).send({message:`El producto id ${productid} no existe`})
res.status(200).send({product:product}) 
})
})

app.post('/api/products',(req,res)=>{
    console.log(req.body);
    let product=new Product()
    product.name=req.body.name
    product.picture=req.body.picture
    product.price=req.body.price
    product.description=req.body.description
    product.category=req.body.category
    product.save((err,productStore)=>{
        if(err) res.status(500).send({message:`error al guardar el producto en la base de datos ${err}`})
        res.status(200).send({product:productStore})
    })
   
})

        var options = {
            useMongoClient: true,
            autoIndex: false, // Don't build indexes
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0
          };
         
mongoose.connect('mongodb://proyectoapi:Abc123@ds127936.mlab.com:27936/heroku_hq6msf95',options,function(error){
    if(error) {console.log(`Ocurrio un error cuando intentaba conectarse a la base
    de datos  ${error}.`);}
    console.log('Se conecto a la base de datos')
    app.listen(port,()=>{
        console.log('Servidor node.js iniciado');
    })
})
