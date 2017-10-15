import $ from 'jquery'

let multiplyMethodName = "multiply"; //dynamic method names
class Sample {

	// //default constructor
	// //only one constructor definition is acceptable
	// constructor(){
	// 	this.a = 0;
	// 	this.b = 0;
	// }

	//constructor with parameters and defaults
	constructor(m = 0, n = 0) {
		this.a = m;
		this.b = n;
	}

	//method
	sum() {
		return this.a + this.b;
	}

	//computed property
	get m() { //getter (computed) property
		return this.a * 10;
	}
	set m(value) { //setter (computed) property
		this.a = value * 10;
	}

	//computed method name
	//can also be used for computer property names
	[multiplyMethodName]() {
		return this.a * this.b;
	}

	['just' + 'Division']() {
		return this.a / this.b;
	}
}

$(function () {

	//let o = new Sample() //defaults to zeroes in a and b
	//or
	let o = new Sample(5, 6); //provide values for a and b

	console.log(`Sum = ${o.sum()}`);
	o.a = 10;
	o.b = 20;
	console.log(`Sum = ${o.sum()}`);

	console.log(`m = ${o.m}`); //100
	o.m = 40;
	console.log(`m = ${o.m}, a = ${o.a}`); //4000, 400

	console.log(`multiply = ${o.multiply()}`);
	console.log(`Division = ${o.justDivision()}`);
});