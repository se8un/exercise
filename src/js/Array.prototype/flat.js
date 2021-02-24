const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]]
console.log(nested.flat()) //[ 'a', 'b', 'c', 'd', 'e', [ 'f', 'g' ] ]
console.log(nested.flat().flat())
/*
[
	'a', 'b', 'c',
	'd', 'e', 'f',
	'g'
]
*/

//глубина вложенности указываеться цифрой в flat(num)
console.log(nested.flat(2))

const techs = ['react redux', 'angular', 'vue', 'deno and node']
console.log(techs.map(tech => tech.split(' '))) //out двумерный массив:
/*
[
  [ 'react', 'redux' ],
  [ 'angular' ],
  [ 'vue' ],
  [ 'deno', 'and', 'node' ]
]
  */

//разбиваем на отдельные слова, получаем двумерный массив, затем возвращаем одномерный массив с отдельными словами.
console.log(techs.map(tech => tech.split(' ')).flat()) //v.1 .flat()
console.log(techs.flatMap(tech => tech.split(' '))) //v.2 flatMap
//out одномерный массив:
/*  
[
  'react',   'redux',
  'angular', 'vue',
  'deno',    'and',
  'node'
]
  */
