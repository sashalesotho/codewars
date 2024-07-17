function match(job, candidates) {
	// Which of these candidates match this job?
	let newArr = []
	for (let candidate of candidates) {
		if (candidate.desiresEquity === true && job.equityMax > 0 || (candidate.desiresEquity === false)) {
			newArr.push(candidate)
		}
	}

	let res = newArr.filter((candidate) => {
		let sities = [candidate.currentLocation, ...candidate.desiredLocations]
		for (let city of sities) {
			if (job.locations.includes(city)) {
				return true
			}
		}
	})
	return res
}
/* 
вх = кандидаты - массив объектов, работа - объект
вых = массив кандидатов, подходящих для работы
по месту и наличию партнерства
1) фильтруем массив кандидатов по наличию партнерства
2) получившийся массив фильтруем по содержанию в них места работы 
3) возвращаем массив
*/
const job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] };
const job2 = { equityMax: 0, locations: ['New York', 'Kentucky'] };
candidates1 = [{
	desiresEquity: true,
	currentLocation: 'New York',
	desiredLocations: []
}, {
	desiresEquity: false,
	currentLocation: 'San Francisco',
	desiredLocations: ['Kentucky', 'New Mexico']
}];

console.log(match(job2, candidates1))
