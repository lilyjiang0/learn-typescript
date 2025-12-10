# Defining Accessors
## Getter/ Setter Methods
```
class Customer {
    private _firstName: string;
    private _lastName: string;
    
    ...

    public getFirstName(): string {
        return this._firstName;
    }

    public setFirstName(firstName: string): void {
        this._firstName = firstName;
    }
    

}

customer.setFirstName("Gary);
customer.getLastName();
```

## TypeScript Accessors - Get/ Set
```
class Customer {
    private _firstName: string;
    private _lastName: string;
    
    ...

    // Get accessors. Can remove public modifier, because it is public by default.
    public get firstName(): string{
        return this._firstName;
    }


    // Set accessors.
    public set firstName(value: string) {
        this._firstName = value;
    }

}

// Getting.
customer.firstName;
// Setting.
customer.firstName = "";
```

## Compiler flag
The get/set accessors feature is only supported in ES5 and higher.
Need to set a compiler flag in order to compile the code.

`tsc --target ES5 Customer.ts`

## tsconfig.json
- Defines compiler options and project settings
- Can be generated with 
`tsc --init`

- Compiler flag:
```
{
    "compilerOptions: {
        "noEmitOnError": true,
        "target": "es5"
    }
}
```

- Once project has a tsconfig.json, can compile with "tsc", there is no need to give names of TypeScript files. By default, will compile all *.ts file.