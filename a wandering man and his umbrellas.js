// given a list of [location, weather] travels
// return an object of {location: initialUmbrellas}
function requiredUmbrellas(travels) {
	travels.unshift(['home', 'sunny']);
	let arrOfPlaces = travels.map(([place]) => [place, 0]);
	let requiredUmbrObj = Object.fromEntries(arrOfPlaces);
	let reserveUmbrObj = Object.fromEntries(arrOfPlaces);

	for (let i = 1; i < travels.length; i++) {
		if (travels[i][1] === 'sunny' && travels[i - 1][1] === 'rainy') {
			reserveUmbrObj[travels[i - 1][0]] += 1
		}
		if (travels[i][1] === 'rainy' && travels[i - 1][1] === 'sunny') {
			if (reserveUmbrObj[travels[i - 1][0]] === 0) {
				requiredUmbrObj[travels[i - 1][0]] += 1
			} else {
				reserveUmbrObj[travels[i - 1][0]] -= 1
			}
		}
	}
	return requiredUmbrObj;
}

console.log(requiredUmbrellas([
	["work", "rainy"],
	["home", "sunny"],
	["work", "rainy"],
	["gym", "rainy"],
	["work", "sunny"],
	["shop", "rainy"],
	["work", "sunny"],
	["shop", "rainy"]
]))

/*
1) вх - массив массивов содержащих место и погоду, вых - объект {место: количество необходимых зонтов}
2) создать из массива два объекта - количество необходимых зонтов и количество оставленных зонтов (сначала убрать повторяющиеся места)
3) пройтись по массиву и в зависимости от условий добавить зонтов в тот или другой объект:
	а) текущее место - rainy, предыдущее rainy - ничего
	б) текущее место - rainy, предыдущее sunny - если есть оставленный зонт, минусуем его, если нет - плюсуем зонт к необходимым в ПРЕДЫДУЩЕМ месте
	в) текущее место - sunny, предыдущее rainy - добавляем предыдущему месту оставленный зонт
	г) текущее место - sunny, предыдущее sunny - ничего
4) вернуть объект с необходимыми зонтами

describe("no travels", function() {
  it("returns an object with zero umbrellas at home", function() {
	 assert.deepEqual(requiredUmbrellas([]), {
		"home": 0
	 });
  });
});

describe("sunny travels", function() {
  it("does not require umbrellas", function() {
	 assert.deepEqual(requiredUmbrellas([
		["work", "sunny"],
		["shop", "sunny"],
		["home", "sunny"]
	 ]), {
		"work": 0,
		"shop": 0,
		"home": 0
	 });
  })
})

describe("rainy travels", function() {
  it("reuses umbrellas", function() {
	 assert.deepEqual(requiredUmbrellas([
		["work", "rainy"],
		["shop", "rainy"],
		["home", "rainy"]
	 ]), {
		"work": 0,
		"shop": 0,
		"home": 1
	 });
  })

  it("keeps track of umbrellas left around", function() {
	 assert.deepEqual(requiredUmbrellas([
		["work", "rainy"],
		["home", "sunny"],
		["work", "rainy"],
		["gym",  "rainy"],
		["work", "sunny"],
		["shop", "rainy"],
		["work", "sunny"],
		["shop", "rainy"]
	 ]), {
		"work": 1,
		"shop": 0,
		"gym":  0,
		"home": 2
	 });
  })
})*/