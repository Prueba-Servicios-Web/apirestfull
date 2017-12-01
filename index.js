'use strict'

const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Cakes=require('./models/cakes')

const app=express()
const port=process.env.port || 3001

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/api/cakes',(req,res)=>{
    res.send(200,{cakes:[]})
})
app.get('/api/cakes/:id',(req,res)=>{
     
})

app.post('/api/cakes',(req,res)=>{
    console.log(req.body);
    let cake=new Cakes()
    cake.name=req.body.name
    cake.picture=req.body.picture
    cake.price=req.body.price
    cake.category=req.body.category
    cake.description=req.body.description
    cake.save((err,cakeStore)=>{
        if(err) res.status(500).send({message:`error al guardar el queque en la base de datos ${err}`})
        res.status(200).send({cake:cakeStore})
    })
   
})

app.put('/api/cakes/:id',(req,res)=>{
    
    })

app.delete('/api/cakes/:id',(req,res)=>{
        
        })
mongoose.connect('mongodb://localhost:27017/cakesAppProject',(err,res)=>{
    if(err) {console.log(`Ocurrio un error cuando intentaba conectarse a la base
    de datos  ${err}.`);}
    console.log('Se conecto a la base de datos')
    app.listen(port,()=>{
        console.log('Servidor node.js iniciado');
    })
})
