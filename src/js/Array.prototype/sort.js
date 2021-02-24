// sort изменяет исходный массив!

//sort() Метод сортирует элементы массива на месте и возвращает отсортированный массив.По умолчанию используется возрастающий порядок сортировки, основанный на преобразовании элементов в строки и последующем сравнении их последовательностей значений кодовых единиц UTF - 16.

// ошибка при сортировке цифр без аргументов
const array1 = [1, 30, 4, 21, 100000]
array1.sort()
console.log(array1) // [1, 100000, 21, 30, 4]

//
const arrStr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'].sort()
console.log(arrStr)

//
const arrNum = [21, 2020, 42, 1918, 7].sort((a, b) => a - b)
console.log(arrNum)

//
function sortFn() {
  const x = [...arguments].sort((a, b) => a - b)
  console.log(`sort -> ${x}`)
  return x
}
sortFn(16, 3, 5, 8, 13, 6, -12, 38, 55, 46, 789, 12, 4545, 12, 884, -5, -1, -1)

//
let strSort = ['Маша', 'Петя', 'Яна', 'Саша', 'Марина', 'Алексей']
for (name of strSort.sort()) {
  console.log(`Имя: ${name}`)
}
