myApp.controller('RentalController', function($http){
    console.log('Rental Controller Started');
    
    var self = this;

    self.getForRent = function () {
        console.log('for rent clicked');

        $http.get('/rentals').then(function (response) {
            console.log('response', response.data);

        }).catch(function (error) {
            console.log('For Rent Properities could not load');
        })
    }
})