"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
// Export this class, so someone else can import it.
var Customer = /** @class */ (function () {
    // Define properties and assigned properties automagically.
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
exports.Customer = Customer;
