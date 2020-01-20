let a, b, result, message, login, A, B, figure, dolar, space, spaces, dolars;
let results = '';
let task = '';

task = +prompt('Введите номер задания');

switch (task) {
  case 1:
    document.writeln("<h1 style='text-align:center;'>Task 1</h1>");
    document.writeln("<p style='text-align:center;'>Переписать с использованием тернарных операторов</p>");
    a = +prompt("Введите a","");
    b = +prompt("Введите b", "");
    (a + b < 4) ? result = "<p style='text-align:center;'>Мало</p>" : result = "<p style='text-align:center;'>Много</p>";
    document.writeln(result);
    break;
  case 2:
    document.writeln("<h2 style='text-align:center;'>Task 2</h2>");
    document.writeln("<p style='text-align:center;'>Переписать с использованием нескольких тернарных операторов</p>");
    login = prompt('Enter login','');
    (login == 'Вася') ? message = '<p style="text-align:center;">Привет</p>' : (login == 'Директор') ? message = '<p style="text-align:center;">Здравствуйте</p>' : (login == '') ? message = '<p style="text-align:center;">Нет логина</p>' : message = '<p style="text-align:center;">" "</p>' ;
    document.writeln('<p>' + message + '</p>');
    break;
  case 3:
    document.writeln("<h1 style='text-align:center;'>Task 3</h1>");
    result = 0;
    alert('Введите два числа А и В. А должно быть меньше за В');
    A = +prompt('Число А');
    B = +prompt('Число В');
    if ( A < B){
      for ( let i = A; i < B; i++) {
        result += i;
      }
      document.writeln('<p style="text-align:center;">Сумма числового промежутка от А до В: ' + result + '</p>');
      document.write('Нечётные числа: ');
      result = '';
      for (let i = A; i < B; i++) {
        if (i % 2 != 0) {
          document.write(i + ',');
        }
        
      }
    } else {
      document.writeln('Число A больше или равно числу B');
    }
    break;
  case 4:
    figure = prompt('Какую фигуру вы хотите нарисовать(Прямоугольник, прямоугольный треугольник, равносторонний треугольник)?');
    a = +prompt('Высота');

    switch (figure) {
      case 'Прямоугольник':   
      case 'прямоугольник':
        b = +prompt('Ширина');
        dolar = '$';
        for (let i = 0; i < a; i++) {
          for (let j = 0; j < b; j++) {
            document.writeln(dolar);
            
          }
          document.writeln('<br>');
        }
        break;
      case 'Прямоугольный треугольник':
      case 'прямоугольный треугольник':
        dolar = '$';
        for (let i = 0; i < a; i++) {
          results += dolar;
          document.writeln(results);
            
          document.writeln('<br>');
        }
        break;
      case 'Равносторонний треугольник': 
      case 'равносторонний треугольник':
        for (let i = 1; i <= a; i++){
          space = a - i;
          spaces = '';
          for(let j = 0; j < space; j++){
            spaces += " ";
          }
          dolar = i * 2 - 1;
          dolars = '' ;
          for(let x = 0; x < dolar; x++){
            dolars += "$";
          }
          document.writeln('<pre style="display: inline-block; margin: 0;">' + spaces + '</pre>' + dolars + '<pre style="display: inline-block; margin: 0;">' + spaces + '</pre>' + '<br>');
        }
        break;
      case 'Ромб':
      case 'ромб':
        for (let i = 1; i <= a / 2; i++){
          space = a - i;
          spaces = '';
          for(let j = 0; j < space; j++){
            spaces += " ";
          }
          dolar = i * 2 - 1;
          dolars = '' ;
          for(let x = 0; x < dolar; x++){
            dolars += "$";
          }
          document.writeln('<pre style="display: inline-block; margin: 0;">' + spaces + '</pre>' + dolars + '<pre style="display: inline-block; margin: 0;">' + spaces + '</pre>' + '<br>');
        }
        for (let i = a / 2 - 1; i > 0; i--){
          space = a - i;
          spaces = '';
          for(let j = 0; j < space; j++){
            spaces += " ";
          }
          dolar = i * 2 - 1;
          dolars = '' ;
          for(let x = 0; x < dolar; x++){
            dolars += "$";
          }
          document.writeln('<pre style="display: inline-block; margin: 0;">' + spaces + '</pre>' + dolars + '<pre style="display: inline-block; margin: 0;">' + spaces + '</pre>' + '<br>');
        }
        break;
      default:
        document.writeln('Вы не правильно указали фигуру или не указали вовсе' + '<br>');
        break;
    }
    break;

  default:
    alert('Номер задания не указан либо указан неправильно');
    break;
}

