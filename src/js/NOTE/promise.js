// async...await
// ES8 синтаксис для обработки асинхронного действия, async...await.
// асинхронный код , который читается синхронно (в файле async-await.js)
// В качестве альтернативы .then() функциям связывания он предлагает лучшую поддержку кода и близкое сходство с синхронным кодом.

let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000)
  })
}

async function noAwait() {
  let value = myPromise()
  console.log(value)
}

async function yesAwait() {
  let value = await myPromise()
  console.log(value)
}

noAwait() // Prints: Promise { <pending> }
yesAwait() // Prints: Yay, I resolved!

//_/_/_/

// Помните, что асинхронная функция возвращает обещание с разрешенным значением, равным возвращаемому значению этой функции.
function nativePromise() {
  return new Promise((resolve, reject) => {
    resolve('yay!')
  })
}

// Можно было написать:
async function asyncPromise() {
  return 'yay!'
}

// сокращенная запись:
let withAsync = async num => (num === 0 ? 'zero' : 'not zero')

// еще пример:
// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then(meal => {
    console.log(`I'm going to make ${meal} for dinner.`)
  })
}

// async/await version:
async function announceDinner() {
  let meal = await brainstormDinner()
  console.log(`I'm going to make ${meal} for dinner.`)
}

//_/_/_/

/* async функции всегда возвращают обещание. Это означает, что мы можем использовать традиционный синтаксис обещаний, как .then() и .catch с нашими async функциями. async Функция будет возвращать в одном из трех способов:
Если функция ничего не вернула, она вернет обещание с разрешенным значением undefined.
Если из функции возвращается значение, не являющееся обещанием, она вернет обещание, разрешенное к этому значению.
Если обещание возвращается из функции, она просто вернет это обещание. */
async function fivePromise() {
  return 5
}

fivePromise().then(resolvedValue => {
  console.log(resolvedValue)
}) // Prints 5
// В приведенном выше примере, несмотря на то, что мы возвращаемся 5 внутри тела функции, при вызове на самом деле возвращается fivePromise() обещание с разрешенным значением 5

//_/_/_/

// Асинхронная функция  может быть создана с async ключевым словом перед function именем или перед "()" когда используется функция стрелки async.async Функция всегда возвращает обещание.
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!')
    }, 2000)
  })
}

const msg = async function () {
  //Async Function Expression
  const msg = await helloWorld()
  console.log('Message:', msg)
}

const msg1 = async () => {
  //Async Arrow Function
  const msg = await helloWorld()
  console.log('Message:', msg)
}

msg() // Message: Hello World! <-- after 2 seconds
msg1() // Message: Hello World! <-- after 2 seconds

//_/_/_/

// async Функции используют try...catch операторы для обработки ошибок. Этот метод позволяет совместно обрабатывать ошибки для синхронного и асинхронного кода.
let json = '{ "age": 30 }' // incomplete data

try {
  let user = JSON.parse(json) // <-- no errors
  console.log(user.name) // no name!
} catch (e) {
  console.log('Invalid JSON data!')
}

//_/_/_/

// Создание объекта Javascript Promise
const executorFn = (resolve, reject) => {
  console.log('The executor function of the promise!')
}
// Экземпляр Promise  создается с использованием new ключевого слова. Конструктор Promise принимает в качестве аргумента функция-исполнитель, отвечющая за выполнение или отклонение обещания.
const promise = new Promise(executorFn)

// Состояния обещания JavaScript
const promise = new Promise((resolve, reject) => {
  const res = true
  // An asynchronous operation.
  if (res) {
    resolve('Resolved!')
  } else {
    reject(Error('Error'))
  }
})

promise.then(
  res => console.log(res),
  err => alert(err)
)
// Resolved!

// .catch()Способ обработки отказа
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise Rejected Unconditionally.'))
  }, 1000)
})

promise.then(res => {
  console.log(value)
})

promise.catch(err => {
  alert(err)
})
// Error: Promise Rejected Unconditionally.

/* Метод Promise.all() можно использовать для параллельного выполнения нескольких обещаний. Функция принимает в качестве аргумента массив обещаний. Если все обещания в аргументе разрешены, обещание, возвращенное из, Promise.all() будет преобразовано в массив, содержащий разрешенные значения всех обещаний в порядке исходного массива. Любой отказ от списка обещаний приведет к отклонению большего обещания. */
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 300)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 200)
})

Promise.all([promise1, promise2]).then(res => {
  console.log(res[0])
  console.log(res[1])
})
// 3 2

// Объединение нескольких методов .then () возвращает обещание, даже если один или оба из функций обработчика отсутствуют. Из-за этого несколько .then() методов можно объединить в цепочку. Это известно как композиция.
const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100))

promise
  .then(res => {
    return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
  })
  .then(
    res => {
      console.log(res)
    },
    err => {
      console.log(err)
    }
  )
// Who are you?

//_/_/_/

//  promises 2020
// старый метод for of await. Ждет когда все промисы зарезолвяться и вывод их разом.
const emulate = (id, ms) =>
  new Promise(resolve => {
    setTimeout(() => resolve(id), ms)
  })

const promises = [emulate(1, 250), emulate(2, 500), emulate(3, 1500)]

async function old() {
  for (const promise of await Promise.all(promises)) {
    console.log('old:', promise)
  }
}

// новый синтаксис for await. Мы не ждем когда все промисы зарезолвяться а выводим их по мере готовности. При указании for of выводит статус pending всех промисов.
async function modern() {
  for await (const promise of promises) {
    console.log('moderm:', promise)
  }
}

modern()
// old()

//_/_/_/

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
}

// создаем функцию с условиями проверки объекта, для resolve, reject.
function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.')
  } else {
    reject('That item is sold out.')
  }
}

//создаем ф-ию возвращающую новый промис с параметром (ф-ия с res, rej)
function orderSunglasses() {
  return new Promise(myExecutor)
}

console.log(orderSunglasses()) // Promise { 'Sunglasses order processed.' }

//_/_/_/

// setTimeout()для создания асинхронных обещаний:
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I resolved!')
    }, 1000)
  })
}

const prom = returnPromiseFunction()
console.log(prom) // Promise { <pending> }
