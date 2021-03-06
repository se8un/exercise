'use strict'

//_/_/_/_/_/_/_/_/_/_/_/   NOTE   _/_/_/_/_/_/_/_/_/_/_/_/

// let и const оба ограничены блоком, в котором они инициализированы. Это может быть меньшая область видимости, чем var переменные, которые ограничены функцией, в которой они инициализированы.

// // Отображает диалоговое окно с указанным сообщением и двумя кнопками, ОК и Отмена.
// confirm('message') // Returns true if confirmed, false otherwise
// // пример
// if (confirm('Are you sure you want to delete this post?')) {
//   deletePost();
// }

//_/_/_/

// то что декларируется поднимается наверх, хойтисться:
// function (){} // function declaration
// var a // var декларирует переменную а
// let и const не хойтяться наверх
// то что инициализированно не хойститься, (когда присваиваем, =)

//_/_/_/

// Нейтральный элемент для строк – пустая строка - ''
// Нейтральный элемент для сложения, вычитания – 0
// Нейтральный элемент для умножения, деления – 1

//_/_/_/

// console.log(0 || 1) // 1 (|| возвращается первый true)
// console.log(0 && 1) // 0 (&& возвращается первый false)
// 0, '', undefined, NaN, null приводятся к false. Эти значения называют falsy.
// Всё остальное приводится к true
// console.log('' === false); // => false (по значению не равны)
// console.log('' == false);  // => true (по типу оба false)
// 234 || '' // 234
// undefined || '' // ''
// 'hex' || '' // 'hex'

// результатом двойного отрицания всегда будет bool. Этим приемом пользуются, чтобы поменять тип данных.

// // висакосный ли год
// const isLeapYear = year => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
// console.log(isLeapYear(2020)) // true
// console.log(isLeapYear(2021)) // false

// Приоритет арифметических операций выше логических.Значит, сначала вычисляется арифметическое выражение number % 2, затем результат участвует в логическом сравнении.
// const isEven = (number) => number % 2 === 0;

// js doc создать описание метода
/** */

//_/_/_/

/* 
// Функции-предикаты (или функции-вопросы) отвечают на какой-то вопрос и всегда (без исключений!) возвращают либо true, либо false.
const isInfant = age => age < 1
console.log(isInfant(3)) // false

// Предикаты во всех языках принято именовать особым образом для простоты анализа. В JavaScript предикаты, как правило, начинаются с префикса is, has или can, но не ограничены этими словами. Примеры:
isInfant() //— «младенец ли?»
hasChildren() //— «есть ли дети?»
isEmpty() //— «пустой ли?»
hasErrors() //— «есть ли ошибки?»
// Функция может считаться предикатом только если она возвращает bool.
 */

//_/_/_/_/_/_/_/_/_/_/_/   IF ELSE | SWITCH   _/_/_/_/_/_/_/_/_/_/_/_/

// // else if
// // Это похоже на else заявление, но со своим условием. Он будет запущен только в том случае, если его условие истинно, а условие предыдущего оператора было ложным.
// // Форма: иначе, если. Если условие истинно, будет выполнен оператор1. В противном случае проверяется условие 2. если это правда, то выполняется оператор 2. В противном случае, если ничего не истина, выполняется оператор 3.
// if (condition1) {
//   statement1;
// } else if (condition2) {
//   statement2;
// } else {
//   statement3;
// }

// // стандартный if else
// let defaultName
// if (username) {
//   defaultName = username
// } else {
//   defaultName = 'Stranger'
// }
// // вариант с ИЛИ
// let defaultName = username || 'Stranger'

//_/_/_/

// switch имеет смысл использовать там, где есть цепочка if else с проверками на равенство

// Внешнее описание, в которое входит ключевое слово switch. Переменная, по значениям которой switch будет выбирать поведение. И фигурные скобки для вариантов выбора.

// Конструкции case и default, внутри которых описывается поведение для разных значений рассматриваемой переменной. Каждый case соответствует if в примере выше. default - это особая ситуация, соответствующая ветке else в условных конструкциях. Как else, указывать default не обязательно (но линтер всегда его просит).

// break нужен для предотвращения «проваливания». Если его не указать, то после выполнения нужного case выполнение перейдет к следующему case, и так либо до ближайшего break, либо до конца switch.

// Фигурные скобки в switch не определяют блок кода, как это было в других местах. Внутри допустим только тот синтаксис, который показан выше. То есть там можно использовать case или default. А вот внутри каждого case (и default) ситуация другая. Здесь можно выполнять любой произвольный код:

/* 
switch (count) {
  case 1:
    // Делаем что-то полезное
    break
  case 2:
    // Делаем что-то полезное
    break
  default:
  // Что-то делаем
} 
*/

