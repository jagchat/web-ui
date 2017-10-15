import $ from 'jquery'

// Stacic members
class Sample {

	constructor() {
		this.a = 0;
		this.b = 0;
	}

	//method
	sum() {
		return this.a + this.b;
	}

	//static method
	static createSampleObject(m = 0, n = 0) {
		let o = new Sample();
		o.a = m;
		o.b = n;
		return o;
	}
}

$(function () {

	let o1 = Sample.createSampleObject();
	console.log(`Sum = ${o1.sum()}`);

	let o2 = Sample.createSampleObject(5, 6);
	console.log(`Sum = ${o2.sum()}`);

});