import $ from 'jquery'

$(function () {
	let s = new Set();
	var o = {
		empno: 1001,
		ename: 'Jag'
	};
	s.add(o);

	console.log(s.has(o)); //true (compares reference)
	console.log(s.has({
		empno: 1001,
		ename: 'Jag'
	})); //false (compares reference)


	s.forEach((v, k) => {
		console.log(v); //value and key are same in sets
		console.log(v === k); //true
	});


});