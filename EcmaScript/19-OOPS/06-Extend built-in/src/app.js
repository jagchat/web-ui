import $ from 'jquery'

// Extend built-in Classes
// Can do this for Array, Set, Map, Promise, Typed Arrays etc.
class MyArray extends Array {
	sum() {
		let s = 0;
		this.forEach(o => s += o);
		return s;
	}
}

$(function () {
	let o1 = new MyArray(10, 20, 30, 40)
	console.log(`Sum = ${o1.sum()}`);
});