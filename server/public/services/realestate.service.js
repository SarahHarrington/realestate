myApp.service('RealEstateService', function($http){
    console.log('Real Estate Service Started');
    
    var self = this;

    self.rentals = {data: []};
    self.listings = {data: []};

    self.getForRent = function () {
        $http.get('/rentals').then(function (response) {
            console.log(response.data);
            self.rentals.data = response.data;
        }).catch(function (error) {
            console.log('For Rent Properities could not load');
        })
    }
    self.getForRent();

    self.deleteRental = function (listingId) {
        console.log('delete clicked');
        console.log('id', listingId);
        $http.delete('/rentals/' + listingId).then(function (response) {
            console.log('response', response);
            self.getForRent();
        }).catch(function (error) {
            console.log('error');
        })
    }

    self.getForSale = function () {
        $http.get('/listings').then(function (response) {
            self.listings.data = response.data;
        }).catch(function (error) {
            console.log('For Sale Properities could not load');
        })
    }
    self.getForSale();

})