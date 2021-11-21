const animals = [{ name: '', color: "", age: "", voice: "" }];

class Animal {
  constructor(name, color, age, voice) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.voice = voice;
  }
  }
const animal1 = new Animal("Cat", "ginger", "2", "meow");
const animal2 = new Animal("Dog", "black-white", "7", "woof");
const animal3 = new Animal("Horse", "black", "6", "neigh");
const animal4 = new Animal("Pig", "pink", "1", "oink");
const animal5 = new Animal("Cow", "white", "3", "moo");
let objectAnimals = [
    animal1,
    animal2,
    animal3,
    animal4,
    animal5
];

console.log(objectAnimals);
