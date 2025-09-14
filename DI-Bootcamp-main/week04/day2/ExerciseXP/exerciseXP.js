//  Exercise 1 : Location

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Prediction:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
function displayStudentInfo(objUser) {
  //destructuring
  const { first, last } = objUser;
  console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

// Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1.
const arr = Object.entries(users);
console.log(arr);

// 2.
arr.forEach((user) => {
  user[1] = user[1] * 2;
});

console.log(arr);

// Exercise 4 : Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// Prediction:
// object

// Exercise 5 : Dog class
class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size; // ReferenceError: Must call super constructor before accessing 'this'
  }
}

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name); // Calls parent constructor with name
    this.size = size; // Then sets additional property
  }
}

// 3
class Labrador extends Dog {
  constructor(size) {
    super(name); // ReferenceError: 'name' is not defined
    this.size = size;
  }
}

// 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name; // ReferenceError: Must call super constructor before accessing 'this'
    this.size = size;
  }
}

// Which constructor will successfully extend the Dog class?

// Prediction:
// 2

// Exercise 6 : Challenges

// 1
// [2] === [2] - false
// {} === {} - false

// 2
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number);
console.log(object3.number);
console.log(object4.number);

// Prediction:
// object1 = 4 - because object1 and object2 are pointing to the same object
// object2 = 4 - same here
// object3 = 4 - same here
// object4 = 5 - because object4 is a new object

// Exercise 7 : Animal class
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name}, and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "white and brown");
console.log(farmerCow.sound("Moo"));
