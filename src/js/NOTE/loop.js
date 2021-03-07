// Когда количество итераций известно, предпочтительнее использовать цикл for.

// цикл for in с Объектами может брать ключ и значение
let mobile = { brand: 'Samsung', model: 'Galaxy Note 9' }
for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`)
}
// brand: Samsung
// model: Galaxy Note 9

//_/_/_/

// цикл for in с Массивами выводит индексы
// цикл for of выводит имена
const fruits = ['apple', 'banana', 'orange']
for (const fru in fruits) {
  console.log(fru) // for in: 0 1 2
  console.log(fru) // for of: apple	banana orange
}

//_/_/_/

// таблица умножения
// ф печатает цифры и табами в строку
function printLine(n) {
  let text = ''
  for (let i = 1; i <= 7; i++) {
    text += i * n + '\t'
  }
  console.log(text)
}
// цикл принимает ф и выводит строки и столбцы
for (let i = 1; i <= 5; i++) {
  console.log('-'.repeat(50))
  printLine(i)
}

//_/_/_/

// цикл for
for (let counterOne = 1; counterOne < 4; counterOne++) {
  console.log(counterOne) // 1 2 3
}

//_/_/_/

// вложеный цикл for
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner <= 5; inner += 1) {
    console.log(`${outer}-${inner}`)
  }
}

//_/_/_/

// Цикл while идеален для ситуаций, когда количество итераций неизвестно заранее, например, при поиске простого числа. Когда количество итераций известно, предпочтительнее использовать цикл for.

// сумма чисел от первого до второго вкл
const sum = (num1, num2) => {
  let res = 0
  while (num1 <= num2) {
    res += num1
    num1++
  }
  return res
}
console.log(sum(1, 10)) // 55

//_/_/_/

// цикл while loop
let counterTwo = 1
while (counterTwo < 4) {
  console.log(counterTwo) // 1 2 3
  counterTwo++
}
