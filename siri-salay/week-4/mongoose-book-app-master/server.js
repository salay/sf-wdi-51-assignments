// server.js
// SERVER-SIDE JAVASCRIPT

/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

//importing the models folder ^^^^^^

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////


////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/

// app.get('/api/books', (req, res) => {
// // send all books as JSON response
//  db.Book.find(function(err, books){
//   if (err) {
//     console.log("index error: " + err);
//     res.sendStatus(500);
//   }
//   res.json(books);
// });
// });


app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});



// get all books
app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find()
    // populate fills in the author id with all the author data
    .populate('author')
    .exec(function(err, books){
      if (err) { console.log("index error: " + err); }
      res.json(books);
    });
});




// get one book
app.get('/api/books/:id', function (req, res) {
  // find one book by its id
    db.Book.findOne({ _id: req.params.id }, (err, data) => {
      if (err)  {
        console.log("this is not the book you're looking for.");
      }
      //don't use an else statment because you may exit out of the if statement
      //and not go into the else statement?
      res.json(data);
    });
});







// console.log('books show', req.params);
//   for(var i=0; i < books.length; i++) {
//     if (books[i]._id === req.params.id) {
//       res.json(books[i]);
//       break; // we found the right book, we can stop searching
//     }
//   }



// // create new book
// app.post('/api/books', function (req, res) {
//   // create new book with form data (`req.body`)
//   const newBook = new db.Book ({
//     title: req.body.title,
//     image: req.body.image,
//     author: req.body.author,
//     releaseDate: req.body.date
//   });
//   newBook.save((err, newBook) => {
//     if (err) {
//       throw err;
//     }
//     console.log(` saved ${newBook.title}`)
//     res.json(newBook);
//   })
// });



    // create new book
    app.post('/api/books', function (req, res) {
      // create new book with form data (`req.body`)
      var newBook = new db.Book({
        title: req.body.title,
        image: req.body.image,
        releaseDate: req.body.releaseDate,
      });


      // this code will only add an author to a book if the author already exists
      db.Author.findOne({name: req.body.author}, function(err, author){
        newBook.author = author;
        // add newBook to database
        newBook.save(function(err, book){
          if (err) {
            console.log("create error: " + err);
          }
          console.log("created ", book.title);
          res.json(book);
        });
      });

    });








// console.log('books create', req.body);
// var newBook = req.body;
// newBook._id = newBookUUID++;
// books.push(newBook);
// res.json(newBook);


// update book
app.put('/api/books/:id', function(req,res){
// get book id from url params (`req.params`)
  console.log('books update', req.params);
  console.log(`the body is ${req.body}`)
  const bookId = req.params.id;

  db.Book.findOneAndUpdate(
    { _id: bookId},
    req.body,
    {new: true},
    (err, updatedBook) => {
    if (err) {throw err;}
    res.json(updatedBook);
  });
});






// // find the index of the book we want to remove
// var updateBookIndex = books.findIndex(function(element, index) {
//   return (element._id === parseInt(req.params.id)); //params are strings
// });
// console.log('updating book with index', deleteBookIndex);
// var bookToUpdate = books[deleteBookIndex];
// books.splice(updateBookIndex, 1, req.params);
// res.json(req.params);









// delete book
app.delete('/api/books/:id', function (req, res) {
 console.log('books delete', req.params);
 const bookId = req.params.id;

db.Book.findOneAndDelete( _id = bookId, (err, deletedBook) => {
    if (err) {
      throw err;}
    res.json(deletedBook);
  });
});

  // // get book id from url params (`req.params`)
  // console.log('books delete', req.params);
  // var bookId = req.params.id;
  // // find the index of the book we want to remove
  // var deleteBookIndex = books.findIndex(function(element, index) {
  //   return (element._id === parseInt(req.params.id)); //params are strings
  // });
  // console.log('deleting book with index', deleteBookIndex);
  // var bookToDelete = books[deleteBookIndex];
  // books.splice(deleteBookIndex, 1);
  // res.json(bookToDelete);



app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
