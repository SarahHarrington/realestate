myApp.controller('AddPropertyController', function ($http) {
    console.log('Add Controller Started');

    var self = this;

    //shows rental add form
    this.showRental = function() {
        console.log('add rental clicked');
        this.addR = true;
        this.addP = false;
    }

    //shows for sale add form
    this.showForSale = function() {
        console.log('add for sale clicked');
        this.addP = true;
        this.addR = false;   
    }

    this.addForRent = function() {
        console.log('submit for rent');
        
    }

    this.addForSale = function() {
        console.log('submit for sale');
        
    }

})