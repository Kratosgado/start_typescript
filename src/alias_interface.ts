// aliases allow defining types with a custom name (an Alias)


type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"

const newCar: Car = {
    year: carYear,
    type: carType,
    model: carModel,
}

// Interfaces
// interfaces are just like aliases but only apply to objects

interface Rectangle2 {
    height: number,
    width: number,
}

const rectangle: Rectangle2 = {
    height: 20,
    width: 10
}

// Extending Interfaces
interface ColoredRectangle extends Rectangle2 {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
}