// union types are used when a value can be more than a single type

// Union | (OR)

function printStatusCode(code :string | number) {
    console.log(`My status code is ${code}`)
    // check the usage of `` not ''
}

printStatusCode(404);
printStatusCode('404');

// checking union type errors
function printStatusCodeCheck(code:string | number) {
    console.log(`My status code is ${code.toUpperCase()}`) // raises error
}