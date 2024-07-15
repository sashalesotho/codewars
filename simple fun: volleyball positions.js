function volleyballPositions(formation, k) {
	if (k % 6 === 0) {
		return formation;
	}
	k = k % 6;
	let players = {
		player1: formation[0][1],
		player2: formation[1][2],
		player3: formation[3][2],
		player4: formation[2][1],
		player5: formation[3][0],
		player6: formation[1][0]
	}
	let res = {
		player1: players[`player${Number((1 + k > 6) ? (k + 1 - 6) : (1 + k))}`],
		player2: players[`player${Number((2 + k > 6) ? (k + 2 - 6) : (2 + k))}`],
		player3: players[`player${Number((3 + k > 6) ? (k + 3 - 6) : (3 + k))}`],
		player4: players[`player${Number((4 + k > 6) ? (k + 4 - 6) : (4 + k))}`],
		player5: players[`player${Number((5 + k > 6) ? (k + 5 - 6) : (5 + k))}`],
		player6: players[`player${Number((6 + k > 6) ? (k + 6 - 6) : (6 + k))}`]
	}
	return ([
		["empty", `${res['player1']}`, "empty"],
		[`${res['player6']}`, "empty", `${res['player2']}`],
		["empty", `${res['player4']}`, "empty"],
		[`${res['player5']}`, "empty", `${res['player3']}`]
	])
}
console.log(volleyballPositions([
	["empty", "Player5", "empty"],
	["Player4", "empty", "Player2"],
	["empty", "Player3", "empty"],
	["Player6", "empty", "Player1"]
], 2))
/* 
вх - 2d массив строк текущей позиции, k - количество подач
вых - 2d миссив строк изначальных позиций
после каждой подачи смещаются по часовой стрелке
после 6 подач = на изначальных местах
1) если k % 6 === 0 возвращаем тот же массив
2) k % 6 = n раз перемещаем
3) определяем местонахождение каждого игрока
4) меняем местонахождение каждого игрока 
5) возвращаем новый массив

var formation= [
["empty","Player5","empty"], 
["Player4","empty","Player2"], 
["empty","Player3","empty"], 
["Player6","empty","Player1"]],
k= 2

formation= 
[["empty","player 3","empty"], 
 ["player 3","empty","player"], 
 ["empty","4","empty"], 
 ["5","empty","42"]]
k= 1000000

*/