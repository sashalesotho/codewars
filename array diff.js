function arrayDiff(a, b) {
	for (let i = 0; i < b.length; i++) {
		 a = a.filter(el => el !== b[i])
	}
	return a
}
console.log(arrayDiff([1,2,2], [1]))

/*
вх - 2 массива чисел
выч - первый массив чисел без всех вхождений элементов второго массива
1) фильтруем a по !b[i]

	assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
	assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
	assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
	assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
	assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
	assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
 */