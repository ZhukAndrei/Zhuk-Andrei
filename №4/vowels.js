var count = prompt("Введите любую фразу на русском языке", "Привет!")
  .toString()
  .toLowerCase();
  inputChar = prompt("Введите гласную букву").toString().toLowerCase();
  arrayRusVowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  rusVovels = "";
  function countVowels(str) {
  if (inputChar == "") {
    return Array.from(str).filter((count) => "аеёиоуыэюя".includes(count))
      .length;
  }
  if (inputChar === "а") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "е") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "ё") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "и") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "у") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "о") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "ы") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "э") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "ю") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  }
  if (inputChar === "я") {
    return Array.from(str).filter((count) => inputChar.includes(count)).length;
  } else {
    alert("Вы ввели недопустимое значение");
  }
}
alert(countVowels(count));
