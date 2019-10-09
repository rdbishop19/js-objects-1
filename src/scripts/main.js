// console.log("We're learning about objects!")

// const food1 = {
//   "type": "Hambugrer",
//   "size": "Small",
//   "temperature": "Medium rare"
// }

// console.log("food", food1)

// const food2 = {
//   type: "Hot dog",
//   size: "Small",
//   temperature: "Well done"
// }

// const menu = [food1, food2]

// console.log("menu", menu)

// // Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// const car = {
//   make: "Ford",
//   model: "Mustang",
//   year: 2015,
//   color: "Red"
// }

// // Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// // Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// const parentOne = {
//   name: "Bob",
//   gender: "Non-binary",
//   age: 82
// }

// const parentTwo = {
//   name: "Chad",
//   gender: "Male",
//   age: 100
// }

// const parentThree = {
//   name: "Madonna",
//   gender: "Non-binary Cat",
//   age: 257
// }

// const child = {
//   name: "Child",
//   gender: "Undecided",
//   age: 64
// }

// const familyMembers = [parentOne, parentTwo, parentThree, child]

// console.log("familyMembers", familyMembers)

// Setting and Accessing Values on Objects
// Dot Notation

const lassie = {
  age: 7,
  breed: "Collie",
  color: "White and Brown"
}

// String concatenation
console.log(lassie.color + " " + lassie.breed)
console.log("Lassie's breed is " + lassie.breed)

// String interpolation
console.log(`${lassie.color} ${lassie.breed}`)
console.log(`Lassie's breed is ${lassie.breed}`)

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
const wardrobe = {
  height: 80,
  manufacturer: "Killibrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
}
