function spinWords(string) {
	let arr = string.split(' ');
	let reversed = arr.map(str => str.split('')).map(array => {
		if (array.length > 4) {
			return array.reverse().join('')
		}
		return array.join('')
	})
	return reversed.join(' ')
}
console.log(spinWords("Seriously this is the last one"))
/* 
все слова длиннее 4 букв переворачивать
вх - строка
вых - строка
1) строку превращаем в массив строк
2) проходим по массиву, каждую строку превращаем в массив букв
3) если длина массива букв больше 4, то переворачиваем порядок букв
если нет - возвращаем тот же массив букв
4) массивы букв - обратно в строки
5) массив слов - в строку
	assert.strictEqual(spinWords("Welcome"), "emocleW");
	assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
	assert.strictEqual(spinWords("This is a test"), "This is a test");
	assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
	assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
	assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
	assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
*/