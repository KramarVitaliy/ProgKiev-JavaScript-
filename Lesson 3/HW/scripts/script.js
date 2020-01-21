const arr = ["Джаз", "Блюз"];
let middle;

document.write("Начальный массив: " + arr + "<br>");
arr.push("Рок-н-ролл");
document.write("Добавлен Рок-н-ролл: " + arr + "<br>");
middle = arr.length / 2;
arr.splice(middle, 1 , "Классика");
document.write("Удаляем элемент в середине и заменяем на Классика: " + arr + "<br>");
let removed = arr.splice(0, 1);
document.write("Удаляем первый элемент массива: " + removed + "<br>");
arr.splice(0, 0, "Рэп", "Регги");
document.write("Добавляем Рэп и Регги в начало массива: " + arr);