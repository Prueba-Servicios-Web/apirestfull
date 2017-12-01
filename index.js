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


app.listen(port,()=>{
    console.log('Servidor node.js iniciado');
})
