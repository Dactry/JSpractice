// alert('Hello');

/* let a = +prompt('Введите первое значение');
let b = +prompt('Введите второе значение');

alert (a*b); */

/* let userName = prompt('Введите Ваше имя!');
let firstName = prompt('Введите Вашу фамилию!');
let age = +prompt('Введите Ваш год рождения!', '1999');

let userAge = 2021 - age;

alert('Привет, ' + userName + ' ' + firstName + '. Ваш возраст ' + userAge + ' то ли лет, то ли года, то ли год, хз!)');
 */

let week = prompt('Введите значение от 1-7');

/* if (week == '1') {
    alert('Понедельник');
}
    else if (week == '2') {
        alert('Вторник');
    }
    else if (week == '3') {
        alert('Среда');
    }
    else if (week == '4') {
        alert('Четверг');
    }
    else if (week == '5') {
        alert('Пятница');
    }
    else if (week == '6') {
        alert('Суббота');
    }
    else if (week == '7') {
        alert('Воскресенье');
    } else {
        alert('Такое значение вводить нельзя!')
    }

 */

switch (week) {
    case '1':
        alert('Понедельник');
        break;
    case '2':
        alert('Вторник');
        break;
    case '3':
        alert('Среда');
        break;
    case '4':
        alert('Четверг');
        break;
    case '5':
        alert('Пятница');
        break;
    case '6':
        alert('Суббота');
        break;
    case '7':
        alert('Воскресенье');
        break;
    default:
        alert('Такое значение вводить неельзя!');
        break;
}
