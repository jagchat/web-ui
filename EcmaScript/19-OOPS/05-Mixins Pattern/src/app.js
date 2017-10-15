import $ from 'jquery'

// Mixins Pattern

//-->mixin 1
let SumMixin = {
	sum() {
		return this.a + this.b;
	}
}

//-->mixin 2
let MultiplyMixin = {
	multiply() {
		return this.a * this.b;
	}
}

//-->class to accept mixins
function baseClass(...mixins) {
	var base = function () {};
	Object.assign(base.prototype, ...mixins);
	return base;
}

//--> class supporting mixins
class Sample extends baseClass(SumMixin, MultiplyMixin) {

	constructor(m = 0, n = 0) {
		super();
		this.a = m;
		this.b = n;
	}

}


$(function () {

	let o1 = new Sample(0, 0)
	console.log(`Sum = ${o1.sum()}`); //0
	console.log(`Multiply = ${o1.multiply()}`); //0

	let o2 = new Sample(30, 40)
	console.log(`Sum = ${o2.sum()}`); //70
	console.log(`Multiply = ${o2.multiply()}`); //1200

});