const form = document.createElement("form");
document.body.appendChild(form);

const div = document.createElement("div");
form.appendChild(div);

const fieldset = document.createElement("fieldset");
div.appendChild(fieldset);

document.querySelector("fieldset").classList.add("fieldsetClass");

const style = document.createElement("style");
document.head.insertAdjacentElement("beforeend", style);

const myLegend = document.createElement("legend");
myLegend.innerText = "LogIn form";
fieldset.appendChild(myLegend);

const pLogin = document.createElement("pLogin");
fieldset.appendChild(pLogin);
pLogin.classList.add("pLogin");
pLogin.innerHTML = "<b>Your login:</b><br>";
const inputLogin = document.createElement("input");
pLogin.insertAdjacentElement("beforeend", inputLogin);
inputLogin.classList.add("inputLogin");

const pPassword = document.createElement("pPassword");
fieldset.appendChild(pPassword);
pPassword.classList.add("pLogin");
pPassword.innerHTML = "<b>Your password:</b><br>";
const inputPassword = document.createElement("input");
pPassword.insertAdjacentElement("beforeend", inputPassword);
inputPassword.classList.add("inputPassword");

const butSubmit = document.createElement("button");
fieldset.appendChild(butSubmit);
butSubmit.innerText = "Submit";
butSubmit.type = "submit";
butSubmit.id = "butSubmit";

// ===== login verification
butSubmit.addEventListener("click", () => {
  const validLenght = inputLogin.value.length;
  if (validLenght >= 5) {
    alert("Login введен правильно.");
  } else {
    alert("Login введен НЕ ПРАВИЛЬНО. Введите не менее 5 символов.");
  }
});

//===== password verification
inputPassword.addEventListener("blur", (event) => {
  let enterPassword = event.target.value;
  const validChar = Array.from(enterPassword).toLowerCase(enterPassword);
  const validNumber = validChar;
  validNumberSum = 0;
  const num = "0123456789";
  validNumber.forEach((element) => {
    if (num.search(element) != -1) {
      validNumberSum++;
      console.log(validNumberSum);
    }
  });

  console.log(validChar);
  const vowels = "abcdefghijklmnopqrstuvwxyz";
  validCharSum = 0;
  validChar.forEach((element) => {
    if (vowels.search(element) != -1) {
      validCharSum++;
      console.log(validCharSum);
    }
  });
  if (validNumber == true && (validChar = true)) {
    alert("правильно");
  } else {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("НЕ правильно");
    });
  }
  //console.log(enterPassword)
  console.log(validLenght);
  console.log(validNumber);
});

//====== CSS
style.innerHTML = `
.fieldsetClass {
width: 400px;
height: 170px;
border-radius: 5px;
background-color: rgb(245, 245, 245);
}

.pLogin {
    margin-block-start: 0em;
    }

.inputLogin {
width: 390px; 
height: 30px;  
border-radius: 5px;
border: 1px solid;
}

.inputPassword {
    width: 390px; 
    height: 30px; 
    -webkit-text-security: disc;
    font-family: caption;
    border-radius: 5px;
    border: 1px solid;
    }
 
#butSubmit {
    font-size: 1.5em;
    width: 398px; 
    height: 40px;
    margin-top: 0.4em;
    background-color: lightgreen;
    border-radius: 5px;
    cursor: pointer;
    border: none;

}`;
