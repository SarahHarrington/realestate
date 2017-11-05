myApp.controller('AddPropertyController', function (RealEstateService) {
    console.log('Add Controller Started');

    var self = this;
    self.rentals = RealEstateService.rentals;

    //shows rental add form
    this.showRental = function() {
        RealEstateService.showRental();
    }

    //shows for sale add form
    this.showForSale = function() {
        RealEstateService.showForSale();
    }

    this.addForRent = function(rentalToAdd) {
        console.log('submit for rent');
        console.log('addForRent', rentalToAdd);
        
        $http.post('/rentals', rentalToAdd).then(function(response){
            console.log('Success');
            //refresh list here
        }).catch(function(error){
            console.log('Error');
        })
    }

    this.addForSale = function (listingToAdd) {
        console.log('submit for sale');
        $http.post('/listings', listingToAdd).then(function(response){
            console.log('Success');
            //refresh here
        }).catch(function(error){
            console.log('Error');
            
        })
    }

})