/*
This is a class that stores weapons in and allows users to add or remove weapons from it.
It can be used in games or even apps

class inventory:
    add
    remove
    display
    save
    load

class main:
    instancing the  inventory class and calling it to run
*/

import * as path from "path"
import * as fs from "fs"

const cwd = path.dirname(__filename)
const data = "hello, world";
fs.writeFile(`${cwd}/file.txt`, data, (err) => {
    if (err) {
        console.error('An error occurred', err);
        return;
    }
    console.log('Data has been written')
});