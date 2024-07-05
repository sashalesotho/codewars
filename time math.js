function timeMath(time1, op, time2) {
	let arr1 = time1.split(':');
	let sec1 = Number(arr1[2].replace(/^0/, ''))
	let min1 = Number(arr1[1].replace(/^0/, ''))
	let hr1 = Number(arr1[0].replace(/^0/, ''))
	let arr2 = time2.split(':');
	let sec2 = Number(arr2[2].replace(/^0/, ''))
	let min2 = Number(arr2[1].replace(/^0/, ''))
	let hr2 = Number(arr2[0].replace(/^0/, ''))
	let resSec;
	let resMin;
	let resHr;
	if (op === '+') {
		if (sec1 + sec2 > 59) {
			resSec = sec1 + sec2 - 60;
			min1 = min1 + 1
		}
		else {
			resSec = sec1 + sec2
		}
		if (min1 + min2 > 59) {
			resMin = min1 + min2 - 60;
			hr1 = hr1 + 1
		}
		else {
			resMin = min1 + min2;
		}
		if (hr1 + hr2 > 23) {
			resHr = hr1 + hr2 - 24
		}
		else {
			resHr = hr1 + hr2
		}
	}
	if (op === '-') {
		if (sec1 < sec2) {
			resSec = sec1 - sec2 + 60;
			min1 = min1 - 1;
		}
		else {
			resSec = sec1 - sec2
		}
		if (min1 < min2) {
			resMin = min1 - min2 + 60;
			hr1 = hr1 - 1;
		}
		else {
			resMin = min1 - min2
		}
		if (hr1 < hr2) {
			resHr = hr1 - hr2 + 24;
		}
		else {
			resHr = hr1 - hr2;
		}

	}
	
return ('0' + resHr).slice(-2) + ':' + ('0' + resMin).slice(-2) + ':' + ('0' + resSec).slice(-2);
 }

console.log(timeMath('13:48:52', '-', '13:47:53'))
 /* 


 it("Add", () => {
    assert.strictEqual(timeMath('01:24:31', '+', '02:16:05'), '03:40:36');
    assert.strictEqual(timeMath('01:24:31', '+', '22:35:28'), '23:59:59');
  });

  it("Subtract", () => {
    assert.strictEqual(timeMath('11:24:31', '-', '11:24:31'), '00:00:00');
    assert.strictEqual(timeMath('11:24:31', '-', '03:15:28'), '08:09:03');
  });

  it('Carry +', () => {
    assert.strictEqual(timeMath('00:00:01', '+', '23:59:59'), '00:00:00');
    assert.strictEqual(timeMath('13:48:52', '+', '13:47:53'), '03:36:45');
  });

  it('Carry -', () => {
    assert.strictEqual(timeMath('00:00:01', '-', '00:00:02'), '23:59:59');
    assert.strictEqual(timeMath('13:48:52', '-', '13:47:53'), '00:00:59');
  });
  */