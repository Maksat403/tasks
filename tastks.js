// // 1. Используя условынй оператор switch определите тип данных переменной x. Результат выведите в консоли.
// // let x = true;
// // let x = { name: "Sam" };
// // let x = 123;
// // let x = 'Hello World!';
// let x = [12, "str", false];

// switch (typeof x) {
//   case "boolean":
//     console.log("Булеан знач");
//     break;
//   case "number":
//     console.log("число");
//     break;
//   case "string":
//     console.log("Строка");
//     break;
//   case "object":
//     console.log("Объект");
//     break;
// }

// 2. Используя тернарный оператор выведите в консоли прогноз погоды. К примеру, если переменная temperature равна -10, вывести "Температура воздуха опустится до -10 градусов".
// let temperature = prompt("введите температуру");

// temperature > 0
//   ? console.log(`Температура поднялась до ${temperature} градусов`)
//   : console.log(`Температура опустилась до ${temperature} градусов`);

// 3. Запросить у пользователя информацию, админ он или нет, если админ то запросить пароль, он должен совпадать с паролем 'adminStaff123', если все совпадает вывести сообщение с помощью алерта: Доступ разрешен!, в противном случае: Доступ заблокирован!

// let admin = confirm("Вы админ или нет?");
// console.log(admin);
// if (admin === true) {
//   let answer = prompt("Введите пароль");
//   if (answer === "adminStaff123") {
//     alert("Доступ разрешен!");
//   } else {
//     alert("Уходи!");
//   }
// }

// 4. Запросите у пользователя поочередно информацию, имя, профессию, заработную плату и стаж, затем сохраните эти данные в объект и проверьте если стаж пользователя больше 3х лет, необходимо задать вопрос, все это время он работал в одной сфере или нет, если да, то повысить его заработную плату на 500$, в конце распечатать объект, чтобы можно было отследить результат

let name = prompt("name");
let profession = prompt("profession");
let salary = +prompt("salary");
let stage = prompt("stage");
let object = {
  name: name,
  profession: profession,
  salary: salary,
  stage: stage,
};
console.log(object);
if (object.stage > 3) {
  let answer = confirm("вы работали в одной сфере?");
  if (answer) {
    object.salary += 500;
  }
}
console.log(object);
