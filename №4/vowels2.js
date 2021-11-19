var getVolwes = prompt("Введите любую фразу на русском языке", "Привет!");
lowerString = getVolwes.toLowerCase();
const myCharacterSplit = [lowerString.split("")];
inputChar = prompt("Введите гласную букву").toString().toLowerCase();
arrayRusVowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
arrayRusVowels.filter(function(element) {
    function countVowels(str) {
        if (inputChar == "") {
          return Array.from(str).filter((count) => "аеёиоуыэюя".includes(count))
            .length;
        }
        if (inputChar === element) {
            return Array.from(str).filter((count) => element.includes(count))
            .length;
        } else {
            alert("Вы ввели недопустимое значение");
          }
        }
});
alert( countVowels(count) );
/*var count = prompt("Введите любую фразу на русском языке", "Привет!")
  .toString()
  .toLowerCase();
  inputChar = prompt("Введите гласную букву").toString().toLowerCase();
  
  arrayRusVowels.forEach(element => {
      i = 0, i < arrayRusVowels.element, i++;
return newarray += arrayRusVowels[i];
              });
  function countVowels(str) {
    if (inputChar == "") {
      return Array.from(str).filter((count) => "аеёиоуыэюя".includes(count))
        .length;
    }
  };
  console.log(count);
  [1,2,3,4,4,4,5,4,1,5,4].filter(item => item === 4).length; */