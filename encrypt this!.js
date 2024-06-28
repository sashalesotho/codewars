/*
            1. получаю строку
            2. перевожу строку в массив слов через пробел
            3. каждый элемент массива:
            (условие что эти символы есть?)
            		1 символ => ascii
            		2 символ => в 4ый
            		4 символ => во 2й
            4. превращаю в строку

            65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
            */

let encryptThis = function (text) {
	return text
		.split(' ')
		.map(
			(el) =>
				`${el[0].charCodeAt()}${el.slice(-1) ?? ''}${
					el.slice(2, -1) ?? ''
				}${el[1] ?? ''}`
		)
		.join(' ');
};
console.log(encryptThis('lived'));

				
