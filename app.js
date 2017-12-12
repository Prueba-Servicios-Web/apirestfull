'use strict'
const express=require('express');

const app=express()
const api=require('./routes')
var path = require('path');
app.use("/content", express.static(__dirname + '/uitest/content'));
app.use("/fonts", express.static(__dirname + '/uitest/fonts'));
app.use('/api',api)

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/uitest/ui.html'));
  });

module.exports=app;