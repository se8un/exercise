// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает. Метод выполняет функцию при условии один раз для каждого элемента массива. Метод массива .forEach() выполняет функцию обратного вызова на каждом из элементов в массиве в порядке.

//Синтаксис
// arr.forEach(callback(currentValue[, index[, array]]) {}[, thisArg])

//Здесь функция обратного вызова, содержащая console.log() метод, будет выполняться несколько(5) раз, по одному разу для каждого элемента.
const numbers = [28, 77, 45, 99, 27]
numbers.forEach(number => {
  console.log(number)
})
// 28
// 77
// 45
// 99
// 27

//
const array1 = ['a', 'b', 'c']
array1.forEach(element => console.log(element))
// "a"
// "b"
// "c"

// Преобразование цикла for в forEach
const items = ['item1', 'item2', 'item3']
const copyItems = []
// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}
// after
items.forEach(function (item) {
  copyItems.push(item)
})

// передаем ф-ию лог в forEach
function logArrayElements(element, index) {
  console.log('a[' + index + '] = ' + element)
}
;[2, 5, , 9].forEach(logArrayElements) // индекс [2] пропускаеться
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro']
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.')
})
/*  out:
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists. */

// forEach() Method
const groceries = ['mango', 'papaya', 'pineapple', 'apple']
// или вариант 1
groceries.forEach(function (groceryItem) {
  console.log('v1 ' + groceryItem)
})
// вариант 2
groceries.forEach(groceryItem => console.log('v2 ' + groceryItem))
//или вариант 3
function printGrocery(element) {
  console.log('v3 ' + element)
}
groceries.forEach(printGrocery)
// вариант 4
printGrocery = element => console.log('v4 ' + element)
groceries.forEach(printGrocery)

// метод .forEach() заменяет работу с циклом (+ он более производителен):
const fruits = ['apple', 'banana', 'orange']
fruits.forEach(fru => console.log(fru)) // apple banana orange
