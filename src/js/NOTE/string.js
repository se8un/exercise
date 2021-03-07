'my name'.toUpperCase() // Returns 'MY NAME'
'MY NAME'.toLowerCase() // Returns 'my name'

// string.trim() Удаляет пробелы с обоих концов строки.
'       a        '.trim() // 'a'
'     a  a       '.trim() // 'a  a'

// .replace() Возвращает строку, в которой первая совпадающая подстрока заменена новой подстрокой.
'original string'.replace('original', 'replaced') // 'replaced string'

// .charAt() Возвращает указанный символ из строки
'Hello World!'.charAt(0) // 'H'
'Hello World!'.charAt(234) // ''

// .substring() Возвращает последовательность символов между двумя индексами в строке.
'adventures'.substring(2, 9) // 'venture'
'hello'.substring(1) // 'ello'

// .indexOf() Возвращает индекс первого вхождения указанного значения, -1 если значение не найдено.
'My name is very long.'.indexOf('name') // 3

//string -> array
const e = [...'hello'] //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(e)

// копировать часть строки
let str = 'hello'
console.log(str.slice(1, 4)) // ell

//_/_/_/

// На prompt()экране появляется диалоговое окно с дополнительным сообщение , предлагающее пользователю ввести текст. Если пользователь нажимает кнопку «Отменить», возвращается значение null.
prompt(message)
// Пример
let name = prompt('Enter your name:')
console.log('Hello ' + name + '!')

//_/_/_/

// сделать букву большой через указаный промежуток
// // v1
const makeItFunny = (str, n) => {
  let nStart = n
  let res = ''
  let i = 0
  while (i < str.length) {
    if (i === n - 1) {
      res += str[i].toUpperCase()
      n += nStart
    } else {
      res += str[i]
    }
    i++
  }
  return res
}
console.log(makeItFunny('I never look back', 3)) // 'I NevEr LooK bAck'

// v2
const makeItFunny = (str, n) => {
  let res = ''
  let i = 0
  while (i < str.length) {
    if ((i + 1) % n === 0) {
      res += str[i].toUpperCase()
    } else {
      res += str[i]
    }
    i++
  }
  return res
}
console.log(makeItFunny('I never look back', 3)) // 'I NevEr LooK bAck'

//_/_/_/

// принимает строку и символ, возвращающую новую строку, в которой удален переданный символ.
const filterString = (str, simbol) => {
  let res = ''
  let i = 0
  while (i <= str.length - 1) {
    if (str[i].toLowerCase() !== simbol.toLowerCase()) {
      res += str[i]
    }
    i++
  }
  return res
}

const str = 'If I look back I am lost'
console.log(filterString(str, 'I')) // 'f  look back  am lost')

//_/_/_/

// сколько в предложении определенной буквы
const countChars = (str, char) => {
  let i = 0
  let count = 0
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++
    }
    i++
  }
  return count
}

//_/_/_/

// три варианта сделать первую букву большой
const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1)
const capitalize = word => word[0].toUpperCase() + word.slice(1)
const capitalize = text => `${text[0].toUpperCase()}${text.slice(1)}`
console.log(capitalize('aag'))

//_/_/_/

// 16 значный номер карты скрывает все цифры кроме последних 4
const getHiddenCard = (cardNumber, starsCount = 4) => {
  const visibleDigits = cardNumber.slice(12)
  return visibleDigits.padStart(starsCount + 4, '*')
} // ****1011

//_/_/_/

// String.prototype.padStart()
// Дополняет строку "заполнителем" слева, до тех пор пока длина строки не станет равной указанной.Первым параметром функция принимает желаемую длину строки, вторым – заполнитель.
'5'.padStart(2, '*') // '*5'
'10'.padStart(4, '+') // '++10'

//_/_/_/

// СТРОКИ 2020
// метод trim. trimStart, trimEnd убирает пробелы в строках
const start = '                   Hello '
const end = 'This is new JS   '
// вариант 1
console.log(start.trimStart() + end.trimEnd()) // Hello This is new JS
// вариант 2
console.log((start + end).trim()) // Hello This is new JS

// padStart(5) добавляет 6 символов перед указаной строкой, второй параметр отвечает за заполнение www. Если ничего не указать то будут пробелы.
console.log('vk'.padStart(6, 'www.')) // out: www.vk
// добавляем в конец стоки
console.log('vk'.padEnd(6, '.com')) // out: vk.com

//_/_/_/

// поменять буквы местами
// v1
let nameBrienna = 'Brienna'.split('').reverse().join('')
console.log(nameBrienna)

// v2
const reverseString = str => {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    res = str[i] + res
  }
  return res
}
console.log(reverseString('Kilka v Tomate')) // etamoT v akliK

//_/_/_/
