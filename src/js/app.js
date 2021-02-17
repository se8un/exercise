'use strict'

//_/_/_/_/
// TASK 1
//_/_/_/_/

/* 
TA.value = `
console.log([10, 15, 3, 7], 17) // true
console.log([10, 15, 3, 7], 20) // false`
 */
// SOLUTION 1
/* 
function check(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true
      }
    }
  }
  return false
}
console.log(check([10, 15, 3, 7], 17)) // true
console.log(check([10, 15, 3, 7], 20)) // false
// 10+15 / 10+3 / 10+7 /
// 15+3 / 15+7 /
// 3+7
 */

//_/_/_/_/
// TASK 2
//_/_/_/_/

/* 
TA.value =
  `В функцию передаеться целое положительное число. Необходимо сделать так, чтобы функция возвращала сумму цифр в переданном числе.

// console.log(sumDigits(123)) // 6
// console.log(sumDigits(9045)) // 18
// console.log(sumDigits(3)) // 3`
 */

// SOLUTION 2

/* 
// v.1
function sumDigits(num) {
  let splitStr = num.toString().split('') // (3) ["1", "2", "3"]
  let splitNum = splitStr.map(Number) // (3) [1, 2, 3]
  let sum = splitNum.reduce((a, v) => a + v)
  return sum
}
 */

/* 
// v.2
function sumDigits(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((a, v) => a + v)
}
 */

/* 
// v.3
function sumDigits(num) {
  return [...(num + '')].map(Number).reduce((a, v) => a + v)
}
 */

/* 
// v.4
function sumDigits(num) {
  let sum = 0
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }
  return sum
}
 */

//_/_/_/_/
// TASK 3
//_/_/_/_/

/* 
TA.value = `Написать функцию, в которую передается целое число. Функция должна вывести горку как показано в примере с тем числом линий, которое переданно в параметр функции.

function printHill(lines) {
}
printHill(5)

должно получиться:

#
##
###
####
#####`
*/

// SOLUTION 3

/* 
// v.1
function printHill(lines) {
  let hill = ''
  for (let i = 0; i < lines; i++) {
    hill += '#'
    console.log(hill)
  }
}
printHill(5)
*/

/* 
// v.2
function printHill(lines) {
  for (let i = 0; i < lines; i++) {
    console.log('#'.repeat(i + 1))
  }
}
printHill(7)
 */

//_/_/_/_/
// TASK 4
//_/_/_/_/

/* 
TA.value = '
let str = 'Gekjrekjrn'
// str[0] = 'p' // нельзя изменять строку в переменной'

// можно так
let a = [...str]
a[0] = 'ppp'
console.log(a)
 */

//_/_/_/_/
// TASK 5
//_/_/_/_/

/* 
TA.value = `В функцию передается массив, функция должна вернуть новый массив с четными числами`
 */

// SOLUTION 5

/* 
// v.1
function getEven(arr) {
  let even = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i])
    }
  }
  return even
}
console.log(getEven([5, 0, -5, 20, 88, 17, -32]))
 */

/* 
// v.2
function getEven(arr) {
  return arr.filter(n => !(n % 2))
}
console.log(getEven([5, 0, -5, 20, 88, 17, -32]))
 */

//_/_/_/_/
// TASK 6
//_/_/_/_/

TA.value = `Реализовать функцию сортировки Сталина. Сортировка Сталина - шуточное название, при котором мы должны пройтись по всем элементам с начала и удалить все элементы, которые стоят не по порядку, по итогу необходимо получить отсортированный массив.

function sort(arr) {

}

const arr = [5, 18, 2, -7, 88, 20, 109]
sort(arr)
console.log(arr) // [5, 18, 88, 109]`

// SOLUTION

function sort(arr) {}

const arr = [5, 18, 2, -7, 88, 20, 109]
sort(arr)
console.log(arr) // [5, 18, 88, 109]
