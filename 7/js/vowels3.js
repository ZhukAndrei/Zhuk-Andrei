const count = prompt("Введите любую фразу на русском языке", "Привет!")
  .toString()
  .toLowerCase();
const inputChar = prompt("Введите гласную букву").toString().toLowerCase();
const arrayRusVowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
function countVowels(str) {
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
alert(countVowels(count));
