//these are all required imports/extensions/packages and files
const 
    express = require('express'),
    cors = require('cors'),
    dogRoutes = require('./routes/dogs'),
    userRoutes = require('./routes/user'),
    bodyParser = require('body-parser')


const app = express()

//this is the middleware. tells you what to use.

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

//this tells you the url pathways in which the routes are used
app.use('/api/dogs', dogRoutes)
app.use('/user', userRoutes)

//this is the port to run server on
app.listen(3001, () => console.log('Listening on port 3001 :)'))