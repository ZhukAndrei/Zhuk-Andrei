//Создать функцию, для создания элементов формы, результат функции вставить в форму
const formArray = [
  {type: "Text1", name: "Name"},
  {type: "text2", name: "Surname"},
  {type: "text3", name: "Passwords"}
];
const form = document.createElement("form");
form.classList.add("form");

document.body.appendChild(form);

const userCard = (type, name) => {
    return `
<ul class = "userCardForm">
<li>${type}</li>
<li>${name}</li>
</ul>`
};
const formHTML = formArray.map((user) => {
  return userCard(user.type, user.name)
});

form.innerHTML = formHTML;



console.log(form);
