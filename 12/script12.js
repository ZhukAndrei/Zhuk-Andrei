const innerUrl =
  "https://random-data-api.com/api/business_credit_card/random_card";
//===
// {
//     "id":4944,
//     "uid":"ef52516b-336e-4d7b-891f-493b008246ad",
//     "credit_card_number":"1234-2121-1221-1211",
//     "credit_card_expiry_date":"2023-12-16",
//     "credit_card_type":"american_express"
// }
//=======
const form = document.createElement("form");
form.classList.add("form");
document.body.appendChild(form);

let ul = document.createElement("ul");
    ul.className = "form_item";

// let li = document.createElement("li");
//     li.className = "form_item_li";

console.log(document.body);
const listPromise = fetch(innerUrl);
const objPromise = listPromise
  .then((datajson) => datajson.json())
  .then((creditCardData) => {
    console.log(creditCardData);

    let arrLength = Array.from(Object.entries(creditCardData)).length;
    console.log("arr lenght: " + arrLength);

    arrKeys = Object.keys(creditCardData);
    console.log("Keys:", arrKeys);

    arrNames = Object.values(creditCardData);
    console.log("Values:", arrNames);

    arrKeysNames = Object.entries(creditCardData);
    console.log("Key & Names:", arrKeysNames);

    for (i = 0; i <= arrKeysNames.length - 1; i++) {
      let p = document.createElement("p");
      //let id = document.createElement("id");
      p.innerText = (`${arrKeys[i]}` + ": " + `\n ${arrNames[i]}  \n \n`);
      p.id = arrKeys[i];
      //li.className = "header_item_li";

      ul.appendChild(p);
      //ul.appendChild(li);
    }


    //let newArr =[];

//     Object.keys(creditCardData).forEach((element) => {
// if (Object.keys(creditCardData) !=="") {
//   Object.keys(creditCardData).element = element;
//   newArr.push(Object.keys(creditCardData)[element]);
//         console.log(newArr);
// }
//       })
    
    
    // for (let keys of ) {
    //   var arrKeys = `${keys}`;
    //   console.log("Keys:", arrKeys);
    // }

    // for (let value of Object.values(creditCardData)) {
    //   var arrNames = `${value}`;
    //   console.log("Values:", arrNames);
    // }

    // for (let value of Object.entries(creditCardData)) {
    //   var arrKeyNames = `${value}`;
    //   console.log("Key & Names:", arrKeyNames);
    //}

    //li.innerText = `${arrKeys}` + ":    " + `${arrNames.toUpperCase()}`;
    //li.id = `${arrKeys}`;

  });

form.appendChild(ul);
//ul.appendChild(p);
