//var getVolwes = prompt("Введите любую фразу на русском языке", "Привет!");
//lowerString = getVolwes.toLowerCase();
//const myCharacterSplit = [lowerString.split("")];

//alert(myCharacterSplit);

//const countVowels = getVolwes => Array.from(getVolwes).filter(letter => 'и'.includes(letter)).length;
 // alert(countVowels());
 let count = prompt("Введите любую фразу на русском языке", "Привет!");
 const countVowels = str => Array.from(str).filter(count => 'аеёиоуыэюя'.includes(count)).length;

alert(countVowels(count));

 




// const treeSum = (arr) => {
//     let summa = 0;
//     arr.forEach((element) => {
//         let arrayRusVowels = [а, е, ё, и, о, у, ы, э, ю, я];
//       if (typeof element === arrayRusVowels [i]) {
//         summa += element;
//       } else {
//         summa += treeSum(element);
//         return summa;
//       }
//     });
//     return summa;
// };
// alert("Сумма гласных введённой Вами строки равна: " + treeSum(ARRAY));
//console.log(lowerString);
//alert( lowerString );
//
//let arrayRusVowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
