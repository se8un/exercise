//_/_/_/_/_/
// TASK 1
//_/_/_/_/_/

/* 
console.log([10, 15, 3, 7], 17) // true
console.log([10, 15, 3, 7], 20) // false

// SOLUTION 1

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
// 3+7 */

//_/_/_/_/_/
// TASK 2
//_/_/_/_/_/

// В функцию передаеться целое положительное число. Необходимо сделать так, чтобы функция возвращала сумму цифр в переданном числе.

// console.log(sumDigits(123)) // 6
// console.log(sumDigits(9045)) // 18
// console.log(sumDigits(3)) // 3

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
