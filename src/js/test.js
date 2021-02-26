// const encrypt = str => {
//   let res = ''
//   for (let i = 0; i < str.length; i++) {
//     if (i === str.length - 1 && str.length % 2 !== 0) {
//       res += str[i]
//     } else {
//       res += (str[i + 1] || '') + str[i]
//       i++
//     }
//   }
//   return res
// }

const encrypt = str => {
  let res = ''
  for (let i = 0; i < str.length; i += 2) {
    let nextSymbol = str[i + 1] || ''
    res += nextSymbol + str[i]
  }
  return res
}

console.log(encrypt('attack th is!')) // 'taatkc'
console.log(encrypt('go!')) // 'og!'
