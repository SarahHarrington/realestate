var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;
//needs to be updated
// var riddleRouter = require('./routes/riddlerouter.js')

var bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()) //has to go before the router and is needed angular
// app.use('/riddles', riddleRouter);//needs to be updated

var mongoose = require('mongoose');
// var databaseUrl = 'mongodb://localhost:27017/riddleholder'; //needs to be updated

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected');

})

mongoose.connect(databaseUrl);

app.listen(port, function (req, res) {
    console.log('Listening on port', port);
})