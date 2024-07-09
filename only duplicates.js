function onlyDuplicates(str) {
	let arr = str.split('')
	let res = []
	let obj = {}
	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] = 0;
		for (let j = arr.length - 1; j >= 0; j--) {
			if (arr[i] === arr[j]) {
				obj[arr[i]]++
			}
		} if (obj[arr[i]] > 1) {
			res.push(arr[i])
		}
	}
	return res.join('')
}
console.log(onlyDuplicates('abccdefee'))






/*
1) строку в массив
создаем объект {a: 0...}
2) пройтись по массиву, 
например первый элемент(a) с последним(e) - если они равны - увеличиваем на один. если не равны - не увеличиваем
первый элемент с предпоследним и тд (исключая элементы с одинаковым индексом)

3) возвращаем рез массив
 



assert.strictEqual(onlyDuplicates('abccdefee'), 'cceee', "onlyDuplicates('abccdefee')")
	assert.strictEqual(onlyDuplicates('hello'), 'll', "onlyDuplicates('hello')")
	assert.strictEqual(onlyDuplicates('colloquial'), 'ollol', "onlyDuplicates('colloquial')")
	assert.strictEqual(onlyDuplicates('foundersandcoders'), 'ondersndoders', "onlyDuplicates('foundersandcoders')")
*/