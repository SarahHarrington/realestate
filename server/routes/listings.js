var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema will go here
var listingSchema = new Schema({cost: Number, sqft: Number, city: String})

var Listing = mongoose.model('Listing', listingSchema, 'listings');

router.get('/', function(req, res){
    Listing.find({}, function(err, foundForSale) {
        if (err) {
            console.log('Error getting properties for sale');
            
        } else {
            console.log('foundforsale', foundForSale);
            res.send(foundForSale);
        }
    })
});

router.post('/', function (req, res) {
    console.log('post req body', req.body);
    var listingToAdd = new Listing(req.body);
    listingToAdd.save(function (err, data) {
        if (err) {
            console.log('Save Error');
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    });

});

module.exports = router;