/* 
switch (status) {
  case 'processing': // status == processing
    // Делаем раз
    break;
  case 'paid': // status == paid
    // Делаем два
    break;
  case 'new': // status == new
    // Делаем три
    break;
  default: // else
    // Делаем четыре
}
*/

//_/_/_/
/* 
const getNumberExplanation = (num) => {
	switch (num) {
	case 7:
		return 'prime number'
	case 42:
		return 'answer for everything'
	case 666:
		return 'devil number'
	default:
		return null
}
} */

//_/_/_/

// // switch
// const food = 'salad'
// switch (food) {
//   case 'oyster':
//     console.log('The taste of the sea 🦪')
//     break
//   case 'pizza':
//     console.log('A delicious pie 🍕')
//     break
//   default:
//     console.log('Enjoy your meal')
// } // Prints: Enjoy your meal

//_/_/_/_/_/_/_/_/_/_/_/   LOOPS i++  _/_/_/_/_/_/_/_/_/_/_/_/

// Когда количество итераций известно, предпочтительнее использовать цикл for.

// // цикл for in с Объектами может брать ключ и значение
// let mobile = { brand: 'Samsung', model: 'Galaxy Note 9' }
// for (let key in mobile) {
//   console.log(`${key}: ${mobile[key]}`)
// }
// // brand: Samsung
// // model: Galaxy Note 9

//_/_/_/

// // цикл for in с Массивами выводит индексы
// // цикл for of выводит имена
// const fruits = ['apple', 'banana', 'orange']
// for (const fru in fruits) {
//   console.log(fru) // for in: 0 1 2
//   console.log(fru) // for of: apple	banana orange
// }

//_/_/_/

// // таблица умножения
// // ф печатает цифры и табами в строку
// function printLine(n) {
//   let text = ''
//   for (let i = 1; i <= 7; i++) {
//     text += i * n + '\t'
//   }
//   console.log(text)
// }
// // цикл принимает ф и выводит строки и столбцы
// for (let i = 1; i <= 5; i++) {
//   console.log('-'.repeat(50))
//   printLine(i)
// }

//_/_/_/

// // цикл for
// for (let counterOne = 1; counterOne < 4; counterOne++) {
//   console.log(counterOne) // 1 2 3
// }

//_/_/_/

// // вложеный цикл for
// for (let outer = 0; outer < 2; outer += 1) {
//   for (let inner = 0; inner <= 5; inner += 1) {
//     console.log(`${outer}-${inner}`)
//   }
// }

//_/_/_/

// Цикл while идеален для ситуаций, когда количество итераций неизвестно заранее, например, при поиске простого числа. Когда количество итераций известно, предпочтительнее использовать цикл for.

// // сумма чисел от первого до второго вкл
// const sum = (num1, num2) => {
//   let res = 0
//   while (num1 <= num2) {
//     res += num1
//     num1++
//   }
//   return res
// }
// console.log(sum(1, 10)) // 55

//_/_/_/

// // цикл while loop
// let counterTwo = 1
// while (counterTwo < 4) {
//   console.log(counterTwo) // 1 2 3
//   counterTwo++
// }

//_/_/_/_/_/_/_/_/_/_/_/   ARRAY []   _/_/_/_/_/_/_/_/_/_/_/_/

/*
Все методы итератора принимают функцию обратного вызова, которая может быть предварительно определена, или выражение функции, или функцию стрелки. 

.forEach () используется для выполнения одного и того же кода для каждого элемента в массиве, но не изменяет массив и возвращает undefined.

.map () выполняет один и тот же код для каждого элемента в массиве и возвращает новый массив с обновленными элементами.

.reduce () выполняет итерацию по массиву, принимает значения элементов и возвращает одно значение.

.filter () проверяет каждый элемент в массиве, чтобы увидеть, соответствует ли он определенным критериям, и возвращает новый массив с элементами, которые возвращают истинность критериев.

.findIndex () возвращает индекс первого элемента массива, который удовлетворяет условию в функции обратного вызова. Он возвращает -1, если ни один из элементов массива не удовлетворяет условию.
*/

//_/_/_/

/*
.splice() Отсчитываемое от нуля место в массиве, из которого следует начать удаление элементов. Удаляет элементы из массива и при необходимости вставляет на их место новые элементы, возвращая удаленные элементы. !splice изменяет исходный массив!

*/

//_/_/_/

/* 
Array.prototype.reduce()
Сумма всех элементов массива.
Перевести числа в строки.
Сглаживание массива, из двумерного в одномерный.
Найти наибольшее число в массиве.
Извлечь конкретные данные из массива, например id объекта.
 */

//_/_/_/

