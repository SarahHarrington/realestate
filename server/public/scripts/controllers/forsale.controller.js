myApp.controller('ForSaleController', function ($http) {
    console.log('For Sale Controller Started');

    var self = this;
    var test = 'hello';
    self.listings = [];

    self.getForSale = function() {
        console.log('for sale clicked');
        
        $http.get('/listings').then(function(response){
            console.log('response', response.data);
            self.listings = response.data;
            
        }).catch(function(error){
            console.log('For Sale Properities could not load');
        })
    }
})