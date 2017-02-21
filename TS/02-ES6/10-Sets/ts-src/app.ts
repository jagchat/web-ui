declare var $:any;

//sets - list of non-duplicate values
//NOTE: need to enable es2015 in lib
$(function(){	

	let s = new Set();
	s.add(1);
	s.add(3);
	s.add(2);

	console.log(`count = ${s.size}`); //gives 3
	console.log(`contains 2? ${s.has(2)}`);

	console.log(`Traversing..`);
	s.forEach(function(v){
		console.log(v);
	})

	let s2 = new Set([1,2,3,4,5,5,5,5]); //array to set
	console.log(s2); //displays 1,2,3,4,5 (no repetition)

	s2.delete(3);
	console.log(s2);
	s2.clear(); //removes all

	//let ar = [...s]; //works in ES6...not in TS
	let ar = Array.from(s); //alternative in TS
	console.log(ar);
});