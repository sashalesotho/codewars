/*
				 


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
	if (arr.length === 0) return '';
	let arrOfArr = arr.map(str =>
		str.split(':')).map(arr => arr.map(str => str.replace(/^0/g, '')))
	let resSecArr = arrOfArr.map(arr => Number(arr[arr.length-1] ?? 0) + Number(arr[arr.length-2] ?? 0) * 60 + Number(arr[arr.length-3] ?? 0) * 3600 + Number(arr[arr.length-4] ?? 0) * 3600 * 24)
	let resSec = resSecArr.reduce((acc, el) => acc + el, 0);
	let days = Math.trunc(resSec / (3600 * 24));
	let daysPhrase = days === 1 ? 'day' : 'days'
	let hours = Math.trunc((resSec - days * 3600 * 24) / 3600)
	let hoursPhrase = hours === 1 ? 'hour' : 'hours'
	let minutes = Math.trunc((resSec - days * 3600 * 24 - hours * 3600) / 60)
	let minutesPhrase = minutes === 1 ? 'minute' : 'minutes'
	let seconds = Math.trunc(resSec - days * 3600 * 24 - hours * 3600 - minutes * 60)
	let secondsPhrase = seconds === 1 ? 'second' : 'seconds'
	let res = [(days ? days + ' ' + daysPhrase : null), (hours ? hours + ' ' + hoursPhrase : null), (minutes ? minutes + ' ' + minutesPhrase : null), (seconds ? seconds + ' ' + secondsPhrase : null)].filter(el => el !== null)
return res.length ? res.join(', ') : '0';
}
console.log(totalTime(['07', '16']));

