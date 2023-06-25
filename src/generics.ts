// generics allow creating "type variable" which can be used to create classes,
// functions & type aliases that do not need to explicitly define the types
// that they use.

// FUNCTIONS
function createPair<S, T>(v1: S, v2: T): [S, T]{
    return [v1, v2];
}
console.log(createPair<String, number>('Hello', 42));

// CLASSES
class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) { }
    
    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value
    }
    public toString(): string {
        return `${this.name}: ${this._value}`
    }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString())

// TYPE ALIASES
// generics in type aliases allow creating types that are more reusable
type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };
// also works with interfaces

// DEFAULT VALUE
// they can be assigned default values which apply if no other value is
// specified or inferred
class NamedValued<T = string> {
    private _value: T | undefined;

    constructor(private name: string) { }
    
    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value
    }
    public toString(): string {
        return `${this.name}: ${this._value}`
    }
}
let valued = new NamedValued('myNumber');
valued.setValue("myValue");
console.log(valued.toString())

// EXTENDS
// constraints can be added to generics to limit what's allowed.
// The constraints make it possible to rely on a more specific type when
// using the generic type.

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T]{
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2]
}
// it can also be combined with the default value