/* 
		1. входные данные = число size
		2. выходные = массив массивов
		3. добавлять числа в массивы:
			количество массивов в массиве = size
			первый массив 1*1, 1*2 и так далее до size
			второй массив 2*2... до 2*size
			...

		*/

const multiplicationTable = function (size) {
	let res = [];
	for (let i = 0; i < size; i++) {
		res.push([]);
		for (let j = 0; j < size; j++) {
			res[i].push((i + 1) * (j + 1));
		}
	}
	return res;
};
console.log(multiplicationTable(5));