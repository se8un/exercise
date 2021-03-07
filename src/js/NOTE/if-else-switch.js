// else if
// Это похоже на else заявление, но со своим условием. Он будет запущен только в том случае, если его условие истинно, а условие предыдущего оператора было ложным.
// Форма: иначе, если. Если условие истинно, будет выполнен оператор1. В противном случае проверяется условие 2 если это правда, то выполняется оператор 2 В противном случае, если ничего не истина, выполняется оператор 3
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else {
  statement3
}

// стандартный if else
let defaultName

if (username) {
  defaultName = username
} else {
  defaultName = 'Stranger'
}

// вариант с ИЛИ
let defaultName = username || 'Stranger'

//_/_/_/

// switch имеет смысл использовать там, где есть цепочка if else с проверками на равенство

// Внешнее описание, в которое входит ключевое слово switch. Переменная, по значениям которой switch будет выбирать поведение. И фигурные скобки для вариантов выбора.

// Конструкции case и default, внутри которых описывается поведение для разных значений рассматриваемой переменной. Каждый case соответствует if в примере выше. default - это особая ситуация, соответствующая ветке else в условных конструкциях. Как else, указывать default не обязательно (но линтер всегда его просит).

// break нужен для предотвращения «проваливания». Если его не указать, то после выполнения нужного case выполнение перейдет к следующему case, и так либо до ближайшего break, либо до конца switch.

// Фигурные скобки в switch не определяют блок кода, как это было в других местах. Внутри допустим только тот синтаксис, который показан выше. То есть там можно использовать case или default. А вот внутри каждого case (и default) ситуация другая. Здесь можно выполнять любой произвольный код:

switch (count) {
  case 1:
    // Делаем что-то полезное
    break
  case 2:
    // Делаем что-то полезное
    break
  default:
  // Что-то делаем
}

switch (status) {
  case 'processing': // status == processing
    // Делаем раз
    break
  case 'paid': // status == paid
    // Делаем два
    break
  case 'new': // status == new
    // Делаем три
    break
  default: // else
  // Делаем четыре
}

//_/_/_/

const getNumberExplanation = num => {
  switch (num) {
    case 7:
      return 'prime number'
    case 42:
      return 'answer for everything'
    case 666:
      return 'devil number'
    default:
      return null
  }
}

//_/_/_/

// switch
const food = 'salad'
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪')
    break
  case 'pizza':
    console.log('A delicious pie 🍕')
    break
  default:
    console.log('Enjoy your meal')
} // Prints: Enjoy your meal
