class Customer {
    // Default public.
    firstName: string;
    lastName: string;

    // Define constructor.
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

// Create instance.
let myCustomer = new Customer("Martin", "Dickson");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);