"use strict";
var Customer = /** @class */ (function () {
    // Define constructor.
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        // Get accessors.
        get: function () {
            return this._firstName;
        },
        // Set accessors.
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// Create instance.
var myCustomer = new Customer("Martin", "Dickson");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
