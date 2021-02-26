// String.prototype.slice() – извлекает часть строки или как говорят "подстроку". Первым параметром принимает индекс элемента, с которого надо начинать извлечение, вторым – индекс элемента, до которого извлекаются символы. По умолчанию, извлекается все до конца строки.

// с третьего индекса до конца строки
'java script'.slice(3) // 'a script'

// с первого индекса по четвертый
'java script'.slice(1, 4) // 'ava'

// можно использовать отрицательные индексы
// тогда отсчет берется с конца строки
'java script'.slice(-2) // 'pt'