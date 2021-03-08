// HTML-ACADEMY
console.log(document.querySelector('.page')) //поиск тэга по классу page + вывод в консоль
console.log(document.querySelector('.theme-button')) //поиск тэга по классу theme-button

//скрипт не меняет исходный файл с разметкой, но, выполняя инструкции, меняет страницу прямо в браузере пользователя.
document.querySelector('.page').classList.remove('light-theme') //найти тег по классу page и удалить в нем класс light-theme
document.querySelector('.page').classList.add('dark-theme') //Добавляем класс элементу с помощью classList.add
// или
let page = document.querySelector('.page')
page.classList.remove('light-theme')
page.classList.add('dark-theme')

//Сначала мы находим саму кнопку и сохраняем её в переменную:
let button = document.querySelector('button')
//вывод сообщения в консоль:
button.onclick = function () {
  console.log('Клик!')
}

//_/_/_/

// Метод EventTarget.addEventListener() регистрирует определенный обработчик события, вызванного на EventTarget.
// EventTarget может быть Element, Document, Window, или любым другим объектом, поддерживающим события(таким как XMLHttpRequest).

//_/_/_/

Event.stopPropagation() //Остановка распространения события далее по DOM.
Event.preventDefault() //Отменяет событие(если его возможно отменить).

// out in html - в JS document.write с тегами h1
document.write('<h1>в JS document.write с тегами h1</h1>')

// счетчик нажатия на кнопку
document.querySelector('.button').onclick = () => console.log('нажал')

//_/_/_/

// Способ проверки браузера на поддержку стандартов W3C DOM перед тем, как запустить код, зависящий от результата этой проверки.
if (document.getElementById && document.getElementsByTagName) {
  // если методы getElementById и getElementsByTagName
  // доступны, то можно относительно точно предположить поддержку W3CDOM.

  obj = document.getElementById('navigation')
  // далее идёт другой код с использованием возможностей W3CDOM.
  // ….
}

// Проверить заявленную поддержку различных расширений DOM в конкретном веб-браузере.
function domImplementationTest() {
  var featureArray = [
    'HTML',
    'XML',
    'Core',
    'Views',
    'StyleSheets',
    'CSS',
    'CSS2',
    'Events',
    'UIEvents',
    'MouseEvents',
    'HTMLEvents',
    'MutationEvents',
    'Range',
    'Traversal',
  ]
  var versionArray = ['1.0', '2.0', '3.0']
  var i
  var j
  if (document.implementation && document.implementation.hasFeature) {
    for (i = 0; i < featureArray.length; i++) {
      for (j = 0; j < versionArray.length; j++) {
        document.write(
          'Поддержка расширения ' +
            featureArray[i] +
            ' версии ' +
            versionArray[j] +
            ': ' +
            (document.implementation.hasFeature(featureArray[i], versionArray[j])
              ? '<span style="color:green">true</span>'
              : '<span style="color:red">false</span>') +
            '<br/>'
        )
      }
      document.write('<br/>')
    }
  }
}

//_/_/_/

function addButtons(numButtons) {
  for (var i = 0; i < numButtons; i++) {
    var button = document.createElement('input')
    button.type = 'button'
    button.value = 'Button ' + (i + 1)
    // Используем шаблон Immediately-Invoked Function Expression (IIFE) для достижения желаемого поведения:
    button.onclick = (buttonIndex => {
      return () => alert('Button ' + (buttonIndex + 1) + ' clicked') // c return () => алерт не вызываеться сразу при загрузке
    })(i) // вызываем функцию с параметром i
    document.body.appendChild(button)
    document.body.appendChild(document.createElement('br'))
  }
}

window.onload = () => addButtons(5)
