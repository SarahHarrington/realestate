myApp.service('RealEstateService', function($http){
    console.log('Real Estate Service Started');
    
    var self = this;

    self.rentals = {data: [], addR: false};
    self.listings = {data: [], addP: true};

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

    self.deleteListing = function (saleId) {
        console.log('delete clicked');
        console.log('id', saleId);
        $http.delete('/listings/' + saleId).then(function (response) {
            console.log('response', response);
            self.getForSale();
        }).catch(function (error) {
            console.log('error');
        })
    }

    self.showRental = function () {
        console.log('add rental clicked');
        console.log(self.rentals.addR);
        
        self.rentals.addR = true;
        self.rentals.addP = false;

        console.log(self.rentals.addR);
    }

    //shows for sale add form
    self.showForSale = function () {
        console.log('add for sale clicked');
        self.addP = true;
        self.addR = false;
    }
})