/* определение простых чисел - имеющее ровно два различных натуральных делителя — единицу и самого себя
Последовательность простых чисел начинается так:
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199… */

//_/_/_/

// isNaN() Возвращает истину, если данное число не является числом, иначе возвращает ложь.
// const userInput = prompt('Enter a number'); // "Enter a number"
if (isNaN(userInput)) {
  console.log('I told you to enter a number.')
}

// console.log executed since 'a number' is not a number
// Another important thing:
if (isNaN('3')) {
  console.log('bad')
}
// Not executed because the string "3" gets converted into 3, and 3 is a number

//_/_/_/

// сгенерировать случайное число.
//(0 - 0, 9), умножаем на 5(0 - 4, 9), округляем вниз(0 - 4)
console.log(Math.floor(Math.random() * 5)) // 0 - 4
console.log(Math.ceil(Math.random() * 5)) // 1 - 5

//_/_/_/

// функция проверки числа на четность
const isEven = n => n % 2 == 0

//_/_/_/

// Чтобы рассчитать количество операций бинарным поиском, мы можем взять логарифм:
console.log(Math.log2(4000000000))
