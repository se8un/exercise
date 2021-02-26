// .endsWith()
// Возвращает истину, если последовательность элементов searchString, преобразованных в String, совпадает с соответствующими элементами этого объекта (преобразованными в String), начиная с endPosition -length (this). В противном случае возвращает false.

// endsWith()Способ определяет , является ли строка заканчивается героями указанной строки, возвращая trueили falseв зависимости от обстоятельств.

/* 
 Синтаксис
 str.endsWith(searchString[, length])

Параметры
searchString
Символы для поиска в конце str.
length Необязательный
Если предусмотрено, используется как длина str. По умолчанию str.length.

Возвращаемое значение
trueесли данные символы находятся в конце строки; в противном случае false.

Описание
Этот метод позволяет определить, заканчивается ли строка другой строкой.Этот метод чувствителен к регистру.
 */

const str1 = 'Cats are the best!'
console.log(str1.endsWith('best', 17)) // true

const str2 = 'Is this a question'
console.log(str2.endsWith('?')) // false

// Использование endWith ()
let str = 'To be, or not to be, that is the question.'
console.log(str.endsWith('question.')) // true
console.log(str.endsWith('to be')) // false
console.log(str.endsWith('to be', 19)) // true
