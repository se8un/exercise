//.findIndex() Method. найти расположение элемента в массиве.  Возвращает индекс первого элемента в массиве, где предикат истинен, и -1 в противном случае.

// (method) Array<number>.findIndex(predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): number

const jumbledNums = [123, 25, 78, 5, 9]
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10
})
console.log(lessThanTen) // Output: 3
console.log(jumbledNums[3]) // Output: 5

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant']
const foundAnimal = animals.findIndex(animal => animal === 'elephant')
const startsWithS = animals.findIndex(animal => animal[0] === 's')
