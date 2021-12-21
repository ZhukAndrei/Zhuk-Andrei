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

const butSubmit = document.createElement('button');
fieldset.appendChild(butSubmit);
butSubmit.innerText = 'Submit';
butSubmit.type = "submit";
butSubmit.id = 'butSubmit';

//======
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
}

.inputPassword {
    width: 390px; 
    height: 30px;   
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
