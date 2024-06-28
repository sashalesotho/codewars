/*
		1. входные данные = число (+-0)
		2. выходные данные = строка 
		3. нечетные заменить на нечетные в -
		4. заменить -- на -
		5. в начале строки и в конце убрать -
   	274 -> '2-7-4'
		6815 -> '68-1-5'
		-28369, "28-3-6-9"
            */
function dashatize(num) {
	return String(num)
		.replace(/([13579])/g, '-$1-')
		.replace(/--/g, '-')
		.replace(/^-/g, '')
		.replace(/-$/, '');
} 
console.log(dashatize(-1));