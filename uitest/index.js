'use strict'

const express = require('express')
const ui=express.Router()
var cors=require('cors');
ui.use(cors());
const bodyParser=require('body-parser');
ui.use(bodyParser.urlencoded({extended:true}))
ui.use(bodyParser.json())
var path = require('path');
ui.use("/content", express.static(__dirname + '/content'));
ui.use("/fonts", express.static(__dirname + '/fonts'));
ui.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/ui.html'));
})


module.exports=ui;