'use strict'

//_/_/_/ IF ELSE | SWITCH if-else-switch.js
//_/_/_/ LOOPS i++ loop.js
//_/_/_/ ARRAY [] array.js
//_/_/_/ STRING '' "" `` string.js
//_/_/_/ NUMBER 0-9 number.js
//_/_/_/ FUNCTION() {} function.js
//_/_/_/ OBJECT = {} object.js
//_/_/_/ CLASS {constructor} class.js
//_/_/_/ JS & DOM js-dom.js
//_/_/_/ PROMISE (res, rej) promise.js

//_/_/_/_/_/_/_/_/_/_/_/ NOTE _/_/_/_/_/_/_/_/_/_/_/_/

/* 
то что декларируется поднимается наверх, хойтисться:
function (){} // function declaration
var a // var декларирует переменную а
let и const не хойтяться наверх
то что инициализированно не хойститься, (когда присваиваем знаком = )

Нейтральный элемент для строк – пустая строка - ''
Нейтральный элемент для сложения, вычитания – 0
Нейтральный элемент для умножения, деления – 1

let и const оба ограничены блоком, в котором они инициализированы. Это может быть меньшая область видимости, чем var переменные, которые ограничены функцией, в которой они инициализированы.

Имя переменной может быть почти любым, но не должно начинаться с цифры, а из спецсимволов разрешены только '_' и '$'. 

результатом двойного отрицания всегда будет bool. Этим приемом пользуются, чтобы поменять тип данных.

js doc создать описание метода - /starstar, как мультикомент только с 2 звездами. 
*/

//_/_/_/

// Отображает диалоговое окно с указанным сообщением и двумя кнопками, ОК и Отмена.
confirm('message') // Returns true if confirmed, false otherwise
// пример
if (confirm('Are you sure you want to delete this post?')) {
  deletePost()
}

//_/_/_/

console.log(0 || 1) // 1 (|| возвращается первый true)
console.log(0 && 1) // 0 (&& возвращается первый false)
// 0, '', undefined, NaN, null приводятся к false. Эти значения называют falsy.
// Всё остальное приводится к true
console.log('' === false) // => false (по значению не равны)
console.log('' == false) // => true (по типу оба false)
234 || '' // 234
undefined || '' // ''
'hex' || '' // 'hex'

//_/_/_/

// // висакосный ли год
const isLeapYear = year => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
console.log(isLeapYear(2020)) // true
console.log(isLeapYear(2021)) // false

// Приоритет арифметических операций выше логических. Значит, сначала вычисляется арифметическое выражение number % 2, затем результат участвует в логическом сравнении.
const isEven = number => number % 2 === 0

//_/_/_/

// Функции-предикаты (или функции-вопросы) отвечают на какой-то вопрос и всегда (без исключений!) возвращают либо true, либо false.
const isInfant = age => age < 1
console.log(isInfant(3)) // false

// Предикаты во всех языках принято именовать особым образом для простоты анализа. В JavaScript предикаты, как правило, начинаются с префикса is, has или can, но не ограничены этими словами. Примеры:
isInfant() //— «младенец ли?»
hasChildren() //— «есть ли дети?»
isEmpty() //— «пустой ли?»
hasErrors() //— «есть ли ошибки?»
// Функция может считаться предикатом только если она возвращает bool.

//_/_/_/_/_/_/_/_/_/_/_/ __PROTO__ | .PROTOTYPE _/_/_/_/_/_/_/_/_/_/_/_/

// let shogun = new Samurai('segun')
// console.log(shogun.__proto__ !== Function.prototype)
// console.log(shogun.__proto__ === Samurai.prototype)
// console.log(shogun.__proto__.__proto__ === Samurai.prototype.__proto__)
// console.log(shogun.__proto__.constructor.__proto__ === Samurai.prototype.constructor.__proto__)
// console.log(shogun)
// console.log(shogun.__proto__)
// console.log(shogun.__proto__.constructor)
//
// console.log(shogun.__proto__.__proto__.__proto__)
// console.log(shogun.__proto__.__proto__)
// console.log(shogun.__proto__)
// console.log(shogun)
//
// console.log(Samurai.prototype !== Object.prototype)
// console.log(Samurai.prototype !== Function.prototype)
