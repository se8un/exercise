// Метод массива .reduce() перебирает массив и возвращает одно значение после итерации по элементам массива, тем самым уменьшая массив. Он принимает функцию обратного вызова с двумя параметрами в (accumulator, currentValue) в качестве аргументов. На каждой итерации accumulator это значение, возвращаемое последней итерацией, а currentValue- текущий элемент. При желании можно передать второй аргумент, который действует как начальное значение аккумулятора. Метод выполняет редуктор функцию (которую вы предоставляете) на каждом элементе массива, что приводит к одному значению выходного сигнала. сворачивание массива. Возвращаемое значение.

// Функция, которая принимает до четырех аргументов. Метод reduce вызывает функцию callbackfn один раз для каждого элемента в массиве. Вызывает указанную функцию обратного вызова для всех элементов массива. Возвращаемое значение функции обратного вызова - это накопленный результат, который предоставляется в качестве аргумента при следующем вызове функции обратного вызова.

// синтаксис
// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

// // аналог reduce:
// let res = ''
// for (){
// 	res +=
// }

//reduceRight() Метод работает по аналогии только справа на лево, индексы не меняються, acc становиться правое число.

// Здесь .reduce() метод суммирует все элементы массива
const arrayOfNumbers = [1, 2, 3, 4]
const sum = arrayOfNumbers.reduce((acc, val) => {
  return acc + val
})
console.log('sum', sum) // 10

// Сглаживание массива массивов. Из двумерных в одномерный
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, val) => acc.concat(val), [])
console.log('flattened', flattened) // [ 0, 1, 2, 3, 4, 5 ]

// сумма всех элементов массива, либо перевести в числа строки
let a1 = [22, 33, 44]
let b1 = a1.reduce((acc, val) => {
  // acc = acc + ' ' + val    // out 22 33 44 (строки)
  // acc = acc + val          // out 99
  return acc
})
console.log('b1', b1)

// вывести все числа больше 0
let a2 = [-3, 4, -5, 7, -6, 2]
let b2 = a2.reduce((acc, val) => {
  if (val > 0) {
    acc += val
  }
  return acc
}, 0)
console.log('b2', b2) // 13
// НО при добавлении в массив - 3 вначале, получим не правильный вывод.потому что в acc попадает первое число. Для этого указываем после функции через запятую начальное значение, например 0.

// вывести наибольшее число
let a3 = [-3, 4, -5, 7, -6, 2]
let b3 = a3.reduce((acc, val) => {
  if (val > acc) {
    acc = val
  }
  return acc
})
console.log('b3', b3)

// извлечь конкрретные данные из массива, например id
let a4 = [
  { id: 55, city: 'acr' },
  { id: 75, city: 'rca' },
  { id: 175, city: 'bra' },
]
let b4 = a4.reduce((acc, val) => {
  acc.push(val.id)
  return acc
}, [])
console.log('b4', b4) // [ 55, 75, 175 ]

//
const numbers = [1, 2, 4, 10]
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(summedNums) // Output: 17

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100) // <- Second argument for .reduce() начальное значение аккумулятора
console.log(summedNums) // Output: 117

const newNumbers = [1, 3, 5, 7]
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator)
  console.log('The value of currentValue: ', currentValue)
  return accumulator + currentValue
}, 10)
console.log(newSum)
