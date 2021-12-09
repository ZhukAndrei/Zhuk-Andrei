const constUL = document.getElementById("ulList");
const constLI = document.getElementsByTagName("li");
const div = document.getElementsByTagName("div");

constUL.onclick = function (event) {
  if (event.ctrlKey || event.metaKey) {
    severalSelect(event);
  }
  if (event.shiftKey) {
    singleSelect(event.target);
  }
  if ((event.ctrlKey && event.shiftKey) || (event.metaKey && event.shiftKey)) {
    cancelSelect(event.target);
  }
};

function singleSelect(li) {
  let select = document.querySelectorAll(".background");
  for (let elem of select) {
    elem.classList.remove("background");
  }
  li.classList.add("background");
}

function severalSelect(event) {
  event.target.className = "background";
}

function cancelSelect(li) {
  let select = document.querySelectorAll(".background");
  for (let elem of select) {
    elem.classList.remove("background");
  }
  li.classList.remove("background");
}
