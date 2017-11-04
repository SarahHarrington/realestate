var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema will go here
var listingSchema = new Schema({cost: Number, sqft: Number, city: String})
var rentalSchema = new Schema({rent: Number, sqft: Number, city: String})

var Listing = mongoose.model('Listing', listingSchema, 'listings');
var Rental = mongoose.model('Rental', rentalSchema, 'rentals');

router.get('/', function(req, res){
    Listing.find({}, function(err, foundForSale) {
        if (err) {
            console.log('Error getting properties for sale');
            
        } else {
            res.send(foundForSale)
        }
    })
});

module.exports = router;