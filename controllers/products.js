'use strict'
const Product=require('../models/products')

function getProduct(req,res){
    let productid=req.params.id 
    console.log(productid)
    Product.findById(productid,(err,product)=>{
       // Product.find({"description":productid},(err,product)=>{
        console.log(err);
        if(err) return res.status(500).send({message:`ocurrio un error ${err}`})
   if(!product) return res.status(404).send({message:`El producto id ${productid} no existe`})
res.status(200).send({product:product}) 
})
}

function getProducts(req,res){
    Product.find((err,products)=>{
        console.log(err);
        if(err) return res.status(500).send({message:`ocurrio un error ${err}`})
   if(!products) return res.status(404).send({message:`No existen productos`})
res.status(200).send({products:products}) 
})
}

function addProduct(req,res){
    console.log('cuerpo de la pticion')
    console.log(req.body)
    console.log(req.body.name)
    var body=req.body;
    let product = new Product()
    product.name=body.name
    product.description=body.description
    product.details.flavor=body.details.flavor
    product.details.color=body.details.color
    product.save((err,productStored)=>{
        console.log(err);
if(err) res.status(500).send({message:"Error al guardar el producto"})

})
res.status(200).send({message:"Guardado con exito"})
}

function deleteProduct(id){
    
}

module.exports = {
getProduct,
getProducts,
addProduct
}