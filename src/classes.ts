

// MEMBERS VISIBILITY
// public: (default) allows access to the class members from anywhere
// private: only allows access to the class member from within the class
// protected: allows access to the class member from itself and any class
// that inherit it

class Human {
    public constructor( private name: string) {
        this.name = name;
    }
    /**
     * getName
     * getName function provides access to the member variables
     */
    public getName() {
        return this.name
    }
}
const person = new Human("Mbeah")
// console.log(person.getName())

// READONLY
// prevents a class members from being changed
class Person {
    private readonly name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}