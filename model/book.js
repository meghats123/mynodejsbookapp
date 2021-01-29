var mongoose = require("mongoose")
const bookSchema = new mongoose.Schema(
    {
        bookname:{type:String},
        bookauthor:{type:String},
        price:{type:Number},
        
    }
)
var bookModel=mongoose.model('books',bookSchema);
module.exports={bookModel}