/* 
Array.prototype.forEach()
цикл for in с массивами выводит индексы
цикл for of с массивами выводит имена
у массивов есть forEach() заменяет работу с циклом + более производителен
 */

//_/_/_/

// // сравнить два массива и узнать общее число через вложеный цикл
// const myArray = [6, 19, 20]
// const yourArray = [19, 81, 2]
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Общее число: ' + yourArray[j])
//     }
//   }
// }

//_/_/_/

// // скопировать в новый массив с номера индекса вкл, до конца.
// let arr = [22, 33, 44, 55, 66, 77, 88, 99]
// let sl = arr.slice(3)
// console.log(arr) // arr не изменился
// console.log(sl) // [ 55, 66, 77, 88, 99 ]

//_/_/_/_/_/_/_/_/_/_/_/   STRING '' "" ``  _/_/_/_/_/_/_/_/_/_/_/_/

'my name'.toUpperCase() // Returns 'MY NAME'
'MY NAME'.toLowerCase() // Returns 'my name'

// string.trim() Удаляет пробелы с обоих концов строки.
'       a        '.trim() // 'a'
'     a  a       '.trim() // 'a  a'

// .replace() Возвращает строку, в которой первая совпадающая подстрока заменена новой подстрокой.
'original string'.replace('original', 'replaced') // 'replaced string'

// .charAt() Возвращает указанный символ из строки
'Hello World!'.charAt(0) // 'H'
'Hello World!'.charAt(234) // ''

// .substring() Возвращает последовательность символов между двумя индексами в строке.
'adventures'.substring(2, 9) // 'venture'
'hello'.substring(1) // 'ello'

// .indexOf() Возвращает индекс первого вхождения указанного значения, -1 если значение не найдено.
'My name is very long.'.indexOf('name') // 3

//_/_/_/

// // На prompt()экране появляется диалоговое окно с дополнительным сообщение , предлагающее пользователю ввести текст. Если пользователь нажимает кнопку «Отменить», возвращается значение null.
// prompt(message)
// // Пример
// let name = prompt('Enter your name:')
// console.log('Hello ' + name + '!')

//_/_/_/

// сделать букву большой через указаный промежуток
// // v1
// const makeItFunny = (str, n) => {
//   let nStart = n
//   let res = ''
//   let i = 0
//   while (i < str.length) {
//     if (i === n - 1) {
//       res += str[i].toUpperCase()
//       n += nStart
//     } else {
//       res += str[i]
//     }
//     i++
//   }
//   return res
// }
// console.log(makeItFunny('I never look back', 3)) // 'I NevEr LooK bAck'

// // v2
// const makeItFunny = (str, n) => {
//   let res = ''
//   let i = 0
//   while (i < str.length) {
//     if ((i + 1) % n === 0) {
//       res += str[i].toUpperCase()
//     } else {
//       res += str[i]
//     }
//     i++
//   }
//   return res
// }
// console.log(makeItFunny('I never look back', 3)) // 'I NevEr LooK bAck'

//_/_/_/

/* 
// принимает строку и символ, возвращающую новую строку, в которой удален переданный символ.
const filterString = (str, simbol) => {
  let res = ''
  let i = 0
  while (i <= str.length - 1) {
    if (str[i].toLowerCase() !== simbol.toLowerCase()) {
      res += str[i]
    }
    i++
  }
  return res
}
const str = 'If I look back I am lost'
console.log(filterString(str, 'I')) // 'f  look back  am lost') */

//_/_/_/

// // сколько в предложении определенной буквы
// const countChars = (str, char) => {
//   let i = 0
//   let count = 0
//   while (i < str.length) {
//     if (str[i].toLowerCase() === char.toLowerCase()) {
//       count++
//     }
//     i++
//   }
//   return count
// }

//_/_/_/

// // три варианта сделать первую букву большой
// const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1)
// const capitalize = word => word[0].toUpperCase() + word.slice(1)
// const capitalize = text => `${text[0].toUpperCase()}${text.slice(1)}`
// console.log(capitalize('aag'))

//_/_/_/

// // 16 значный номер карты скрывает все цифры кроме последних 4
// const getHiddenCard = (cardNumber, starsCount = 4) => {
//   const visibleDigits = cardNumber.slice(12)
//   return visibleDigits.padStart(starsCount + 4, '*')
// } // ****1011

//_/_/_/

/* 
// String.prototype.padStart()
// Дополняет строку "заполнителем" слева, до тех пор пока длина строки не станет равной указанной.Первым параметром функция принимает желаемую длину строки, вторым – заполнитель.
'5'.padStart(2, '*') // '*5'
'10'.padStart(4, '+') // '++10'
 */

