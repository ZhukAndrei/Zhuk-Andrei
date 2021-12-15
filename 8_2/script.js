let header = document.createElement("header");
header.className = "header";
document.body.append(header);
let aside = document.createElement("aside");

let nav = document.createElement("nav");
nav.className = "header_block";
nav.innerHTML = "COMPANY  LOGO";

let arr = ["Google", "Amazon", "eBay", "Onliner"];

let arrHref = [
  "http://google.com",
  "http://amazon.com",
  "http://ebay.com",
  "http://onliner.by",
];
const asideArray = [
  { name: "Google", href: "http://google.com" },
  { name: "Amazon", href: "http://amazon.com" },
  { name: "Yandex", href: "http://yandex.com" },
  { name: "Vk", href: "https://vk.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Youtube", href: "https://youtube.com" },
  { name: "Bing", href: "https://bing.com" },
  { name: "Yahoo", href: "https://yahoo.com" },
];
let nav2 = document.createElement("nav");
let ul = document.createElement("ul");
ul.className = "header_item";
for (i = 0; i <= arr.length - 1; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerText = arr[i];
  a.href = arrHref[i];
  li.className = "header_item_li";
  li.appendChild(a);
  ul.appendChild(li);
}
let ul2 = document.createElement("ul");
class Aside {
  constructor(name, href) {
    this.name = name;
    this.href = href;
  }
  funcAside() {
    let a = document.createElement("a");
    a.href = this.href;
    a.innerText = this.name;
    let li = document.createElement("li");
    li.appendChild(a);
    ul2.appendChild(li);
    return ul2;
  }
}
asideArray.forEach((item) => {
  item = new Aside(item.name, item.href);
  ul2 = item.funcAside();
});
nav2.appendChild(ul2);
aside.appendChild(nav2);
document.body.appendChild(aside);
nav.appendChild(ul);
header.appendChild(nav);

let footer = document.createElement("footer");
footer.className = "footer";
footer.style.background = "#0A0909";
footer.style.maxWidth = "1500px";
footer.style.height = "350px";
footer.style.display = "flex";
footer.style.flexGrow = "0px";
footer.style.flexShrink = "0px";
footer.style.flexBasis = "auto";
footer.style.color = "#FFFFFF";
footer.style.fontFamily = "Fuzzy Bubbles, cursive";
footer.style.justifyContent = "space-around";
console.log(footer);

let columnOneNav = document.createElement("nav");
columnOneNav.className = "columnOne_list";
columnOneNav.style.display = "flex";
columnOneNav.style.alignItems = "center";

let columnOneUl = document.createElement("ul");
columnOneUl.className = "columnOne_links";
columnOneUl.innerHTML = "Follow us:";
columnOneUl.style.color = "#F50A0A";
columnOneUl.style.fontSize = "23px";
columnOneUl.style.paddingLeft = "0px";
columnOneUl.style.textDecoration = "none";

const arrayFooterOne = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "Tiktok", href: "https://www.tiktok.com/" },
];
for (i = 0; i < arrayFooterOne.length; i++) {
  let columnOneLi = document.createElement("li");
  columnOneLi.className = "columnOne_social-lists";
  columnOneLi.style.marginBottom = "5px";
  columnOneLi.style.listStyleType = "none";

  let columnOneA = document.createElement("a");
  columnOneA.className = "columnOne_social-link";
  columnOneA.style.color = "#FFFFFF";
  columnOneA.style.fontFamily = "Fuzzy Bubbles, cursive";
  columnOneA.style.fontSize = "20px";
  columnOneA.style.textDecoration = "none";

  columnOneA.innerText = arrayFooterOne[i].name;
  columnOneA.href = arrayFooterOne[i].href;

  columnOneLi.appendChild(columnOneA);
  columnOneUl.appendChild(columnOneLi);
}
columnOneNav.appendChild(columnOneUl);
footer.appendChild(columnOneNav);
document.body.append(footer);

let columnTwoNav = document.createElement("nav");
columnTwoNav.className = "columnTwo_list";
columnTwoNav.style.display = "flex";
columnTwoNav.style.alignItems = "center";

let columnTwoUl = document.createElement("ul");
columnTwoUl.className = "columnTwo_links";
columnTwoUl.innerHTML = "Call us or write";
columnTwoUl.style.listStyleType = "none";
columnTwoUl.style.color = "#F50A0A";
columnTwoUl.style.fontSize = "23px";
columnTwoUl.style.paddingLeft = "0px";

const arrayFooterTwo = [
  { name: "+78 (892) 123-45-67", href: "tel:+788921234567" },
  { name: "murzik@puchkin.be", href: "mailto:murzik@puchkin.be" },
];
for (i = 0; i < arrayFooterTwo.length; i++) {
  let columnTwoli = document.createElement("li");
  let columnTwoA = document.createElement("a");
  columnTwoA.className = "columnTwo_phone_maile-link";
  columnTwoA.style.color = "#FFFFFF";
  columnTwoA.style.fontFamily = "Fuzzy Bubbles, cursive";
  columnTwoA.style.fontSize = "20px";
  columnTwoA.style.textDecoration = "none";

  columnTwoA.innerText = arrayFooterTwo[i].name;
  columnTwoA.href = arrayFooterTwo[i].href;

  columnTwoli.appendChild(columnTwoA);
  columnTwoUl.appendChild(columnTwoli);
}
columnTwoNav.appendChild(columnTwoUl);
footer.appendChild(columnTwoNav);

let columnThreeNav = document.createElement("nav");
columnThreeNav.className = "columnThree_list";
columnThreeNav.style.display = "flex";
columnThreeNav.style.alignItems = "center";
console.log(columnThreeNav);
let columnThreeUl = document.createElement("ul");
columnThreeUl.className = "columnThree_links";
columnThreeUl.innerHTML = "Go back to:";
columnThreeUl.style.color = "#F50A0A";
columnThreeUl.style.fontSize = "23px";
columnThreeUl.style.paddingLeft = "0px";
console.log(columnThreeUl);

const arrayFooterThree = [
  { name: "Home", href: "./home.html" },
  { name: "What we do", href: "./what_we_do.html" },
  { name: "About us", href: "./about_us.html" },
  { name: "Contacts", href: "./contacts.html" },
];
for (i = 0; i < arrayFooterThree.length; i++) {
  let columnThreeLi = document.createElement("li");
  columnThreeLi.className = "columnThree_page-lists";
  columnThreeLi.style.listStyleType = "none";
  columnThreeLi.style.marginBottom = "5px";

  let columnThreeA = document.createElement("a");
  columnThreeA.className = "columnThree_page-link";
  columnThreeA.style.color = "#FFFFFF";
  columnThreeA.style.fontFamily = "Fuzzy Bubbles, cursive";
  columnThreeA.style.fontSize = "20px";
  columnThreeA.style.textDecoration = "none";

  columnThreeA.innerText = arrayFooterThree[i].name;
  columnThreeA.href = arrayFooterThree[i].href;

  columnThreeLi.appendChild(columnThreeA);
  columnThreeUl.appendChild(columnThreeLi);
}
columnThreeNav.appendChild(columnThreeUl);
footer.appendChild(columnThreeNav);

let copyrightSpan = document.createElement("span");
copyrightSpan.className = "copyright";
copyrightSpan.innerHTML = "Copyright ©, 2021";
columnTwoUl.append(copyrightSpan);