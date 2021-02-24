function tag(strings, name, age) {
  const [s1, s2, s3] = strings
  const ageStr = age > 42 ? 'старшим' : 'младшим'
  return `${s1}${name}${s2}${ageStr}${s3}` // добавляем чтобы не было в выводе undefined
}

const person = {
  name: 'Max',
  age: 50,
}

const output = tag`Человек по имени ${person.name} являеться ${person.age} в семье!`

console.log(output)
