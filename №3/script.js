let array = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
const treeSum = (arr) => {
  let summa = 0;
  arr.forEach((element) => {
    if (typeof element === "number") {
      summa += element;
    } else {
      summa += treeSum(element);
      return summa;
    }
  });
  return summa;
};
alert("Сумма элементов массива: " + treeSum(array));