/* //_/_/_/
// СТРОКИ 2020
// метод trim. trimStart, trimEnd убирает пробелы в строках
const start = '                   Hello '
const end = 'This is new JS     '
// вариант 1
console.log(start.trimStart() + end.trimEnd()) // Hello This is new JS
// вариант 2
console.log((start + end).trim()) // Hello This is new JS

// padStart(5) добавляет 6 символов перед указаной строкой, второй параметр отвечает за заполнение www. Если ничего не указать то будут пробелы.
console.log('vk'.padStart(6, 'www.')) // out: www.vk
// добавляем в конец стоки
console.log('vk'.padEnd(6, '.com')) // out: vk.com
//_/_/_/ */

// // поменять буквы местами
// v1
// let nameBrienna = 'Brienna'.split('').reverse().join('')
// console.log(nameBrienna)

// v2
// const reverseString = str => {
//   let res = ''
//   for (let i = 0; i < str.length; i++) {
//     res = str[i] + res
//   }
//   return res
// }
// console.log(reverseString('Kilka v Tomate')) // etamoT v akliK

//_/_/_/

// // копировать часть строки
// let str = 'hello'
// console.log(str.slice(1, 4)) // ell

//_/_/_/_/_/_/_/_/_/_/_/   NUMBER 0-9  _/_/_/_/_/_/_/_/_/_/_/_/

// определение простых чисел - имеющее ровно два различных натуральных делителя — единицу и самого себя
// Последовательность простых чисел начинается так:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199…

//_/_/_/

// isNaN() Возвращает истину, если данное число не является числом, иначе возвращает ложь.
// // const userInput = prompt('Enter a number'); // "Enter a number"
// if (isNaN(userInput)) {
//   console.log('I told you to enter a number.');
// }
// // console.log executed since 'a number' is not a number
// // Another important thing:
// if (isNaN('3')) {
//   console.log('bad');
// }
// Not executed because the string "3" gets converted into 3, and 3 is a number

//_/_/_/

// // сгенерировать случайное число.
// //(0 - 0, 9), умножаем на 5(0 - 4, 9), округляем вниз(0 - 4)
// console.log(Math.floor(Math.random() * 5)) // 0 - 4
// console.log(Math.ceil(Math.random() * 5)) // 1 - 5

//_/_/_/

// // функция проверки числа на четность
// const isEven = n => n % 2 == 0

//_/_/_/

// // Чтобы рассчитать количество операций бинарным поиском, мы можем взять логарифм:
// console.log(Math.log2(4000000000))

//_/_/_/_/_/_/_/_/_/_/_/   FUNCTION() {}  _/_/_/_/_/_/_/_/_/_/_/_/

// // У каждой функции или метода есть this контекст. Для функции, определенной внутри объекта, this будет ссылаться на сам этот объект. Для функции, определенной вне объекта, this будет ссылка на глобальный объект  window в браузере, global в Node.js
// const restaurant = {
//   numCustomers: 45,
//   seatCapacity: 100,
//   availableSeats() {
//     // this refers to the restaurant object
//     // and it's used to access its properties
//     return this.seatCapacity - this.numCustomers
//   },
// }

//_/_/_/
/*
// благодоря такому синтаксису мы можем валидировать и изменять строчки
function tag(strings, name, age) {
  const [s1, s2, s3] = strings
  const ageStr = age > 42 ? 'старшим' : 'младшим'
  return `${s1}${name}${s2}${ageStr}${s3}`
}
const person = {
  name: 'Max',
  age: 50,
}
const output = tag`Человек по имени ${person.name} являеться ${person.age} в семье!`
console.log(output) // Человек по имени Max являеться старшим в семье!
*/
//_/_/_/

// // // ф принимающая любые параметры через ...arguments
// function sumFn() {
//   return [...arguments].reduce((acc, val) => acc + val)
// }
// console.log(sumFn(16, 34, 5, 13, -6, 24, 6, 51, 555))

//_/_/_/

// // [...arguments] У любой функции есть доступ к специальной переменной arguments, которая представляет фактически переданные параметры: arguments – объект, похожий на массив. Он итерируем, имеет числовые индексы, но, к сожалению, не работает с .forEach(). Чтобы обернуть его в массив, можно использовать оператор ...
// function sortFn() {
//   const x = [...arguments].sort((a, b) => a - b)
//   console.log(`sort -> ${x}`)
//   return x
// }
// sortFn(16, 3, 5, 8, 13, 6, -12, 38, 55, 46, 789, 12, 4545, 12, 884, -5, -1, -1)

//_/_/_/

// // Функция присвоенная переменной
// let plusFive = number => {
//   return number + 5
// }
// let f = plusFive
// plusFive(3) // 8
// // поскольку f имеет значение функции, ее можно вызвать.
// f(9) // 14

