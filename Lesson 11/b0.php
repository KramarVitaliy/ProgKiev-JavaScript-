<?php
// несколько получателей
$to .= 'kramarenko.199@gmail.com';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['name1'] . ' отправил вам письмо:<br />' . $_POST['phone1'] . '<br />
Связяться с ним можно по email <a href="mailto:' . $_POST['email1'] . '">' . $_POST['email1'] . '</a>'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Иван <Ivan@example.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name1'] . '<' . $_POST['email1'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>