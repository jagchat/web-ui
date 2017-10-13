declare var $: any;

//sets - list of non-duplicate values
//NOTE: changed package.json for TS -> ES6 -> Babel -> ES5
$(function () {

	let s = new Set();
	s.add(1);
	s.add(3);
	s.add(2);

	console.log(`count = ${s.size}`); //gives 3
	console.log(`contains 2? ${s.has(2)}`);
	//console.log(`2nd item: ${s[1]}`); //NOT going to work.  Set is not an array

	console.log(`Traversing..`);
	s.forEach(function (v, key, ownerSet) {
		console.log(v); //for primitives, value and key are same
	})

	//forEach with custom context (modifying "this")
	let o = {
		display(v) {
			console.log(v);
		},

		process(set) {
			set.forEach(function (v, key, ownerSet) {
				this.display(v);
			}, this); //can set current object (this) to forEach

			set.forEach((v, key, ownerSet) => this.display(v)); //just another (easier) way
		}
	};
	o.process(s);

	let ars2 = [1, 2, 3, 4, 5, 5, 5, 5];
	let s2 = new Set(ars2); //can create set out of an array
	console.log(s2); //displays 1,2,3,4,5 (no repetition)

	let s3 = [...new Set(ars2)]; //array to set to array (removes duplicates)..but works only in ES6..not in TS
	console.log(`s3: ${s3}`);

	s2.delete(3);
	console.log(s2);
	s2.clear(); //removes all

	let ar = [...s]; //works in ES6...not in TS	(converts set to array)
	//let ar = Array.from(s); //alternative in TS
	console.log(ar);

	let a = [...s][0]; //works in ES6...not in TS
	//let a = Array.from(s)[0]; //works in ES6...not in TS
	console.log(a);

	let ar1 = new Set([1, 2, 3]);
	let ar2 = new Set([4, 3, 2]);

	//union (all without repetition)
	let uSet = new Set([...ar1, ...ar2]);
	console.log(`Union Set Size: ${uSet.size}`);
	console.log(uSet);

	//Intersect (common)
	let iSet = new Set([...ar1].filter(x => ar2.has(x)));
	console.log(`Intersect Set Size: ${iSet.size}`);
	console.log(iSet);

	//Minus (differnce from ar1)
	let mSet = new Set([...ar1].filter(x => !ar2.has(x)));
	console.log(`Differnce (minus) Set Size: ${mSet.size}`);
	console.log(mSet);
});