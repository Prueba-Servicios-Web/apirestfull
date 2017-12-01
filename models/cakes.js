'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const CakeSchema=Schema({
    name:String,
    picture:String,
    price:Number,
    category:{type:String,enum:['pasteles','postres']},
    description:String
})

module.exports= mongoose.model('Cakes',CakeSchema);