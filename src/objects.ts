
// objects are like or work like dictionaries in python and
// map in java, c++ and dart

// example without optional property
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "corolla",
    year: 2009
};

// example with optional property
const cars: { type: string, mileage?: number } = {
    type: "Toyota"
}
cars.mileage = 2000;
console.log(car.model)