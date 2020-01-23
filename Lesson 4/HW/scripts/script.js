let array1;
let count, task, userAge;

task = +prompt("Введите номер задания. ");

switch (task) {
  case 1:
    document.write('<p style="font-size: 3em; text-align: center;">Task 1</p>');
    count = +prompt('Введите количество элементов в массиве.')

    array1 = new Array(count);

    document.write('<p style="font-size: 2em;">Первый массив: </p>');
    for (let i = 0; i < array1.length; i++) {
      array1[i] = i;
      document.write(array1[i] + ', ');
    }

    function fn(element, index, array) {
      document.write(element + 2 + ', ');
    }

    function map(array, callBackFunction) {
      array.forEach(callBackFunction);
    }
    document.write('<p style="font-size: 2em;">Добавим к каждому елементу число 2</p>');
    document.write('<p style="font-size: 2em;">Второй массив: </p>');
    map(array1, fn);
    break;
  case 2:
    document.write('<p style="font-size: 3em; text-align: center;">Task 2</p>');

    userAge = +prompt('Ваш возраст?');

    function checkAge(age) {
      let adult = (age >= 18) ? true : confirm('Родители разрешили?');
      return adult;
    }

    document.write(checkAge(userAge));
    break;

  default:
    if (task == 0) {
      document.write('Вы не указали задачу');
      break;
    } else {
      document.write('Указаной задачи не существует');
      break;
    }
    
}

