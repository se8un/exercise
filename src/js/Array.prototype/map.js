// Метод массива .map() выполняет функцию обратного вызова для каждого элемента в массиве. Он возвращает новый массив, состоящий из значений, возвращаемых функцией обратного вызова. Исходный массив не изменяется, а возвращаемый массив может содержать элементы, отличные от исходного массива.

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.

// Применяеться чтобы перебрать объект (например массив), и к каждому элементу применить какое либо действие или функцию. Создает новый массив.

// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива. Возвращаемое значение - новый массив, где каждый элемент является результатом callback функции.

// синтаксис
/* let new_array = arr.map(function callback( currentValue[, index[, array]]) {
	// Возвращает элемент для new_array
}[, thisArg]) */

// создать новый массив из каждого участника плюс строка
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby']
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.'
})
console.log(announcements)
// 'Taylor joined the contest.' итд для каждого.

// пример квадратного корня
var numbers = [1, 4, 9]
var roots = numbers.map(Math.sqrt)
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]
// пример с параметром функции
var doubles = numbers.map(function (num) {
  return num * 2
})
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]

//
const a1 = [3, 4, 5]
let b1 = a1.map(item => {
  console.log(item) //выведет  3 4 5
  return item * 3 //все что после return будет добавлено в новый массив b
})
console.log(b1) //выведет [9, 12, 15]

const e1 = []
e1[0] = 5
e1[4] = 6
console.log(e1) // map выведет [15, empty x 3, 18 ], выводит только со значением, интелектуальный подход.

// Первый параметр это item, переменная, в которую будет по очереди попадать каждый эллемент исходного массива a. Исходный массив совпадает с результирующим (a.length === b.length), это важное свойство map.

// item - обязательный параметр. Не обязательный второй параметр index.

let b = a.map((item, index) => {
  console.log(index) //выведет  0 1 2
  return index // [0 1 2], можно вернуть что угодно, например 1, тогда выведет [1, 1, 1], можно делать запросы куданибуть итд.
})

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(number => {
  return number * number // или на * число
})
console.log(squareNumbers) // [ 1, 4, 9, 16, 25 ]

//The .map() Method. the major difference is that.map() returns a new array!

const numbers = [1, 2, 3, 4, 5]
const bigNumbers = numbers.map(number => {
  return number * 10
})
// или
const bigNumbers = numbers.map(number => number * 10)
console.log(bigNumbers)

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog']
// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0]
})
console.log(secretMessage.join(''))

const bigNumbers = [100, 200, 300, 400, 500]
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num / 100)
