
/*
        ('Across the rivers', 'chris'), true)
          ('Next to a lake', 'chris'), false)
          ('Under a sea', 'chris'), false)
          ('A crew that boards the ship', 'chris'), false)
          ('A live son', 'Allison'), false)

			 0) регистр!
			 1) искать букву имени в строке (цикл по индексам букв имени)
			 2) добавлять найденную букву в массив
			 3) искать вторую букву с того места где нашлась первая (обрезаем строку)
			 4) сравниваю результат (массив превращаю в строку) с именем
			 */

function nameInStr(str, name) {
	str = str.toLowerCase();
	name = name.toLowerCase();
	let findLetters = [];
	
	for (let i = 0; i<name.length; i++) {
		if (str.includes(name[i])) {
			findLetters.push(name[i]);
			str = str.slice(str.indexOf(name[i])+1);
		}
		
	}
	return findLetters.join('') === name;
	
}
console.log(nameInStr('Across the rivers', 'Chris'));
