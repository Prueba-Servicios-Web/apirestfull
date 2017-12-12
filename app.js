'use strict'
const express=require('express');

const app=express()
const api=require('./routes')
const ui=require('./uitest')

app.use('/api',api)
app.use('/',ui)
//app.get('/index', function (req, res) {
  //  res.sendFile(path.join(__dirname + '/uitest/ui.html'));
  //});

module.exports=app;