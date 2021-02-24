let car = []
document.querySelector('.push').onclick = () => {
  let id = +document.querySelector('.input').value
  if (!car.includes(id)) {
    car.push(id)
  }
  console.log(car)
}
document.querySelector('.pop').onclick = () => {
  let id = +document.querySelector('.input').value
  let pop = car.pop()
  console.log(`id: ${pop} удален`)
  console.log(car)
}

// let a = [11, 22]
// a[a.length] = 55
// a.push(55, 44, 33)
// console.log(a)
