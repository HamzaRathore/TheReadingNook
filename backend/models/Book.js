const mongoose = require('mongoose');

const BookSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    isBestSeller: {
         type: Boolean, 
         default: false
         },

        //   createdBy: {type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

const Book = mongoose.model('Book',BookSchema);
module.exports = Book;