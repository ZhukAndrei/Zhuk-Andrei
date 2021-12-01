const count = "";
const inputChar = "";
const arrayRusVowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
function countVowels() {
  const str = this;
  if (inputChar == "") {
    return Array.from(str).filter((count) => "аеёиоуыэюя".includes(count))
      .length;
  }
  if (arrayRusVowels.includes(inputChar)) {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  } else {
    alert("Вы ввели недопустимое значение");
  }
}
String.prototype.countVowels = countVowels;
