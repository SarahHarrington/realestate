myApp.controller('ForSaleController', function ($http) {
    console.log('For Sale Controller Started');

    var self = this;
    
    self.getForSale = function() {
        
        $http.get('/listings').then(function(response){
            self.listings = response.data;
            
        }).catch(function(error){
            console.log('For Sale Properities could not load');
        })
    }
    self.getForSale();
})