//var getVolwes = prompt("Введите любую фразу на русском языке", "Привет!");
//lowerString = getVolwes.toLowerCase();
//const myCharacterSplit = [lowerString.split("")];

//alert(myCharacterSplit);

//const countVowels = getVolwes => Array.from(getVolwes).filter(letter => 'и'.includes(letter)).length;
// alert(countVowels());
// let count = prompt("Введите любую фразу на русском языке", "Привет!").toLowerCase();
// let inputChar;
//     inputChar = prompt("Введите гласную букву").toLowerCase();
//     if (inputChar != ("а" || "е" || "ё" || "и" || "о" || "у" || "ы" || "э" || "ю" || "я")) {
//          alert("Вы ввели недопустимое значение");}

/*function countVowels(str) {
   
         
    } else {
      countVowels = str => Array.from(str).filter(count => 'аеёиоуыэюя'.includes(count)).length;
alert(countVowels(count));
    }
  }   */
// } else {










//alert(countVowels(count));







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



var count = prompt("Введите любую фразу на русском языке", "Привет!").toString().toLowerCase();
inputChar = prompt("Введите гласную букву").toString().toLowerCase();
  function countVowels(str) {
    if (inputChar == '') {
    return Array.from(str).filter(count => 'аеёиоуыэюя'.includes(count)).length;
  } if (inputChar === 'а') {
    return Array.from(str).filter(count => 'а'.includes(count)).length;
  } if (inputChar === 'е') {
    return Array.from(str).filter(count => 'е'.includes(count)).length;
  } if (inputChar === 'ё') {
    return Array.from(str).filter(count => 'ё'.includes(count)).length; 
  } if (inputChar === 'и') {
    return Array.from(str).filter(count => 'и'.includes(count)).length;
  } if (inputChar === 'у') {
    return Array.from(str).filter(count => 'у'.includes(count)).length;
  } if (inputChar === 'о') {
    return Array.from(str).filter(count => 'о'.includes(count)).length; 
  } if (inputChar === 'ы') {
    return Array.from(str).filter(count => 'ы'.includes(count)).length; 
  } if (inputChar === 'э') {
    return Array.from(str).filter(count => 'э'.includes(count)).length;
  } if (inputChar === 'ю') {
    return Array.from(str).filter(count => 'ю'.includes(count)).length;
  } if (inputChar === 'я') {
    return Array.from(str).filter(count => 'я'.includes(count)).length; 
    } else {
      alert("Вы ввели недопустимое значение");
      }
    
  // } else if (inputChar === "и") {
  //    Array.from(str).filter(count => String(inputChar()).includes(count)).length;
  // } else {
  //   alert(countVowels(count));
  
   };
   alert(countVowels(count));
  // inputChar === 'е' ||
  // inputChar === 'ё' ||
  // inputChar === 'и' ||
  // inputChar === 'о' ||
  // inputChar === 'у' ||
  // inputChar === 'ы' ||
  // inputChar === 'э' ||
  // inputChar === 'ю' ||
  // inputChar === 'я')  {
    //   } else {
    // const countVowels = str => Array.from(str).filter(count => inputChar.includes(count)).length
  //}
//const countVowels = str => Array.from(str).filter(count => 'аеёиоуыэюя'.includes(count)).length
  //
    
    //} else if (inputChar === 'а', 
    // inputChar === 'е',
    // inputChar === 'ё',
    // inputChar === 'и',
    // inputChar === 'о',
    // inputChar === 'у',
    // inputChar === 'ы',
    // inputChar === 'э',
    // inputChar === 'ю',
    // inputChar === 'я') { 
    //   Array.from(str).filter(count => inputChar.includes(count)).length;
  //} else {
  //alert("Вы ввели недопустимое значение");
  //};
//}















//if (inputChar != ("а" || "е" || "ё" || "и" || "о" || "у" || "ы" || "э" || "ю" || "я")) {
 // alert("Вы ввели недопустимое значение");
