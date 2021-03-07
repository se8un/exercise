// every() - проверяет массив, и если хоть один элемент не соответствует условию, возвращает false. every - каждый
// some() - проверяет массив, если есть хоть один элемент в массиве соответствующий условию, возвращает true. some - один

// arr.some(fn)/arr.every(fn) проверяет массив.
// Функция fn вызывается для каждого элемента массива аналогично map. Если какие-либо/все результаты вызовов являются true, то метод возвращает true, иначе false.

//every

const a = [4, 5, 6, 7, 8]

let b = a.every(item => {
  if (item > 4) {
    return true
  }
})
console.log(b) //>3 true >4 false

const a2 = [5, 2, 1, 1, 4, 5, 6, 7, 8]

let b2 = a2.every(item => {
  if (item > 0 && item < 20) {
    return true
  }
})
console.log(b2) // true

//some

const c3 = [
  { name: 'ivan', age: 12 },
  { name: 'masha', age: 23 },
  { name: 'petya', age: 35 },
  { name: 'glasha', age: 47 },
]

let b3 = c3.some(item => {
  if (item.age < 18) {
    return true
  }
})
console.log(b3) // true
