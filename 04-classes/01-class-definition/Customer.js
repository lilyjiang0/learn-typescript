var Customer = /** @class */ (function () {
    // Define constrcuter.
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// Create instance.
var myCustomer = new Customer("Martin", "Dickson");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
