const fs = require('fs')
// Below we create a function for reading files that returns a promise. We converted the fs.readfile() function which uses callbacks. Many of the asynchronous functions you'll encounter already return promises, so this extra step is seldom necessary.
// //Ниже мы создаем функцию для чтения файлов, которая возвращает обещание. Мы преобразовали функцию fs.readfile (), которая использует обратные вызовы. Многие асинхронные функции, с которыми вы столкнетесь, уже возвращают обещания, поэтому этот дополнительный шаг требуется редко.

const promisifiedReadfile = (file, encoding) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, text) => {
      if (err) {
        return reject(err.message)
      }
      resolve(text)
    })
  })

module.exports = promisifiedReadfile
