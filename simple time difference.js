function solve(arr){
	if (arr.length === 1) {return '23:59'}
	let arrOfMin = arr.map(str => str.slice(0, 2) * 60 + +str.slice(-2)).sort((a, b) => a - b)
	let arrOfDiff = []; 
	for (let i = 0; i < arrOfMin.length-1; i++) {
		arrOfDiff.push(arrOfMin[i + 1] - arrOfMin[i] - 1)
	}
	
	arrOfDiff.push(arrOfMin[0] + 1440 - arrOfMin[arrOfMin.length-1] - 1)
	console.log(arrOfDiff)
	arrOfDiff.sort((a, b) => b - a)
	let res = arrOfDiff[0]
	let hr = parseInt(res/60)
	let min = res % 60
	return ('0' + hr).slice(-2) + ':' + ('0' + min).slice(-2)
}
console.log(solve(["21:14", "15:34", "14:51", "06:25", "15:30"]))

/*
Test.assertEquals(solve(["14:51"]), "23:59");
Test.assertEquals(solve(["23:00","04:22","18:05","06:24"]),"11:40");
Test.assertEquals(solve(["21:14", "15:34", "14:51", "06:25", "15:30"]),"09:10");
*/