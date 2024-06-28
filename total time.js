/*
        	1) вх данные = массив строк hh:mm:ss
        		вых данные = строка d days h hours m minutes s seconds
        	2) переводим элементы массива в секунды:
        		-
        	3) складываем элементы массива
        	4) общие секунды переводим в дни часы минуты секунды
        	5) формируем строку


        (['60']), '1 minute');
          (['25:01:01']), '1 day, 1 hour, 1 minute, 1 second');
        (['50:02:02']), '2 days, 2 hours, 2 minutes, 2 seconds');
          (['01:20','03:10']), '4 minutes, 30 seconds');
          (['00:50','00:30']), '1 minute, 20 seconds');
          (['01:20:00','40:00']), '2 hours');
          (['12:00:00','10:00:00','02:00:00']), '1 day');
          (['24:00:00','24:00:00','07']), '2 days, 7 seconds');
        	*/

function totalTime(arr) {
	let newArr = arr.map((el) => el.replace(/^0+/, '').split(':'));
	//[['1', '20'], ['3', '10']
	let seconds = newArr
		.map((array) => array[array.length - 1])
		.reduce((acc, el) => acc + +el, 0);
	//['20', '10']
	let minutes = newArr
		.map((array) => array[array.length - 2])
		.reduce((acc, el) => acc + +el, 0);
	// ['1', '3']
	let hours = newArr
		.map((array) => array[array.length - 3])
		.reduce((acc, el) => acc + +el, 0);
	let resSec = seconds + minutes * 60 + hours * 3600;
	let resDays = Math.trunc(resSec / 86400);
	let resHours = Math.trunc(resSec / 3600) - resDays * 24;
	// let resMinutes = Math.trunc(resSec / 60) - resDays * 24 - resHours *
	return resHours;
}
console.log(totalTime(['23:00:00', '24:00:00']));