// IMPLEMENTS
// Interfaces can e used to define the type a class must follow through the
// implements keyword

interface Shape {
    getArea: () => number
}

class Rectangle1 implements Shape {
    public constructor(
        protected readonly w: number, protected readonly h: number
    ) { }

    public getArea(): number {
        return this.w * this.h
    } 
}
// a class can implement multiple interfaces by listing each one after
// implements keyword, separated by a comma

// EXTENDS
// a class can only extend one other class

// OVERRIDE
// we use override to replace members of the parent class with the same name
class Square extends Rectangle1 {
    public constructor(w: number) {
        super(w, w)
    }
    public override toString(): string {
        return `Square[width=${this.w}]`
    }
}

// ABSTRACT CLASSES
// class can be written in a way that allows them to be used as a base class
// for other classes without having to implement all the members.
// this is done by using the 'abstract' keyword. Members that are left
// unimplemented also use the abstract keyword

abstract class Polygon {
    public abstract getArea(): number;
    public toString(): string{
        return `Polygon[area = ${this.getArea()}]`;
    }
}

// abstract classes cannot be directly instantiated
class Rectangle extends Polygon {
    constructor(
        protected readonly w: number,
        protected readonly h: number
    ) {
        super();
    }

    public getArea(): number {
        return this.w * this.h
    }
}