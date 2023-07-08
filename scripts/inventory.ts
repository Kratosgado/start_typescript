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

import jsonfile from 'jsonfile'
import path from 'path';
import { existsSync } from "fs";
import { createInterface } from 'readline';
import { error } from 'console';

class Inventory {
    private weapons = new Map<string, number>()

    constructor() {
        this.load()
    }
    /**
     * add
     * add weapons to the inventory
     */
    public add(weapon: string, amt: number) {   
        let qty: number = amt
        if (this.weapons.has(weapon)) {
            qty += this.weapons.get(weapon)!
        }
        this.weapons.set(weapon, qty);
        console.log(` You added ${amt} to ${weapon} \n ${weapon} is now ${qty}`)
    }
    /**
     * remove
     * remove weapons from the inventory
     */
    public remove(weapon: string, amt: number) {
        let qty: number = 0
        if (this.weapons.has(weapon)) {
            qty = this.weapons.get(weapon)!
            if (qty - amt < 0) {
                console.log(`You only have ${qty} ${weapon}, You cannot remove ${amt} from it`);
                return
            }
            this.weapons.set(weapon, qty - amt)
            console.log(` You removed ${amt} from ${weapon} \n You now have ${qty} ${weapon} left `)
            return
        }
        console.log(`You do not have ${weapon} in inventory, operation aborted`)        
    }
    /**
     * display
     * display weapons in our inventory
     */
    public display() {
        this.weapons.forEach(element => {
            console.log(`${element}`)
        });
    }
    /**
     * save
     * save weapons in our inventory
     */
    public save() {
        const cwd: string = path.dirname(__filename)
        const filepath: string = path.join(cwd, 'inventory.json')
        console.log("saving data ...")
        try {
            jsonfile.writeFileSync(filepath, this.weapons);
            console.log('data saved successfully...')
        } catch (error) {
            console.error("An error occurred: ", error)
        }
    }
    /**
     * load
     * a method to load the inventory weapons
     */
    public load() {
        const cwd: string = path.dirname(__filename)
        const filepath: string = path.join(cwd, 'inventory.json')
        console.log("loading data...")
        if (existsSync(filepath)) {
            try {
                this.weapons = jsonfile.readFileSync(filepath);
                console.log('data loaded successfully...')
            } catch (error) {
                console.error('An error occurred: ', error)
            }
            return
        }
        console.log("There's no data to load")
    }
}

const input = createInterface({
    input: process.stdin, output: process.stdout
})
class Main{
    private async getCommand() : Promise<string> {
        return new Promise((resolve) => {
            input.question("Enter command as small caps: ", (ans) => {
                resolve(ans);
            });
        });
    }

    public async run() {
        const invent = new Inventory();
        while (true) {
            
            enum command { add = 'add', remove = 'remove', display = 'list', save = 'save', load = 'load', exit = 'exit', }
            console.log('COMMANDS: \n\t 1. add \n\t 2. remove \n\t 3. list \n\t 4. save \n\t 5. load \n\t 6. exit')
            const cmd = await this.getCommand();
                if (cmd == command.add) {
                    console.log("hello friend");
            }
        }
    }
    
}

if (require.main === module) {
    const main = new Main();
    main.run();
}