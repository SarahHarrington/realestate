var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;
var propertiesRouter = require('./routes/properties.js');
var bodyParser = require('body-parser');
//needs to be updated

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use('/properties', propertiesRouter);

var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/realestate';

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected');
})

mongoose.connection.on('error', function(){
    console.log('mongoose connection failed');
})

mongoose.connect(databaseUrl);

app.listen(port, function (req, res) {
    console.log('Listening on port', port);
})