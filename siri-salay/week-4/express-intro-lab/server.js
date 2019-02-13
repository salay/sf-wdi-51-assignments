// server.js

const albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];


  // SERVER-SIDE JAVASCRIPT
  const express = require('express');
//saving in a variable everything that's express.
//require means get all of the code

const app = express();
//variable that invokes the express function?
//this is so all functions in express are available to us in the variable app

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use(express.static(__dirname + '/public'));

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  app.get('/', (req, res) => {
    console.log(req.body);
    console.log(res.body);
    res.sendFile('index.html' , { root : __dirname});
   });



  //app.get('/', (req, res) => res.send('Hello World!'));

  // app.get('/', (request, response) =>  {

  // });

  app.get('/api/albums', (req, res) => res.json(albums)
          );



  //app.get method for the path /api/albums. Inside the new route, use res.json(albums)

  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));

  console.log(albums);

  console.log(__dirname);

  //Add a comment above each line of code saying what each line does.

  //Console log the req (request) and the res (response) objects inside your server code's app.get method for the / path.
  //(The / path is often called the "root" path.) Restart the server and briefly check out what the req and res are.

