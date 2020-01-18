let x = 6, y = 14, z = 4;

x += y - x++ * z;
document.writeln("<p>x += y - x++ * z;  ответ: " + x + "</p>");
document.writeln("x(6) * z(4) = 24<br>y(14) - (24) = -10<br>x(6)+(-10)=(-4)<br>x++<hr>");

x = 6; y = 14; z = 4;
z = --x - y * 5;
document.writeln("<p>z = --x - y * 5;  ответ: " + z + "</p>");
document.writeln("--x(6) = 5<br>y(14) * 5 = 70<br>5 - 70 = -65<hr>");

x = 6; y = 14; z = 4;
y /= x + 5 % z;
document.writeln("<p>y /= x + 5 % z;  ответ: " + y + "</p>");
document.writeln("5 % z(4) = 1<br>x(6) + 1 = 7<br>y(14) / 7 = 2<hr>");

x = 6; y = 14; z = 4;
a = z - x++ + y * 5;
document.writeln("<p>a = z - x++ + y * 5;  ответ: " + a + "</p>");
document.writeln("y(14) * 5 = 70<br>z(4) - x(6) = -2<br>-2 + 70 = 68<br>x++<hr>");

x = 6; y = 14; z = 4;
x = y - x++ * z;
document.writeln("<p>x = y - x++ * z; ответ: " + x + "</p>");
document.writeln("x(6) * z(4) = 24<br>y(14) - 24 = -10<br>x++<hr>");
