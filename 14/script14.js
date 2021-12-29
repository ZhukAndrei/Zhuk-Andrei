const form = document.createElement("form");
document.body.appendChild(form);
form.id = "responseForm";

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
inputLogin.id = "inputLogin";
let h2Login = document.createElement("h2");
h2Login.id = "h2Login";
pLogin.insertAdjacentElement("beforeend", h2Login);
h2Login.style.display = "none";

const pPassword = document.createElement("pPassword");
fieldset.appendChild(pPassword);
pPassword.classList.add("pLogin");
pPassword.innerHTML = "<b>Your password:</b><br>";
const inputPassword = document.createElement("input");
pPassword.insertAdjacentElement("beforeend", inputPassword);
inputPassword.id = "inputPassword";
let h2Password = document.createElement("h2");
h2Password.id = "h2Password";
pPassword.insertAdjacentElement("beforeend", h2Password);
h2Password.style.display = "none";

const butSubmit = document.createElement("button");
fieldset.appendChild(butSubmit);
butSubmit.innerText = "Submit";
butSubmit.type = "submit";
butSubmit.id = "butSubmit";

// ===== login and password verification
butSubmit.addEventListener("click", () => {
  // ===== login verification
  const validLoginLenght = inputLogin.value.length;
  if (validLoginLenght >= 5) {
    alert("Login введен правильно.");
    localStorage.setItem("login", JSON.stringify(inputLogin.value));
  } else {
    alert("Login введен НЕ ПРАВИЛЬНО. Введите не менее 5 символов.");
  }

  // ===== password verification
  const num = "0123456789";
  const vowels = "abcdefghijklmnopqrstuvwxyz";
  let validPasswordLength = inputPassword.value.length;
  let arrInputPassword = Array.from(inputPassword.value.toLowerCase());

  validNumberSum = 0;
  arrInputPassword.forEach((element) => {
    if (num.search(element) != -1) {
      validNumberSum++;
    }
  });

  validVowelsSum = 0;
  arrInputPassword.forEach((element) => {
    if (vowels.search(element) != -1) {
      validVowelsSum++;
    }
  });

  if (validNumberSum > 0 && validVowelsSum > 0 && validPasswordLength >= 5) {
    form.style.display = "none";
    alert("ПАРОЛЬ ВВЕДЕН ВЕРНО");
    localStorage.setItem("password", JSON.stringify(inputPassword.value));
  } else {
    alert(
      "НЕ ВЕРНО ВВЕДЕН ПАРОЛЬ. \n Пароль должен сожержать  не менее \n одной цифры и одной буквы. Общая длина пароля \n должна составлять не менее пяти символов"
    );
  }

  if (
    localStorage.getItem("login") === null ||
    localStorage.getItem("password") === null
  ) {
    alert("Не корректно введен логин и/или пароль");
  } else {
    responseForm.style.display = "none";
    var readLogin = localStorage.getItem("login");
    var readPassword = localStorage.getItem("password");
    alert(`Thanks!\n Your login: ${readLogin}\n
    Your password: ${readPassword}`);
    responseForm.style.display = "block";

    localStorage.clear();
  }
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

#inputLogin {
width: 390px; 
height: 30px;  
border-radius: 5px;
border: 1px solid;
}

#inputPassword {
    width: 390px; 
    height: 30px; 
    
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
