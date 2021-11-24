const animals = [
  { name: "Cat", color: "ginger", age: "2", voice: "meow" },
  { name: "Dog", color: "black-white", age: "7", voice: "woof" },
  { name: "Horse", color: "black", age: "6", voice: "neigh" },
  { name: "Pig", color: "pink", age: "1", voice: "oink" },
  { name: "Cow", color: "white", age: "3", voice: "moo" },
];

class Animal {
  constructor(name, color, age, voice) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.voice = voice;
  }
}

const objectAnimals = animals.map((pAnimal) => {
  return new Animal(pAnimal.name, pAnimal.color, pAnimal.age, pAnimal.voice);
});
console.log(objectAnimals);

// Гена, почему нижняя запись выдает только список объектов класса, а верхняя массив объектов класса?
// Я разницу вообще не уловил. Вроде одно и тоже, только разным синтаксисом написал.

// animals.map(function (pAnimal) {
//   const newAnimals2 = new Animal(
//     pAnimal.name,
//     pAnimal.color,
//     pAnimal.age,
//     pAnimal.voice
//   );
//   console.log(newAnimals2);
// });
