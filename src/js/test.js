// геттеры и сеттеры. Методы получения и установки полезны потому, что они предлагают способ перехвата доступа к свойствам и их назначения, а также позволяют выполнять дополнительные действия до того, как эти изменения вступят в силу.
const myCat = {
  _name: 'Snickers',
  get name() {
    return this._name
  },
  set name(newName) {
    // Проверяем, что newName непустая строка перед установкой в ​​качестве свойства name
    if (typeof newName === 'string' && newName.length > 0) {
      this._name = newName
    } else {
      console.log('ERROR: name must be a non-empty string')
    }
  },
}

console.log(myCat.name) // Snickers
console.log(myCat._name) // Snickers

console.log(myCat._name) //
console.log(myCat._name) //
