'use strict'

const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Cakes=require('./models/cakes')

const app=express()
const port=process.env.PORT || 3001

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
    let cakeid=req.params.id 
    Cakes.findById(cakeid,(err,cake)=>{
        if(err) return res.status(500).send({message:`ocurrio un error ${err}`})
   if(!cake) return res.status(404).send({message:`El producto id ${cakeid} no existe`})
res.status(200).send({cake:cake}) 
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
