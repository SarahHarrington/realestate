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

    // self.editListing = function(saleId) {
    //     RealEstateService.editListing(saleId);
    // }
})