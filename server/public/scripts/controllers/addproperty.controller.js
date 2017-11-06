myApp.controller('AddPropertyController', function (RealEstateService) {
    console.log('Add Controller Started');

    var self = this;
    self.rentals = RealEstateService.rentals;
    self.listings = RealEstateService.listings;

    //shows rental add form
    self.showRental = function() {
        RealEstateService.showRental();
    }

    //shows for sale add form
    self.showForSale = function() {
        RealEstateService.showForSale();
    }

    self.addForRent = function(rentalToAdd) {
        RealEstateService.addForRent(rentalToAdd);
    }
    
    self.addForSale = function (listingToAdd) {
        RealEstateService.addForSale(listingToAdd);

    }
})