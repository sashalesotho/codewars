/*
        
('GTCTTAGTGTAGCTATGCATGC','GCATGCATAGCTACACTACGAC'),false);
('GCGCTGCTAGCTGATCGA','ACGTACGATCGATCAGCTAGCAGCGCTAC'),true);
('CGATACGAACCCATAATCG','CTACACCGGCCGATTATGG'),false);
('AGTCTGTATGCATCGTACCC','GGGTACGATGCATACAGACT'),true);
('GTCACCGA','TCGGCTGAC'),false);
('TAGCATCGCCAAATTATGCGTCAGTCTGCCCG','GGGCA'),true);
         */

function checkDNA(seq1, seq2) {
	let shortestStr = [seq1, seq2].sort((a, b) => a.length - b.length)[0];
	let longestStr = [seq1, seq2].sort((a, b) => a.length - b.length)[1];

	let res = shortestStr
		.split('')
		.map((el) =>
			el === 'A' ? 'T' : el === 'T' ? 'A' : el === 'C' ? 'G' : 'C'
		);

	let comply = res.reverse().join('');
	let regex = new RegExp(comply, 'g');
	return regex.test(longestStr);
}

console.log(checkDNA('TAGCATCGCCAAATTATGCGTCAGTCTGCCCG', 'GGGCA'));