// Export this class, so someone else can import it.
export class Customer {
    // Define properties and assigned properties automagically.
    constructor(private _firstName: string, private _lastName: string) {
    }

    // Get accessors.
    public get firstName(): string{
        return this._firstName;
    }
    
    public get lastName(): string {
        return this._lastName;
    }

    // Set accessors.
    public set firstName(value: string) {
        this._firstName = value;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

}

