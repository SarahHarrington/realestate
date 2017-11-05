var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema will go here
var rentalSchema = new Schema({ rent: Number, sqft: Number, city: String })
var Rental = mongoose.model('Rental', rentalSchema, 'rentals');

//gets properties from the database
router.get('/', function (req, res) {
    Rental.find({}, function (err, foundRental) {
        if (err) {
            console.log('Error getting properties for sale');

        } else {
            res.send(foundRental)
        }
    })
});

//posts new properties to the router
router.post('/', function(req, res){
    console.log('post req body', req.body);
    var rentalToAdd = new Rental(req.body);
    rentalToAdd.save(function(err, data){
        if (err) {
            console.log('Save Error');
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    });
});

//delete rental property
router.delete('/:id', function(req, res){
    var listingId = req.params.id;

    Rental.findByIdAndRemove({'_id': listingId}, function(err, data){
        if (err) {
            console.log('err');
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    })
})

module.exports = router;