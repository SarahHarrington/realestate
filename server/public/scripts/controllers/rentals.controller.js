myApp.controller('RentalController', function (RealEstateService){
    console.log('Rental Controller Started');
    
    var self = this;
    self.rentals = RealEstateService.rentals;
    
    //gets properties for rent
    self.getForRent = function () {
        RealEstateService.getForRent();
    }
    //deletes properties for rent
    self.deleteProp = function(listingId) {
        RealEstateService.deleteRental(listingId);
    }

})