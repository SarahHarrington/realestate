myApp.controller('ForSaleController', function ($http) {
    console.log('For Sale Controller Started');

    var self = this;
    
    //gets rental properties
    self.getForSale = function() {
        $http.get('/listings').then(function(response){
            self.listings = response.data;
        }).catch(function(error){
            console.log('For Sale Properities could not load');
        })
    }

    self.getForSale();  //loads for sale props on section load

    self.deleteProp = function (saleId) {
        console.log('delete clicked');
        console.log('id', saleId);
        $http.delete('/listings/' + saleId).then(function (response) {
            console.log('response', response);
            self.getForSale();
        }).catch(function (error) {
            console.log('error');
        })

    }
})