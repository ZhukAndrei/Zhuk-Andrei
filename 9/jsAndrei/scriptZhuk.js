let header = document.createElement("header");
header.className = "header";
document.body.append(header);

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
nav.appendChild(ul);
header.appendChild(nav);
