myApp.controller('RentalController', function($http){
    console.log('Rental Controller Started');
    
    var self = this;
    
    //gets properties for rent
    self.getForRent = function () {
        $http.get('/rentals').then(function (response) {
            console.log('response', response.data);
            self.rentals = response.data;
        }).catch(function (error) {
            console.log('For Rent Properities could not load');
        })
    }
    self.getForRent(); //loads rentals on section load

    self.deleteProp = function(listingId) {
        console.log('delete clicked');
        console.log('id', listingId);
        $http.delete('/rentals/' + listingId).then(function(response){
            console.log('response', response);
            self.getForRent();
        }).catch(function(error){
            console.log('error');
        })
        
    }

})