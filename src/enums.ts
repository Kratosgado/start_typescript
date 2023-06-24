
// numeric enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}

console.log(StatusCodes.NotFound)

// string enums
enum CardinalDirections {
    North = 'North',
    East = 'East',
    South = "South",
    West = "West",
}

console.log(CardinalDirections.East)