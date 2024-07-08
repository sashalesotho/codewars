
function nextVersion(version){
	let arr = version.split('.').map(el => Number(el))
 arr[arr.length-1] += 1;
 for (let i = arr.length-1; i > 0; i--) {
	if (arr[i] > 9) {
		arr[i] = 0;
		arr[i-1] += 1
	}
 }
 return arr.join('.')
 }


 
 

 console.log(nextVersion("1.2.3.4.5.6.7.8"))
 /* 


 assert.strictEqual(nextVersion("1.2.3"),"1.2.4");
    assert.strictEqual(nextVersion("0.9.9"),"1.0.0");
    assert.strictEqual(nextVersion("1"),"2");
    assert.strictEqual(nextVersion("1.2.3.4.5.6.7.8"),"1.2.3.4.5.6.7.9");
    assert.strictEqual(nextVersion("9.9"),"10.0");
 */