const innerUrlCompany =
  "https://random-data-api.com/api/company/random_company";
const innerUrlUser = 
  "https://random-data-api.com/api/users/random_user";
const innerUrlNumber =
  "https://random-data-api.com/api/phone_number/random_phone_number";


//== удалить тестовую стороку==
  document.querySelector("div").innerText = "DEMO"
//== удалить тестовую стороку==

const div = document.querySelector("div");
const companyButton = document.querySelector("#company");
const userButton = document.querySelector("#user");
const phoneButton = document.querySelector("#phone");
let innerUrl;


company.addEventListener( "click" , () => {
  innerUrl = innerUrlCompany;
  div.innerText = "";
   console.log(innerUrl);
   div.innerText = "Company";
   
});
//console.log(userButton);

user.addEventListener( "click" , () => {
  innerUrl = innerUrlUser;
  div.innerText = "";
    console.log(innerUrl);
    div.innerText = "User";
});

phone.addEventListener( "click" , () => {
  innerUrl = innerUrlNumber;
  div.innerText = "";
  console.log(innerUrl);
  div.innerText = "Number";
});

const listPromise = fetch(innerUrlCompany);
const objPromise = listPromise
  .then((datajson) => datajson.json())
  .then((creditCardData) => {
    console.log(creditCardData.business_name);
    


  });





















// let innerUrl;

// const companyButton = document.querySelector("#company");
// companyButton.onmousedown = function() {
//   div.innerText = "";
//   innerUrl = innerUrlCompany;
//   //mouseUp();
//   //console.log(innerUrl);
// };
  

// //console.log(innerUrl)

// const userButton = document.querySelector("#user");
// userButton.onmousedown = function() {
//   div.innerText = "";
//   innerUrl = innerUrlUser;
//   //mouseUp()
//   //console.log(innerUrl)
// };

// const phoneButton = document.querySelector("#phone");
// phoneButton.onmousedown = function() {
//   div.innerText = "";
//   innerUrl = innerUrlNumber;
//   //mouseUp()
//   //console.log(innerUrl)
// };
// console.log(innerUrl)
// // function mouseDown() {
// //   div.innerText = ""; 
  
// // };

// function mouseUp() {
// //div.innerText = "";
// console.log("Hi");
// };



// const listPromise = fetch(innerUrl);
// const objPromise = listPromise
//  .then((datajson) => datajson.json())
//  .then((data) => {
//      console.log(data);

//     arrKeys = Object.keys(creditCardData);
//     console.log("Keys:", arrKeys);

//     arrNames = Object.values(creditCardData);
//     console.log("Values:", arrNames);

//     arrKeysNames = Object.entries(creditCardData);
//     console.log("Key & Names:", arrKeysNames);

// //     for (i = 0; i <= arrKeysNames.length - 1; i++) {
// //       let p = document.createElement("p");

// //       p.innerText = `${arrKeys[i]}` + ": " + `\n ${arrNames[i]}  \n \n`;
// //       p.id = arrKeys[i];

// //       ul.appendChild(p);
// //     }
//});
// // form.appendChild(ul);