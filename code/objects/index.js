// создать список с записями людей

// для каждого человека записано его имя
// и пароль
const users = [
    {name: 'user1', password: 'qwerty'},
    {name: 'user2', password: '12345'},
    {name: 'user3', password: 'password'},
    {name: 'user4', password: 'asdfgh'},
    {name: 'user5', password: 'zxcvbn'}
];

// получить от пользователя имя
const name = prompt('Введите имя');
// получить от пользователя пароль


// если имя совпадает с каким-либо именем 
// в списке, сравниваем пароль с паролем того
// пользователя в списке, если они совпадают
// пишем Добро пожаловать, иначе
// пишем пароль неверный
let found_user = null;

for (let i = 0; i < users.length; i++) {
    if (name === users[i].name) {
        found_user = users[i];
        break;
    }
}

if (found_user === null) {
    document.write('Такого пользователя не существует');
} else {
    const password = prompt('Введите пароль');
    if (password === found_user.password) {
        document.write('Добро пожаловать');
    } else {
        document.write('Пароль неверный');
    }
}
// если в конце списка мы не нашли
// такого имени, выводим
// "Такого пользователя не существует"



