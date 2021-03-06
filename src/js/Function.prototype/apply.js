// apply() Метод вызывает функцию с заданным this значением, и при arguments условии, как массив(или массив типа объекта).

const numbers = [5, 6, 2, 3, 7]
const maxN = Math.max.apply(null, numbers)
console.log(maxN) // 7
const minN = Math.min.apply(null, numbers)
console.log(minN) //2
