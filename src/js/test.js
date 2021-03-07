const c3 = [
  { name: 'ivan', age: 12 },
  { name: 'masha', age: 23 },
  { name: 'petya', age: 35 },
  { name: 'glasha', age: 47 },
]

let b3 = c3.some(item => {
  if (item.age < 18) {
    return true
  }
})
console.log(b3) // true
