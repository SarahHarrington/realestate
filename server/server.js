var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;
var listingsRouter = require('./routes/listings.js');
var rentalsRouter = require('./routes/rentals.js')
var bodyParser = require('body-parser');
//needs to be updated

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/listings', listingsRouter);
app.use('/rentals', rentalsRouter)

var mongoose = require('mongoose');
// var databaseUrl = 'mongodb://localhost:27017/realestate';
var mongoURI = '';
if (process.env.MONGODB_URI != undefined) {
    mongoURI = process.env.MONGODB_URI;
} else {
    mongoURI = 'mongodb://localhost:27017/sarahsdb';
}

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected');
})

mongoose.connection.on('error', function(){
    console.log('mongoose connection failed');
})

mongoose.connect(mongoURI,{
    useMongoClient: true
});

app.listen(port, function (req, res) {
    console.log('Listening on port', port);
})
