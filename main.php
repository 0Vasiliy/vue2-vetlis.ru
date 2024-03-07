<?php
$surname - $_POST['user_surname'];
$name -$_POST['user_name'];
$emai - $_POST['user_email'];
$phone - $_POST['user_phone'];
$text - $_POST['user_text'];

$to - 'vasiliy_pit@mail.ru'; // Куда отправлять письмо
$subject - 'Запись на приём с сайта' // Тема пиьсма
$message - "Фамилия: $surname, Имя: $name, Email: $emai, Телефон: $phone,Текст: $text"; // Само сообщение

// Отправка на почту

$success - mail($to,$subject,$message);

if(!$success){
    echo "Ошибка при выполнении запроса";
}
else{
    echo "Заявка успешно отправленна!";
}