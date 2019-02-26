const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports.Author = require("./author.js");

const BookSchema = new Schema({
     title: String,
     author: {
         type: Schema.Types.ObjectId,
         ref: 'Author'
     },
     image: String,
     releaseDate: String
 });

 
 
//organization or structure for a database
//comparable to a prototype

const Book = mongoose.model('Book', BookSchema);
//model is a function that takes in the object called 'Book' 
//function holds the name of the model 
//remain consistent..... so name this model 'Book' (though it can be whatever)
//and 'Book' is based off of the BookSchema


module.exports = Book;
// Book has to match the const Book in the previous line. in order to 
// expose this object, it has to be the same from the model


//module is an object. exports is an object within module. it contains a key called Book.
//modeul.exports is node