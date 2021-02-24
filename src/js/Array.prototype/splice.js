// splice изменяет исходный массив!

// splice() Метод изменяет содержимое массива путем удаления или замены существующих элементов и / или добавление новых элементов на месте. Возвращает массив, содержащий удаленные элементы.

// синтаксис
// let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// заменить 1 индекс в массиве на новый
const fruits = ['apple', 'banana', 'orange']
fruits.splice(1, 1, 'pussy')
console.log(fruits) // [ 'apple', 'pussy', 'orange' ]
