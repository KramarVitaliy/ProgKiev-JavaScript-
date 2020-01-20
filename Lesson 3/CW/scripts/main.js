let count = +prompt('Enter size array');
let arr = new Array(count);

for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
  
}
let slicer = +prompt('Введите элемент который хотите вырезать');
arr.splice(slicer, 1);
arr.reverse();
let strArr = arr.join('&#9729;');
document.write(strArr);



