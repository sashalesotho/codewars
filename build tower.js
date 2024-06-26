/*
            1. входные данные - число этажей nFloors
            2. выходные - массив групп звездочек
            3. если nFloors = 1, то звездочка без пробелов
            		последняя строка всегда без пробелов в начале и конце (trim?)
            4. если nFloors > 1
            		цикл до nFloors в каждой итерации повторяет звездочку нечетное количество раз?
        !!! определяем длину последней строки (nFloors*2-1)
        дополняем все строки пробелами сзади и спереди до этой длины


             ["  *  "," *** ","*****"]
             [
              "     *     ",
              "    ***    ",
              "   *****   ",
              "  *******  ",
              " ********* ",
              "***********"
            ]
            */

				function towerBuilder(nFloors) {
					let arr = [];
					for (let i = 1; i <= nFloors * 2; i += 2) arr.push("*".repeat(i));
					let lenstr = nFloors * 2 - 1;
					return arr.map(
					  (str) =>
						 `${" ".repeat((lenstr - str.length) / 2)}${str}${" ".repeat(
							(lenstr - str.length) / 2
						 )}`
					);
				 }
				 console.log(towerBuilder(6));
