
var mongoose = require("mongoose");
// the mongoose.connect line will only happen once in your code for each project
mongoose.connect("mongodb://localhost/book-app", { useNewUrlParser: true
    }
);   


//this is the train station/facility where we import all the models 

module.exports = {
    Book: require('./book.js'),
    Author: require('./author.js'),
    // Publisher: require('./publisher.js')
  };







//module.exports.Author = require("./author.js");






// can also write the above code this way:
// module.exports.Book = require('./book/js');


// a module is a term (NOT a reserved word)
// it's a piece of code that's contained in a single space (one file)
// and can be exported and reuised throughout your site as much as possible
// Sometimes, you can have a modules folder in a bigger project.