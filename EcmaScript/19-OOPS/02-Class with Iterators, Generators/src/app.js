import $ from 'jquery'

// Iterable class
class Sample {

	constructor(m = 0, n = 0) {
		this.a = m;
		this.b = n;
	}

	//--> method 1 (iterator)
	// next() {
	// 	return {
	// 		done: this.data.length === 0,
	// 		value: this.data.pop()
	// 	}
	// }

	// [Symbol.iterator]() { //iterator
	// 	this.data = [this.a, this.b];
	// 	return this;
	// }

	//--> method 2 (iterator)
	// [Symbol.iterator]() {
	// 	let data = [this.a, this.b];
	// 	return { //iterator
	// 		next() {
	// 			return {
	// 				done: data.length === 0,
	// 				value: data.pop()
	// 			}
	// 		}
	// 	}
	// }

	// //another way
	// *[Symbol.iterator]() { //iterator & generator
	// 	yield this.a;
	// 	yield this.b;
	// }

	//another way
	*[Symbol.iterator]() { //iterator & generator
		let data = [this.a, this.b];
		for (let i of data) {
			yield i;
		}
	}

	// * values() { //generator
	// 	yield this.a;
	// 	yield this.b;
	// }

	// //generator with parameters
	// * values(i) { //generator
	// 	yield this.a + i;
	// 	yield this.b + i;
	// }

	// //generator (from iterator)
	// * values() { 
	// 	let data = [this.a, this.b];
	// 	for (let i of data) {
	// 		yield i;
	// 	}
	// }

	//method
	sum() {
		return this.a + this.b;
	}

}

$(function () {

	let o = new Sample(5, 6);
	console.log(`Sum = ${o.sum()}`);

	for (let v of o) { //can use for..of loop on object now
		console.log(v);
	}

	let [x, y] = [...o]; //object can be destructured now
	console.log(`x = ${x}, y = ${y}`);

	var iterator1 = o[Symbol.iterator](); //iterator object
	console.log(iterator1.next());
	console.log(iterator1.next());
	console.log(iterator1.next());

	for (let v of o.values()) { //using generator
		console.log(v);
	}

	var iterator2 = o.values(); //generator with iterator object
	console.log(iterator2.next());
	console.log(iterator2.next());
	console.log(iterator2.next());

});