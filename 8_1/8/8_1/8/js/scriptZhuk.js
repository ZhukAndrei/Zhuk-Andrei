let header = document.createElement("header");
header.className = "header";
document.body.append(header);
let nav = document.createElement("nav");
nav.className = "header_block";
nav.innerHTML = "COMPANY  LOGO";
// let a = document.createElement('a');
//  a.innerHTML = "href='#'";
//  li.appendChild(a);

let arr = ["Google", "Amazon", "eBay", "Onliner"];
// let arr = [
//     {name: Google, href = 'http://google.com'},
//     {name: Amazon, href = 'http://amazon.com'},
//     {name: eBay, href = 'http://ebay.com'},
//     {name: Onliner, href = 'http://onliner.by'}];

let arrHref = [
  "http://google.com",
  "http://amazon.com",
  "http://ebay.com",
  "http://onliner.by",
];

//let cont = document.querySelector(".header");
let ul = document.createElement("ul");
ul.className = "header_item";
for (i = 0; i <= arr.length - 1; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a"); //a
  a.innerText = arr[i]; //a
  a.href = arrHref[i]; //a
  //li.innerHTML = arr[i];
  //li.setAttribute('style', 'display: block;');
  li.className = "header_item_li";
  li.appendChild(a);
  ul.appendChild(li);
}
nav.appendChild(ul);
header.appendChild(nav);

//let p1 = document.createElement("p1");
//p1.className = "about_company body_text";
//p1.innerHTML = "О компании <br>";
//document.body.append(p1);

//  let a = document.getElementsByClassName('header_item_li');
//  for (let index = 0; index < array.length; index++) {
//      const element = array[index];
//      array[0].replaceWith = <a href = '.about_company'>О компании</a>;
//      array[1].innerHTML = <a href = '.catalogue'>О компании</a>;
//      array[2].innerHTML = <a href = '.news'>О компании</a>;
//      array[3].innerHTML = <a href = '.contacts'>О компании</a>;

//  }

//  console.log(a[i]);
// header_item_li.item[0].innerHTML = <a href = '.about_company'>О компании</a>;

//let p2 = document.createElement("p2");
//p2.className = "catalogue body_text";
//p2.innerHTML = "Каталог <br>";
//document.body.append(p2);

//let p3 = document.createElement("p3");
//p3.className = "news body_text";
//p3.innerHTML = "Новости <br>";
//document.body.append(p3);

//let p4 = document.createElement("p4");
//p4.className = "contacts body_text";
//p4.innerHTML = "Контакты <br>";
//document.body.append(p4);

// let a1 = document.createElement('a1');
//     a1.document.querySelector ('.about_company');
//     a1.innerHTML = "href='.about_company'";
//     li.appendChild(a1);
