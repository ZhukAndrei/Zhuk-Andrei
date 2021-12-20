const innerUrlCompany =
  "https://random-data-api.com/api/company/random_company";
const innerUrlUser = "https://random-data-api.com/api/users/random_user";
const innerUrlNumber =
  "https://random-data-api.com/api/phone_number/random_phone_number";

document.querySelector("div").innerText =
  "Please, click the button \n to get the information \n you need..";

const div = document.querySelector("div");
const companyButton = document.querySelector("#company");
const userButton = document.querySelector("#user");
const phoneButton = document.querySelector("#phone");

company.addEventListener("click", () => {
  div.innerText = "";
  fetch(innerUrlCompany)
    .then((datajson) => datajson.json())
    .then((data) => {
      console.log("Name company: " + `${data.business_name}`);
      div.innerText = "Name company: \n" + `${data.business_name}`;
    });
});

user.addEventListener("click", () => {
  div.innerText = "";
  fetch(innerUrlUser)
    .then((datajson) => datajson.json())
    .then((data) => {
      div.innerText = "User name: \n" + `${data.username}`;
    });
});

phone.addEventListener("click", () => {
  div.innerText = "";
  fetch(innerUrlNumber)
    .then((datajson) => datajson.json())
    .then((data) => {
      div.innerText = "Phone number: \n" + `${data.phone_number}`;
    });
});
