/*
           123 => false
           1 => false
           2121 => true
           1230 => true

           1) входные данные = число, выходные = true/false
           2) число в строку, строку в массив
           3) проходимся по строке, если число четное то удваиваем с первого элемента через один, если число нечетное – со второго
           4) складываем все цифры массива
           5) если делится на 10 без остатка = true


           */

			  function validate(n) {
				let arr = String(n).split("");
				const arr1 = [];
				const arr2 = [];
				if (arr.length % 2 === 0) {
				  for (let i = 0; i < arr.length; i += 2) {
					 arr1.push(arr[i] * 2 <= 9 ? arr[i] * 2 : arr[i] * 2 - 9);
				  }
				  for (let i = 1; i < arr.length; i += 2) {
					 arr2.push(+arr[i]);
				  }
				}
				if (arr.length % 2 !== 0) {
				  for (let i = 1; i < arr.length; i += 2) {
					 arr1.push(arr[i] * 2 <= 9 ? arr[i] * 2 : arr[i] * 2 - 9);
				  }
				  for (let i = 0; i < arr.length; i += 2) {
					 arr2.push(+arr[i]);
				  }
				}
				return [...arr1, ...arr2].reduce((acc, el) => acc + el, 0) % 10 === 0;
			 }
	 
			 console.log(validate(1230));