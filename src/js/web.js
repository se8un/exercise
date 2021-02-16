let blockDiv = document.querySelector('div'),
  headingH3 = document.querySelector('h3'),
  descriptionTask = document.querySelector('p'),
  textArea = document.querySelector('textarea')

// header number task
headingH3.textContent = `TASK 2`
// description task
descriptionTask.textContent = `В функцию передаеться целое положительное число. Необходимо сделать так, чтобы функция возвращала сумму цифр в переданном числе.`
// code task
textArea.textContent = `function sumDigits(num) {
	//...
}
console.log(sumDigits(123)) // 6
console.log(sumDigits(9045)) // 18
console.log(sumDigits(3)) // 3`
