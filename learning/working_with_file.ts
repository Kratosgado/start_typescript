import * as path from "path"
import * as fs from "fs"

const cwd = path.dirname(__filename)
console.log(cwd)
const filepath = path.join(cwd, "file.txt")
console.log(filepath)

const data = "hello, world";
// fs.writeFile(`${cwd}/file.txt`, data, (err) => {
//     if (err) {
//         console.error('An error occurred', err);
//         return;
//     }
//     console.log('Data has been written')
// });


// fs.readFile(`${cwd}/file.txt`, 'utf8', (err, data) => {
//     if (err) {
//       console.error('An error occurred:', err);
//       return;
//     }
//     console.log('Data read from the file:', data);
//   });