//_/_/_/

// // Функции обратного вызова - callback function
// // функция проверки на четность
// const isEven = n => {
//   return n % 2 == 0
// }
// // создаем ф-ию принимающую другую ф-ию и параметр для второй ф-ии
// let printMsg = (evenFunc, n) => {
//   const isNumEven = evenFunc(n) // записываем в константу true/false
//   console.log(`The number ${n} is an even number: ${isNumEven}.`)
// }
// //Передаем isEven как функцию обратного вызова
// printMsg(isEven, 4) // The number 4 is an even number: True.

//_/_/_/

// // создем сначало просто функцию, которая печатает строку
// const delayedHello = () => {
//   console.log('Hi! This is an asynchronous greeting!')
// }
// // вызываем setTimeout() функцию обратного вызова. По крайней мере, через две секунды delayedHello() будет вызван
// setTimeout(delayedHello, 2000)

//_/_/_/

// // замыкание
// const add = x => y => {
//   const z = x + y
//   console.log(x + ' + ' + y + ' = ' + z)
//   return add(z)
// }
// add(1)(4)(6)(9)(3)
// // 1 + 4 = 5
// // 5 + 6 = 11
// // 11 + 9 = 20
// // 20 + 3 = 23

//_/_/_/_/_/_/_/_/_/_/_/   OBJECT = {}  _/_/_/_/_/_/_/_/_/_/_/_/

// javascript передает объекты в качестве аргументов. Мутация объектов
//  объекты передаются по ссылке а не по значению. Это означает, что сам объект (а не его копия) доступен и изменен (может быть изменен) внутри этой функции!

//_/_/_/

// // Стрелочные функции не имеют собственного this контекста, но используют this окружающий лексический контекст. Таким образом, они обычно не подходят для написания методов объекта.
// const myObj = {
//   data: 'abc',
//   loggerA: () => {
//     console.log(this.data) // data не существует в глобальном контексте
//   },
//   loggerB() {
//     console.log(this.data) // this относится к охватывающему объекту
//   },
// }
// myObj.loggerA() // undefined
// myObj.loggerB() // 'abc'

//_/_/_/

// // Сокращенный синтаксис деструктурирующего присваивания объекта. Деструкторизация
// const rubiksCubeFacts = {
//   possiblePermutations: '43,252,003,274,489,856,000',
//   invented: '1974',
//   largestCube: '17x17x17',
// }
// const { possiblePermutations, invented, largestCube } = rubiksCubeFacts
// console.log(possiblePermutations) // '43,252,003,274,489,856,000'
// console.log(invented) // '1974'
// console.log(largestCube) // '17x17x17'

// // сокращенный синтаксис имени свойства для создания объекта
// const activity = 'Surfing'
// const beach = { activity }
// console.log(beach) // { activity: 'Surfing' }

//_/_/_/

// // delete Ключевое слово удаляет как значение свойства и свойства самого от объекта. delete Оператор работает только по свойствам, а не от переменных или функций.
// delete student.score
// delete person.hobby

//_/_/_/

// let obj = {
//   name: 'Bob',
//   married: true,
//   "mother's name": 'Alice',
//   'year of birth': 1987,
//   getAge: function () {
//     return 2012 - obj['year of birth']
//   },
//   1: 'one',
// }

// obj['name'];  // 'Bob'
// obj.name;     // 'Bob'
// obj.getAge(); // 24

//_/_/_/

// // this Ключевое слово. относится к вызывающему  метода объекту и может использоваться для доступа к свойствам, принадлежащим этому объекту.
// const cat = {
//   name: 'Pipey',
//   age: 8,
//   whatName() {
//     return this.name
//   },
// }
// console.log(cat.whatName()) // Pipey

//_/_/_/_/_/_/_/_/_/_/_/   CLASS {constructor}  _/_/_/_/_/_/_/_/_/_/_/_/

