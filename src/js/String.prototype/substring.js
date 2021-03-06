// Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
// Если аргумент indexA будет больше аргумента indexB, то метод substring() сработает так, как если бы аргументы были поменяны местами; например, str.substring(1, 0) == str.substring(0, 1).
// Если вам нужно заменить подстроки, скорее всего вы захотите использовать метод String.prototype.replace()

// Синтаксис
// str.substring(indexA[, indexB])

// В следующем примере метод substring() используется для отображения символов из строки 'Mozilla':
var anyString = 'Mozilla'

// Отобразит 'Moz'
console.log(anyString.substring(0, 3))
console.log(anyString.substring(3, 0))

// Отобразит 'lla'
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Отобразит 'Mozill'
console.log(anyString.substring(0, 6))

// Отобразит 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))

// использование метода substring() вместе со свойством length
// Отобразит 'illa' - последние 4 символа
var anyString = 'Mozilla'
var anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)

'adventures'.substring(2, 9) // Returns 'venture'
// substring starts from indexA(2) , and goes up to but not including indexB(9)
'hello'.substring(1) // returns 'ello'
'Web Fundamentals'.substring(111) // returns ''
'In the market'.substring(2, 999) // returns ' the market'
'Fast and efficient'.substring(3, 3) // returns ''
'Go away'.substring('abcd', 5) // returns 'Go aw'
// Any non-numeric thing is treated as 0
