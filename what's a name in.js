
      /*
        ('Across the rivers', 'chris'), true)
          ('Next to a lake', 'chris'), false)
          ('Under a sea', 'chris'), false)
          ('A crew that boards the ship', 'chris'), false)
          ('A live son', 'Allison'), false)

      ВОЗВРАЩАЕТ ПОКА ЛИШНЕЕ ПОТОМУ ЧТО -1 КОГДА НЕ НАХОДИТ (ХОЧУ ВЕРНУТЬ ТОЛЬКО СОВПАДЕНИЯ )
        БЕСКОНЕЧНЫЙ ЦИКЛ	*/

		  function nameInStr(str, name) {
			const lowerStr = str.toLowerCase();
			const lowerName = name.toLowerCase();
			let idx = 0;
			for (let i = 0; i < lowerStr.length; i++) {
			  if (lowerStr[i] === lowerName[idx]) {
				 idx++;
			  }
			}
			return idx === name.length;
		 }
		 console.log(nameInStr("Across the rivers", "chris"));
	  