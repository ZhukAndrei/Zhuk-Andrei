const innerUrl =
  "https://random-data-api.com/api/business_credit_card/random_card";

const form = document.createElement("form");
form.classList.add("form");
document.body.appendChild(form);

let ul = document.createElement("ul");
ul.className = "form_item";
//console.log(document.body);

const listPromise = fetch(innerUrl);
const objPromise = listPromise
  .then((datajson) => datajson.json())
  .then((creditCardData) => {
    //console.log(creditCardData);

    arrKeys = Object.keys(creditCardData);
    //console.log("Keys:", arrKeys);

    arrNames = Object.values(creditCardData);
    //console.log("Values:", arrNames);

    arrKeysNames = Object.entries(creditCardData);
    //console.log("Key & Names:", arrKeysNames);

    for (i = 0; i <= arrKeysNames.length - 1; i++) {
      let p = document.createElement("p");

      p.innerText = `${arrKeys[i]}` + ": " + `\n ${arrNames[i]}  \n \n`;
      p.id = arrKeys[i];

      ul.appendChild(p);
    }
  });
form.appendChild(ul);
