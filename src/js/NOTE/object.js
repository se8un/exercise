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

//_/_/_/

// Ограничены геттеры и сеттеры. Свойства объекта не являются частными или защищенными. Поскольку объекты передаются по ссылке, невозможно полностью предотвратить некорректное взаимодействие со свойствами объекта. Один из способов реализации более ограниченного взаимодействия со свойствами объекта является использование геттерных и инкубационных методы.
const myCat = {
  _name: 'Dottie',
  get name() {
    return this._name
  },
  set name(newName) {
    this._name = newName
  },
}
console.log(myCat.name) // Ссылка вызывает геттер
myCat.name = 'Yankee' // Присвоение вызывает сеттер

//_/_/_/

// javascript передает объекты в качестве аргументов. Мутация объектов
//  объекты передаются по ссылке а не по значению. Это означает, что сам объект (а не его копия) доступен и изменен (может быть изменен) внутри этой функции!

//_/_/_/

// геттеры и сеттеры. Методы получения и установки полезны потому, что они предлагают способ перехвата доступа к свойствам и их назначения, а также позволяют выполнять дополнительные действия до того, как эти изменения вступят в силу.
const myCat = {
  _name: 'Snickers',
  get name() {
    return this._name
  },
  set name(newName) {
    // Проверяем, что newName непустая строка перед установкой в ​​качестве свойства name
    if (typeof newName === 'string' && newName.length > 0) {
      this._name = newName
    } else {
      console.log('ERROR: name must be a non-empty string')
    }
  },
}

//_/_/_/

// Стрелочные функции не имеют собственного this контекста, но используют this окружающий лексический контекст. Таким образом, они обычно не подходят для написания методов объекта.
const myObj = {
  data: 'abc',
  loggerA: () => {
    console.log(this.data) // data не существует в глобальном контексте
  },
  loggerB() {
    console.log(this.data) // this относится к охватывающему объекту
  },
}
myObj.loggerA() // undefined
myObj.loggerB() // 'abc'

//_/_/_/

// Сокращенный синтаксис деструктурирующего присваивания объекта. Деструкторизация
const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17',
}
const { possiblePermutations, invented, largestCube } = rubiksCubeFacts
console.log(possiblePermutations) // '43,252,003,274,489,856,000'
console.log(invented) // '1974'
console.log(largestCube) // '17x17x17'

// сокращенный синтаксис имени свойства для создания объекта
const activity = 'Surfing'
const beach = { activity }
console.log(beach) // { activity: 'Surfing' }

//_/_/_/

// delete Ключевое слово удаляет как значение свойства и свойства самого от объекта. delete Оператор работает только по свойствам, а не от переменных или функций.
delete student.score
delete person.hobby

//_/_/_/

let obj = {
  name: 'Bob',
  married: true,
  "mother's name": 'Alice',
  'year of birth': 1987,
  getAge: function () {
    return 2012 - obj['year of birth']
  },
  1: 'one',
}

obj['name'] // 'Bob'
obj.name // 'Bob'
obj.getAge() // 24

//_/_/_/

// this Ключевое слово. относится к вызывающему  метода объекту и может использоваться для доступа к свойствам, принадлежащим этому объекту.
const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name
  },
}
console.log(cat.whatName()) // Pipey
