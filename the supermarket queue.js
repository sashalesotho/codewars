function queueTime(customers, n) {
	let cashiers = new Array(n).fill(0)
	for (let i = 0; i < customers.length; i++) {
	//	for (let j = 0; j < cashiers.length; j++) {
			cashiers[0] += customers[i]
			cashiers.sort((a, b) => a - b)
		
	}
	return cashiers.sort((a, b) => b - a)[0]
 }

 console.log(queueTime([1,2,3,4,5], 100))


 /* 
 	 assert.strictEqual(queueTime([], 1), 0);
    assert.strictEqual(queueTime([1,2,3,4], 1), 10);
    assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
    assert.strictEqual(queueTime([1,2,3,4,5], 100), 5);
 */