var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema will go here
var listingSchema = new Schema({cost: Number, sqft: Number, city: String})
var rentalSchema = new Schema({rent: Number, sqft: Number, city: String})

var listing = mongoose.model('listing', listingSchema, 'listings');
var rental = mongoose.model('rental', rentalSchema, 'rentals');



module.exports = router;