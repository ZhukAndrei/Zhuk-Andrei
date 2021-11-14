const array = [
  { name: "Ivan", salary: 1000 },
  { name: "Anton", salary: 2000 },
];

let sumSalary = Number();
for (let i = 0; i < array.length; i++) sumSalary += array[i].salary;

//alert(sumSalary);
console.log(sumSalary);