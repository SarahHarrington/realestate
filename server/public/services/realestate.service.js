myApp.service('RealEstateService', function($http){
    console.log('Real Estate Service Started');
    
    var self = this;

    self.rentals = {data: [], addR: false};
    self.listings = {data: [], addP: false};

    //gets rental properties on section load
    self.getForRent = function () {
        $http.get('/rentals').then(function (response) {
            self.rentals.data = response.data;
        }).catch(function (error) {
            console.log('For Rent Properities could not load');
        })
    }
    self.getForRent();

    //deletes rental on button click
    self.deleteRental = function (listingId) {
        swal("Are you sure you want to delete this rental?")
            .then((value) => {
                if (true) {
                    $http.delete('/rentals/' + listingId).then(function (response) {
                        self.getForRent();
                    }).catch(function (error) {
                        console.log('error');
                    })
                };
            })
    }

    //gets properties for sale on section load
    self.getForSale = function () {
        $http.get('/listings').then(function (response) {
            self.listings.data = response.data;
        }).catch(function (error) {
            console.log('For Sale Properities could not load');
        })
    }
    self.getForSale();

    //deletes for sale listing
    self.deleteListing = function (saleId) {
        swal("Are you sure you want to delete this listing?")
            .then((value) => {
                if(true) {
                    $http.delete('/listings/' + saleId).then(function (response) {
                        self.getForSale();
                    }).catch(function (error) {
                        console.log('error');
                    } 
                )}
            })

    }

    //shows rental add form
    self.showRental = function () {
        self.rentals.addR = true;
        self.listings.addP = false; 
    }

    //shows for sale add form
    self.showForSale = function () {
        self.listings.addP = true;
        self.rentals.addR = false;
    }

    //add rental form
    self.addForRent = function (rentalToAdd) {
        console.log('clicked add rental');
        $http.post('/rentals', rentalToAdd).then(function (response) {
            console.log('Success');
            self.getForRent();
            swal('Added', 'New Rental Added!', 'success');
            self.rentals.addR = false;
        }).catch(function (error) {
            console.log('Error');
        })
    }

    //add for sale form
    self.addForSale = function (listingToAdd) {
        console.log('clicked add listing');
        $http.post('/listings', listingToAdd).then(function (response) {
            console.log('Success');
            self.getForSale();
            swal('Added', 'New Listing Added!', 'success');
            self.listings.addP = false;
        }).catch(function (error) {
            console.log('Error');
        })
    }

    // self.editListing = function (saleId) {
    //     console.log('edit clicked');
    //     swal({
    //         content: {
    //             element: "input",
    //             attributes: {
    //                 placeholder: 'property cost',
    //                 type: 'text'
    //             },
    //             element: "input",
    //             attributes: {
    //                 placeholder: 'square feet',
    //                 type: 'text'
    //             },
    //         },
    //     });
    // }

})