/* //_/_/_/
// Наследование в класс-ориентированном синтаксисе выглядит так:
class Animals {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sing() {
    return `${this.name} can sing`
  }
  dance() {
    return `${this.name} can dance`
  }
}

class Cats extends Animals {
  constructor(name, age, whiskerColor) {
    super(name, age)
    this.whiskerColor = whiskerColor
  }
  whiskers() {
    return `I have ${this.whiskerColor} whiskers`
  }
}

let clara = new Cats('Clara', 33, 'indigo')
// Объект класса Cats clara может использовать свойства и методы как класса Cats, так и класса Animals.
console.log(clara.sing()) // "Clara can sing"
console.log(clara.whiskers()) // "I have indigo whiskers"

// Перепишем этот код в прототипном стиле с использованием метода Object.create()
function Animals(name, age) {
  let newAnimal = Object.create(animalConstructor)
  newAnimal.name = name
  newAnimal.age = age
  return newAnimal
}

let animalConstructor = {
  sing: function () {
    return `${this.name} can sing`
  },
  dance: function () {
    return `${this.name} can dance`
  },
}

function Cats(name, age, whiskerColor) {
  let newCat = Animals(name, age)
  Object.setPrototypeOf(newCat, catConstructor)
  newCat.whiskerColor = whiskerColor
  return newCat
}

let catConstructor = {
  whiskers() {
    return `I have ${this.whiskerColor} whiskers`
  },
}

Object.setPrototypeOf(catConstructor, animalConstructor)
const clara = Cats('Clara', 33, 'purple')
clara.sing() // "Clara can sing"
clara.whiskers() // "I have purple whiskers"
//_/_/_/ */

// class Square {
//   constructor(size) {
//     this.size = size
//   }
//   set size(value) {
//     // сеттер, срабатывает при записи
//     this._size = value // Приватное поле
//   }
//   get area() {
//     // геттер, срабатывает при чтении
//     return this._size ** 2
//   }
// }
// const box = new Square(3)
// console.log(box.area) // 9
// box.size = 5 // нельзя задавать напрямую
// console.log(box.size) // undefined

//_/_/_/

// // classes/static-methods
// // В приведенном выше примере мы создаем static метод с именем,.generateName()который при вызове возвращает случайное имя. Из-за static ключевого слова мы можем получить доступ, .generateName()только добавив его к Animal классу:
// class Animal {
//   constructor(name) {
//     this._name = name
//     this._behavior = 0
//   }
//   static generateName() {
//     const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara']
//     const randomNumber = Math.floor(Math.random() * 5)
//     return names[randomNumber]
//   }
// }
// // Мы вызываем .generateName() метод со следующим синтаксисом:
// console.log(Animal.generateName())
// // экземпляр класса не может обратиться к статик методу класса
// // Uncaught TypeError: tyson.generateName is not a function
// const tyson = new Animal('Tyson')
// tyson.generateName() // Uncaught TypeError

//_/_/_/_/_/_/_/_/_/_/_/   JS + <HTML/>   _/_/_/_/_/_/_/_/_/_/_/_/

// // out in html - в JS document.write с тегами h1
// document.write('<h1>в JS document.write с тегами h1</h1>')

//_/_/_/

// счетчик нажатия на кнопку
// document.querySelector('.button').onclick = () => console.log('нажал')

/* //_/_/_/
// // Способ проверки браузера на поддержку стандартов W3C DOM перед тем, как запустить код, зависящий от результата этой проверки.
// if (document.getElementById && document.getElementsByTagName) {
//   // если методы getElementById и getElementsByTagName
//   // доступны, то можно относительно точно предположить поддержку W3CDOM.


//   obj = document.getElementById('navigation')
//   // далее идёт другой код с использованием возможностей W3CDOM.
//   // ….
// }
// // Проверить заявленную поддержку различных расширений DOM в конкретном веб-браузере.
// function domImplementationTest() {
//   var featureArray = [
//     'HTML',
//     'XML',
//     'Core',
//     'Views',
//     'StyleSheets',
//     'CSS',
//     'CSS2',
//     'Events',
//     'UIEvents',
//     'MouseEvents',
//     'HTMLEvents',
//     'MutationEvents',
//     'Range',
//     'Traversal',
//   ]
//   var versionArray = ['1.0', '2.0', '3.0']
//   var i
//   var j
//   if (document.implementation && document.implementation.hasFeature) {
//     for (i = 0; i < featureArray.length; i++) {
//       for (j = 0; j < versionArray.length; j++) {
//         document.write(
//           'Поддержка расширения ' +
//             featureArray[i] +
//             ' версии ' +
//             versionArray[j] +
//             ': ' +
//             (document.implementation.hasFeature(featureArray[i], versionArray[j])
//               ? '<span style="color:green">true</span>'
//               : '<span style="color:red">false</span>') +
//             '<br/>'
//         )
//       }
//       document.write('<br/>')
//     }
//   }
// }
//_/_/_/ */

// function addButtons(numButtons) {
//   for (var i = 0; i < numButtons; i++) {
//     var button = document.createElement('input')
//     button.type = 'button'
//     button.value = 'Button ' + (i + 1)
//     // Используем шаблон Immediately-Invoked Function Expression (IIFE) для достижения желаемого поведения:
//     button.onclick = (buttonIndex => {
//       return () => alert('Button ' + (buttonIndex + 1) + ' clicked') // c return () => алерт не вызываеться сразу при загрузке
//     })(i) // вызываем функцию с параметром i
//     document.body.appendChild(button)
//     document.body.appendChild(document.createElement('br'))
//   }
// }
// window.onload = () => addButtons(5)

