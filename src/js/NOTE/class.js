// Классы определяют общие свойства и методы, которые будут иметь объекты, созданные из класса. Когда объект создается на основе класса, новый объект упоминается как экземпляр класса. Новые экземпляры создаются с использованием new ключевого слова.

// Статические методы. не вызываются в отдельных экземплярах класса, а вызываются в самом классе. являются  служебными методами.

// Между методами в классах нет разделителей, запятых.

// extends ключевого слова. наследования - дочерний класс может расширять родительский класс. Конструктор дочернего класса вызывает конструктор родительского класса с помощью super() метода.

// Объявления классов не поднимаются (в отличие от объявлений функций.

// Parent class
class Animal {
  constructor(name, age, box) {
    this.name = name
    this.age = age
    this._box = box
  }
  // сеттер, срабатывает при записи
  set box(value) {
    this._box = value // Приватное поле
  }
  // геттер, срабатывает при чтении
  get area() {
    return this._box ** 2
  }
  sing() {
    return `His ${this.age} year but he can sing`
  }
  dance() {
    return `${this.name} can dance`
  }
  // static method, может вызвать только Animal
  static bark() {
    console.log('Woof!')
  }
}

// Child class
class Cat extends Animal {
  constructor(name, age, box, color) {
    super(name, age, box)
    this.color = color
  }
  say() {
    return `I ${this.color} cat`
  }
}

// создаем экземпляр класса Cat
let tom = new Cat('tom', 13, 4, 'indigo')

Animal.bark() //Woof! //Calling the static method

// Объект класса Cat tom может использовать свойства и методы как класса Cat, так и класса Animal
console.log(tom.sing()) //"tom can sing" //Calling Animal method
console.log(tom.say()) //"I indigo cat" //Calling Cat method

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

// Перепишем этот код в прототипном стиле с использованием метода Object.create()
function Animal(name, age) {
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

function Cat(name, age, color) {
  let newCat = Animal(name, age)
  Object.setPrototypeOf(newCat, catConstructor)
  newCat.color = color
  return newCat
}

let catConstructor = {
  color() {
    return `I have ${this.color} color`
  },
}

Object.setPrototypeOf(catConstructor, animalConstructor)
const tom = Cat('tom', 13, 'purple')
tom.sing() // "tom can sing"
tom.color() // "I have purple color"
