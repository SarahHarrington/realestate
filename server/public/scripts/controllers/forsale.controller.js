myApp.controller('ForSaleController', function (RealEstateService) {
    console.log('For Sale Controller Started');

    var self = this;
    self.listings = RealEstateService.listings;
    
    //gets rental properties
    self.getForSale = function() {
        RealEstateService.getForSale();
    }

    self.deleteProp = function (saleId) {
        RealEstateService.deleteListing(saleId)
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