//_/_/_/_/_/_/_/_/_/_/_/   PROMISE (res, rej)   _/_/_/_/_/_/_/_/_/_/_/_/

// async...await
// ES8 синтаксис для обработки асинхронного действия, async...await.
// асинхронный код , который читается синхронно (в файле async-await.js)
// В качестве альтернативы .then()функциям связывания он предлагает лучшую поддержку кода и близкое сходство с синхронным кодом.

// let myPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Yay, I resolved!')
//     }, 1000)
//   })
// }

// async function noAwait() {
// 	let value = myPromise();
// 	console.log(value);
//  }

//  async function yesAwait() {
// 	let value = await myPromise();
// 	console.log(value);
//  }

//  noAwait(); // Prints: Promise { <pending> }
// yesAwait(); // Prints: Yay, I resolved!

//_/_/_/

// // Помните, что асинхронная функция возвращает обещание с разрешенным значением, равным возвращаемому значению этой функции.
// function nativePromise() {
//   return new Promise((resolve, reject) => {
//     resolve('yay!')
//   })
// }
// // Можно было написать:
// async function asyncPromise() {
//   return 'yay!'
// }
// // сокращенная запись:
// let withAsync = async num => (num === 0 ? 'zero' : 'not zero')
//
// // еще пример:
// // Native promise version:
// function nativePromiseDinner() {
//   brainstormDinner().then(meal => {
//     console.log(`I'm going to make ${meal} for dinner.`)
//   })
// }
// // async/await version:
// async function announceDinner() {
//   let meal = await brainstormDinner()
//   console.log(`I'm going to make ${meal} for dinner.`)
// }

//_/_/_/

// /* async функции всегда возвращают обещание. Это означает, что мы можем использовать традиционный синтаксис обещаний, как .then() и .catch с нашими async функциями. async Функция будет возвращать в одном из трех способов:
// Если функция ничего не вернула, она вернет обещание с разрешенным значением undefined.
// Если из функции возвращается значение, не являющееся обещанием, она вернет обещание, разрешенное к этому значению.
// Если обещание возвращается из функции, она просто вернет это обещание. */
// async function fivePromise() {
//   return 5
// }
// fivePromise().then(resolvedValue => {
//   console.log(resolvedValue)
// }) // Prints 5
// // В приведенном выше примере, несмотря на то, что мы возвращаемся 5 внутри тела функции, при вызове на самом деле возвращается fivePromise() обещание с разрешенным значением 5

//_/_/_/

// // Асинхронная функция  может быть создана с async ключевым словом перед function именем или перед "()" когда используется функция стрелки async.async Функция всегда возвращает обещание.
// function helloWorld() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Hello World!')
//     }, 2000)
//   })
// }
// const msg = async function () {
//   //Async Function Expression
//   const msg = await helloWorld()
//   console.log('Message:', msg)
// }
// const msg1 = async () => {
//   //Async Arrow Function
//   const msg = await helloWorld()
//   console.log('Message:', msg)
// }
// msg() // Message: Hello World! <-- after 2 seconds
// msg1() // Message: Hello World! <-- after 2 seconds

// // async Функции используют try...catch операторы для обработки ошибок. Этот метод позволяет совместно обрабатывать ошибки для синхронного и асинхронного кода.
// let json = '{ "age": 30 }' // incomplete data
// try {
//   let user = JSON.parse(json) // <-- no errors
//   console.log(user.name) // no name!
// } catch (e) {
//   console.log('Invalid JSON data!')
// }

//_/_/_/

// // Создание объекта Javascript Promise
// const executorFn = (resolve, reject) => {
//   console.log('The executor function of the promise!')
// }
// // Экземпляр Promise  создается с использованием new ключевого слова. Конструктор Promise принимает в качестве аргумента функция-исполнитель, отвечющая за выполнение или отклонение обещания.
// const promise = new Promise(executorFn)

// // Состояния обещания JavaScript
// const promise = new Promise((resolve, reject) => {
//   const res = true
//   // An asynchronous operation.
//   if (res) {
//     resolve('Resolved!')
//   } else {
//     reject(Error('Error'))
//   }
// })
// promise.then(
//   res => console.log(res),
//   err => alert(err)
// )
// // Resolved!

// // .catch()Способ обработки отказа
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error('Promise Rejected Unconditionally.'))
//   }, 1000)
// })
// promise.then(res => {
//   console.log(value)
// })
// promise.catch(err => {
//   alert(err)
// })
// // Error: Promise Rejected Unconditionally.

