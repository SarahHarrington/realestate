myApp.controller('RentalController', function($http){
    console.log('Rental Controller Started');
    
    var self = this;

    self.getForRent = function () {

        $http.get('/rentals').then(function (response) {
            console.log('response', response.data);
            self.rentals = response.data;

        }).catch(function (error) {
            console.log('For Rent Properities could not load');
        })
    }
    self.getForRent();
})