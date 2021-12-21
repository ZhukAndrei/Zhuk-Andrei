const div = document.createElement('div');
document.body.appendChild(div);
const fieldset = document.createElement('fieldset');
div.appendChild(fieldset);
document.querySelector('fieldset').classList.add('fieldsetClass');
const style = document.createElement('style');
document.head.insertAdjacentElement('beforeend', style);
style.innerHTML =`
.fieldsetClass {
width: 300px;
height: 100px;
border-radius: 5px;
background-color: rgb(245, 245, 245);
}`
const myLegend = document.createElement('legend');
myLegend.innerText = 'LogIn form';
fieldset.appendChild(myLegend);
const inputLogin = document.createElement('input');
// const inputPassword = document.createElement('input');
// fields.appendChild(inputLogin);
inputLogin.type = text;
//inputLogin.innerHTML = ("LogIn :");
//fields.insertAdjacentElement('beforeend', inputPassword);

