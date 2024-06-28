

/* 
1) строку в массив, беру первый элемент массива каждого аргумента и делю его на последний элемент массива
2) сравниваю результаты
3) если 1 > 2 возвращаю true, иначе false
'1:3','1:2'
*/


function mostLikely(prob1,prob2){
	let arr1 = prob1.split(':');
	let res1 = arr1[0] / arr1[arr1.length-1];
	let arr2 = prob2.split(':');
	let res2 = arr2[0] / arr2[arr2.length-1];
	return res1 > res2;
}

console.log(mostLikely('20:13','0:3'));

