var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var propertyRouter = require('./routes/propertyrouter.js');
var port = process.env.PORT || 5000;
//needs to be updated

app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/propertyrouter', propertyRouter);//needs to be updated

var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/realestate'; //needs to be updated

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