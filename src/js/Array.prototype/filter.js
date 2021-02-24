// Метод массива .filter() выполняет функцию обратного вызова для каждого элемента в массиве. Функция обратного вызова для каждого из элементов должна возвращать либо, true либо false. Возвращенный массив - это новый массив с любыми элементами, для которых функция обратного вызова возвращает true. Возвращает элементы массива, которые соответствуют условию, указанному в функции обратного вызова. создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции. Вернётся новый массив с элементами, которые проходят тест, то есть callback вернёт true. Если ни один элемент не пройдёт тест, то будет возвращён пустой массив. Функция, которая будет вызвана для каждого элемента массива. Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется.

// синтаксис
// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])

//Здесь массив filteredArray будет содержать все элементы, randomNumbers 4.
const randomNumbers = [22, 3, 4, 11, 42, 14, 39]
const filteredArray = randomNumbers.filter(n => {
  return n > 5
})
console.log(randomNumbers.filter(n => n > 5)) // [ 22, 11, 42, 14, 39 ]

// Отфильтровывание всех маленьких значений
function isBigEnough(value) {
  return value >= 10
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// массив filtered равен [12, 130, 44]

const a = [3, 4, 5, 6, 8, 0, 143, 45]
let c = a.filter(item => {
  if (item > 7) {
    return item // часть return должна быть интерпритирована как true/false. Нельзя записать например item * 2. А при выводе второго в return, не обязательного параметра index, вернуться всеравно числа больше 7. Дело в том что индексы больше 0 поэтому интерпритируються как true. return 0 получим пустой массив [].
  }
})
console.log(c) // [8, 143, 45]

let c = a.filter(item => {
  if (item % 2 === 0) {
    // ищем четные элементы
    return true //    [4, 6, 8, 0] правильный вывод, 0 четное число
    // return item //    [4, 6, 8] не верный return, должно быть либо true либо false
  }
})

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100]
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number'
})
console.log(onlyNumbers) // [ 5, 3.14, 100 ]

//The .filter() Method. Like .map() returns a new array, НО возвращает массив элементов после фильтрации

const randomNumbers = [375, 200, 3.14, 7, 13, 852]
const smallNumbers = randomNumbers.filter(num => num < 250)
console.log(smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene']
const longFavoriteWords = favoriteWords.filter(str => str.length > 7)
