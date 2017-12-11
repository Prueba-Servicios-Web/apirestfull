'use strict'


const mongoose=require('mongoose');
const app=require('./app')
const config=require('./config')
               
mongoose.connect(config.db,config.options,function(error){
    if(error) {console.log(`Ocurrio un error cuando intentaba conectarse a la base
    de datos  ${error}.`);}
    console.log('Se conecto a la base de datos')
    app.listen(config.port,()=>{
        console.log('Servidor node.js iniciado');
    })
})
