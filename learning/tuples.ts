// let w: unknown = 1;
// w = "string";
// w = {
//     runANonExistentMethod: () => console.log("I think therefor I am")
// } as { runANonExistentMethod: () => void }

// if (typeof w === 'object' && w !== null) {
//     (w as {
//         runANonExistentMethod: Function
//     }).runANonExistentMethod();
// }

let ourTuple: [number, boolean, string];
ourTuple = [5, false, "coding god was here"];
ourTuple.push('sometheing new');
console.log(ourTuple);

// named tuples
//named tuples provide more context for what our index values represent
const graph: [x: number, y: number] = [55.2, 41.3];

// destructuring tuples
const ngraph: [number, number] = [54, 65];
const [x, y] = graph;