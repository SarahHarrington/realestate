myApp.controller('ForSaleController', function ($http) {
    console.log('For Sale Controller Started');

    var self = this;
    
    //gets rental properties
    self.getForSale = function() {
        RealEstateService.getForSale();
    }

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

    self.editProp = function(saleId) {
        console.log('edit clicked');
        swal({
            content: {
                element: "input",
                attributes: {
                    placeholder: 'property cost',
                    type: 'text'
                },
            },
        });
    }
})