myApp.controller('AddPropertyController', function ($http) {
    console.log('Add Controller Started');

    var self = this;

    //shows rental add form
    this.showRental = function() {
        console.log('add rental clicked');
        this.addR = true;
        this.addP = false;
    }

    //shows for sale add form
    this.showForSale = function() {
        console.log('add for sale clicked');
        this.addP = true;
        this.addR = false;   
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