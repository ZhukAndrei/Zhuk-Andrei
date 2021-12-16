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
console.log(document.body);
const listPromise = fetch(innerUrl);
const objPromise = listPromise
  .then((datajson) => datajson.json())
  .then((creditCardData) => {
    console.log(creditCardData);

    for (let keys of Object.keys(creditCardData)) {
      let arrKeys = keys;
      console.log(arrKeys);
    }
    for (let value of Object.values(creditCardData)) {
      let arrNames = value;
      console.log(arrNames);
    }

    //    let ul = document.createElement("ul");
    //    ul.className = "form_item";
    //    let li = document.createElement("li");
    //   a.innerText = arr[i];
    //   a.href = arrHref[i];
    //   li.className = "form_item_li";
    //   li.appendChild(a);
    //   ul.appendChild(li);

    //console.log(creditCardData)
  });
