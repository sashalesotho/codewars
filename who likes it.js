function likes(names) {
	if (names.length === 0) {
		return 'no one likes this'
	}
	if (names.length === 1) {
		return `${names[0]} likes this`
	}
	if (names.length === 2) {
		return `${names[0]} and ${names[1]} like this`
	}
	if (names.length === 3) {
		return `${names[0]}, ${names[1]} and ${names[2]} like this`
	}
	if (names.length >= 4) {
		return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
	}
}

console.log(likes(['Max', 'John', 'Mark']))

/* 
функция принимает массив имен лайкнувших и возвращает строку
1) если длина массива = 0, возвращаем 'no one likes this'
2) если длина массива = 1, возвращаем 'names[0] likes this'
3) если длина массива = 2, возвращаем два имени лайк..
4) если длина массива = 3, возвращаем три имени
5) 4 и больше - два имени и сколько остальных
)

assert.strictEqual(likes([]), 'no one likes this');
	assert.strictEqual(likes(['Peter']), 'Peter likes this');
	assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
	assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
	assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')
	*/