// фабричные функции, возвращающая объект, называется фабричной функцией. часто принимают параметры для настройки возвращаемого объекта.
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!')
    },
  }
}

//_/_/_/

// У каждой функции или метода есть this контекст. Для функции, определенной внутри объекта, this будет ссылаться на сам этот объект. Для функции, определенной вне объекта, this будет ссылка на глобальный объект  window в браузере, global в Node.js
const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object
    // and it's used to access its properties
    return this.seatCapacity - this.numCustomers
  },
}

//_/_/_/

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

//_/_/_/

// ф принимающая любые параметры через ...arguments
function sumFn() {
  return [...arguments].reduce((acc, val) => acc + val)
}

console.log(sumFn(16, 34, 5, 13, -6, 24, 6, 51, 555))

//_/_/_/

// [...arguments] У любой функции есть доступ к специальной переменной arguments, которая представляет фактически переданные параметры: arguments – объект, похожий на массив. Он итерируем, имеет числовые индексы, но, к сожалению, не работает с .forEach(). Чтобы обернуть его в массив, можно использовать оператор ...
function sortFn() {
  const x = [...arguments].sort((a, b) => a - b)
  console.log(`sort -> ${x}`)
  return x
}

sortFn(16, 3, 5, 8, 13, 6, -12, 38, 55, 46, 789, 12, 4545, 12, 884, -5, -1, -1)

//_/_/_/

// Функция присвоенная переменной
let plusFive = number => {
  return number + 5
}

let f = plusFive
plusFive(3) // 8
// поскольку f имеет значение функции, ее можно вызвать.
f(9) // 14

//_/_/_/

// Функции обратного вызова - callback function
// функция проверки на четность
const isEven = n => {
  return n % 2 == 0
}

// создаем ф-ию принимающую другую ф-ию и параметр для второй ф-ии
let printMsg = (evenFunc, n) => {
  const isNumEven = evenFunc(n) // записываем в константу true/false
  console.log(`The number ${n} is an even number: ${isNumEven}.`)
}

//Передаем isEven как функцию обратного вызова
printMsg(isEven, 4) // The number 4 is an even number: True.

//_/_/_/

// создем сначало просто функцию, которая печатает строку
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!')
}

// вызываем setTimeout() функцию обратного вызова. По крайней мере, через две секунды delayedHello() будет вызван
setTimeout(delayedHello, 2000)

//_/_/_/

// замыкание
const add = x => y => {
  const z = x + y
  console.log(x + ' + ' + y + ' = ' + z)
  return add(z)
}

add(1)(4)(6)(9)(3)
// 1 + 4 = 5
// 5 + 6 = 11
// 11 + 9 = 20
// 20 + 3 = 23
