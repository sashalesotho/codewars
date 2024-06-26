/*
      1. входные данные = строка
      2. выходные = строка = слово набравшее наиобольшее количество очков
      3. преобразую строку в массив
      4. прохожусь по массиву, каждому слову считаю очки
      		цикл по массиву слов
      		в нем цикл по буквам слова, находит каждую букву в строке letters и возвращает ее индекс, суммирует индексы букв

      5. сортирую по убыванию



      'man i need a taxi up to ubud'), 'taxi'
      */

function high(x) {
	let letters = '1abcdefghijklmnopqrstuvwxyz';
	let arr = x.split(' ');
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		let word = arr[i];
		let score = word.split('').reduce((score, l) => {
			return (score += letters.indexOf(l));
		}, 0);
		let obj = { word, score };
		res.push(obj);
	}
	return res.sort((a, b) => b.score - a.score)[0].word;
}
console.log(high('man i need a taxi up to ubud'));