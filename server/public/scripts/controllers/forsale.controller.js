myApp.controller('ForSaleController', function ($http) {
    console.log('For Sale Controller Started');

    var self = this;

    self.getForSale = function() {
        console.log('for sale clicked');
        
        console.log('for sale clicked');
        $http.get('/properties').then(function(response){
            console.log('response', response.data);
            
        }).catch(function(error){
            console.log('For Sale Properities could not load');
        })
    }

})