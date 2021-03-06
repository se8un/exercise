// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы. Метод используется для объединения двух или более массивов. Этот метод не изменяет существующие массивы, а вместо этого возвращает новый массив. Возвращаемое значение Новый Array экземпляр. При вложенных массивах образуется ссылка, поэтому при смене значений в массиве меняеться и новый concat массив. Лучший способ объединить массивы (MDN).

// Синтаксис
// const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

// Объединение двух массивов
const letters = ['a', 'b', 'c']
const numbers = [1, 2, 3]
letters.concat(numbers) // ['a', 'b', 'c', 1, 2, 3]
numbers.concat(letters) // [ 1, 2, 3, 'a', 'b', 'c' ]
numbers.concat(numbers) // [ 1, 2, 3, 1, 2, 3 ]

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2)
console.log(array3) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Объединение трех массивов
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]
const numbers = num1.concat(num2, num3)
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Объединение вложенных массивов
// Следующий код объединяет вложенные массивы и демонстрирует сохранение ссылок:
const num1 = [[1]]
const num2 = [2, [3]]
const numbers = num1.concat(num2)
console.log(numbers) // [[1], 2, [3]]
num1[0].push(4)
console.log(numbers) // [[1, 4], 2, [3]]
