'use strict'

const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ProductSchema=Schema({
    name:String,
    picture:String,
    price:Number,
    description:String,
    category:{type:Schema.Types.ObjectId,ref:'Categorys'},
    details:{color:String,width:Number,height:Number,flavor:String        
    }
})

module.exports= mongoose.model('Product',ProductSchema);