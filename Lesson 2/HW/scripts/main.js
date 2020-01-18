// document.writeln("<p>Task 1</p>");
// let a, b, result;
// a = +prompt("enter a","");
// b = +prompt("enter b", "");
// (a + b < 4) ? result = "Мало" : result = "Много";
// document.writeln(result);
// //                                    Task 2
// document.writeln("<p>Task 2</p>");
// let message, login;
// login = prompt('Enter login','');
// (login == 'Вася') ? message = 'Привет' : (login == 'Директор') ? message = 'Здравствуйте' : (login == '') ? message = 'Нет логина' : message = "" ;
// document.writeln('<p>' + message + '</p>');
// //                                    Task 3
// document.writeln("<p>Task 3</p>");
// let A, B;
// result = 0;
// alert('Введите два числа А и В. А должно быть меньше за В');
// A = +prompt('Число А');
// B = +prompt('Число В');
// if ( A < B){
//   while ( B > 0) {
//     result += B;
//     B--; 
//   }
//   document.writeln('Summ: ' + result);
// } else {
//   document.writeln('Число A больше числа B');
// }
//                                    Task 4
let figure, ampersand;
let a, b, result = '';


figure = prompt('Какую фигуру вы хотите нарисовать(Прямоугольник, прямоугольный треугольник, равносторонний треугольник)?');
a = +prompt('Высота');
b = +prompt('Ширина');

switch (figure) {
  case 'Прямоугольник':   
  case 'прямоугольник':
    ampersand = '&';
    for (let i = 0; i < a; i++) {
      for (let j = 0; j < b; j++) {
        document.writeln(ampersand);
        
      }
      document.writeln('<br>');
    }
    break;
  case 'Прямоугольный треугольник':
  case 'прямоугольный треугольник':
    ampersand = '&';
    for (let i = 0; i < a; i++) {
      result += ampersand;
      document.writeln(result);
        
      document.writeln('<br>');
    }
    break;
  case 'Равносторонний треугольник': 
  case 'равносторонний треугольник':
    let space, spaces, ampersands;
    for (let i = 1; i <= a; i++){
      space = a - i;
      spaces = '';
      for(let j = 0; j < space; j++){
        spaces += "#";
      }
      ampersand = i * 2 - 1;
      ampersands = '' ;
      for(let x = 0; x < ampersand; x++){
        ampersands += "&";
      }
      document.writeln(spaces + ampersands + spaces + '<br>');
    }
    break;
  case 'Ромб':
  case 'ромб':

    break;
  default:
    break;
}