// /* Метод Promise.all() можно использовать для параллельного выполнения нескольких обещаний. Функция принимает в качестве аргумента массив обещаний. Если все обещания в аргументе разрешены, обещание, возвращенное из, Promise.all() будет преобразовано в массив, содержащий разрешенные значения всех обещаний в порядке исходного массива. Любой отказ от списка обещаний приведет к отклонению большего обещания. */
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3)
//   }, 300)
// })
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 200)
// })
// Promise.all([promise1, promise2]).then(res => {
//   console.log(res[0])
//   console.log(res[1])
// })
// // 3 2

// // Объединение нескольких методов .then () возвращает обещание, даже если один или оба из функций обработчика отсутствуют. Из-за этого несколько .then() методов можно объединить в цепочку. Это известно как композиция.
// const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100))
// promise
//   .then(res => {
//     return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
//   })
//   .then(
//     res => {
//       console.log(res)
//     },
//     err => {
//       console.log(err)
//     }
//   )
// // Who are you?

//_/_/_/

// //  promises 2020
// // старый метод for of await. Ждет когда все промисы зарезолвяться и вывод их разом.
// const emulate = (id, ms) =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(id), ms)
//   })
// const promises = [emulate(1, 250), emulate(2, 500), emulate(3, 1500)]
// async function old() {
//   for (const promise of await Promise.all(promises)) {
//     console.log('old:', promise)
//   }
// }
// // новый синтаксис for await. Мы не ждем когда все промисы зарезолвяться а выводим их по мере готовности. При указании for of выводит статус pending всех промисов.
// async function modern() {
//   for await (const promise of promises) {
//     console.log('moderm:', promise)
//   }
// }
// modern()
// // old()

//_/_/_/

// const inventory = {
//   sunglasses: 1900,
//   pants: 1088,
//   bags: 1344,
// }
// // создаем функцию с условиями проверки объекта, для resolve, reject.
// function myExecutor(resolve, reject) {
//   if (inventory.sunglasses > 0) {
//     resolve('Sunglasses order processed.')
//   } else {
//     reject('That item is sold out.')
//   }
// }
// //создаем ф-ию возвращающую новый промис с параметром (ф-ия с res, rej)
// function orderSunglasses() {
//   return new Promise(myExecutor)
// }
// console.log(orderSunglasses()) // Promise { 'Sunglasses order processed.' }

//_/_/_/

// // setTimeout()для создания асинхронных обещаний:
// const returnPromiseFunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('I resolved!')
//     }, 1000)
//   })
// }
// const prom = returnPromiseFunction()
// console.log(prom) // Promise { <pending> }

//_/_/_/_/_/_/_/_/_/_/_/   __PROTO__ | .PROTOTYPE   _/_/_/_/_/_/_/_/_/_/_/_/

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

//_/_/_/_/_/_/_/_/_/_/_/   OBJECT   _/_/_/_/_/_/_/_/_/_/_/_/

/* //_/_/_/
// Объекты 2020

// Object.getOwnPropertyDescriptor
const person = {
  name: 'Max',
  age: 30,
}
console.log(Object.getOwnPropertyDescriptor(person, 'name')) // { value: 'Max', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(person)) // описание свойств всего объекта

// Object.entries возвращает массив, состоящий из массивов, где каждый массив состоит из 2х эллементов, где 0 индекс название ключа а 1 индекс значение этого ключа.
console.log(Object.entries(person)) // [ [ 'name', 'Max' ], [ 'age', 30 ] ]

// обратное действие, передаем вложеный массив entries:
// [ [ 'name', 'Max' ], [ 'age', 30 ] ],
console.log(
  Object.fromEntries([
    ['name', 'Max'],
    ['age', 30],
  ])
)
// на выходе получаем наш объект person
// out: { name: 'Max', age: 30 }

// перевод в entries и обратно в объект person
console.log(Object.fromEntries(Object.entries(person)))

console.log(Object.entries(['M', 'A', 'X']))
// out: [ [ '0', 'M' ], [ '1', 'A' ], [ '2', 'X' ] ]

// деструкторизируем массив на key и value
for (const [key, value] of Object.entries(person)) {
  console.log(key, value)
}
//out:
// name Max
// age 30

// вариант с преобразованием в формат JavaScript Object Notation (JSON)
for (const [key, value] of Object.entries(person)) {
  console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`)
}
//out:
// "name": "Max"
// "age": 30

// позволяет доставать значения из объекта
console.log(Object.values(person)) // out: [ 'Max', 30 ]

// возвращает массив ключей из объекта
console.log(Object.keys(person)) // [ 'name', 'age' ]
//_/_/_/ */
