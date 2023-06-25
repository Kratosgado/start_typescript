// casting is the process of overriding a type
// a straight forward way is the use of "as"

let g: unknown = 'hello';
console.log((g as string).length)

// CASTING WITH <>
// type casting with <> will not work with TSX, such as when working on React files
let h: unknown = 'hi'
console.log((<string>h).length)

// FORCE CASTING
// to override type errors that typescript may throw when casting,
// first cast to unknown, then to the target type