// the type of the value returned by the function can be explicitly defined

function getTime(): number {
    return new Date().getTime()
}

// void means no value will be returned
function printHello(): void {
    console.log('hello')
}

// Parameters
// function parameters are typed with a similar syntax as variable declarations
function multiply(a: number, b:number){
    return a * b
}

console.log(typeof multiply(2, 4))

// OPTIONAL PARAMETERS
// the ? operator marks parameters as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0); // use 0 if c is null
}

function mul(a: number, b: number, c?: number) {
    return a * b * (c || 1); // use 1 if c is null
}

//DEFAULT PARAMETERS
// default parameters could be a better way to use an optional parameter
// but optional parameters can be used to change the function completely
function pow(value: number, exponent: number = 10) {
    return value ** exponent // value ** (exponent || 10) for optional parameters
}

// NAMED PARAMETERS
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

// REST PARAMETERS
// can be typed like normal parameters but the type must be an array
// rest parameters are always arrays

function addRest(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

// TYPE ALIAS
// function types can be specified separately from functions with type aliases
type Negate = (value: number) => number;