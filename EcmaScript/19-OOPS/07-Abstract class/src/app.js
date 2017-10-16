import $ from 'jquery'

// Abstract class
class Parent {
	constructor(m = 0, n = 0) {
		if (new.target === Parent) {
			throw new Error("'Parent' is an abstract class.  Cannot create instance of it");
		}
		this.a = m;
		this.b = n;
	}
}

class Child extends Parent {
	sum() {
		return this.a + this.b;
	}
}

$(function () {

	let o1 = new Child(10, 20);
	console.log(`Sum = ${o1.sum()}`);

	//let o2 = new Parent(); //throws error

});