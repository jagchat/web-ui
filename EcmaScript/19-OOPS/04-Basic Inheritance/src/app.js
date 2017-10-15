import $ from 'jquery'

// Inheritance
class Parent {

	constructor(m = 0, n = 0) {
		this.a = m;
		this.b = n;
	}

	//method
	sum() {
		return this.a + this.b;
	}

}

class Child extends Parent {
	constructor(p = 0, q = 0) {
		super(p, q); //initializes 'this'. Cannot use 'this' before 'super'
		//Parent.call(this, p, q); //ES5
	}
}

class Child2 extends Parent {
	// //if no constructor is specified, it goes with this, by default:
	//constructor(...args) { super(...args); } //you don't need this defined. It is default

	//override / shadow
	sum() {
		//return this.a + this.b + 10;
		//or
		return super.sum() + 10;
	}
}

$(function () {

	let o1 = new Parent(10, 20)
	console.log(`Sum = ${o1.sum()}`); //30

	let o2 = new Child(0, 0)
	console.log(`Sum = ${o2.sum()}`); //0

	let o3 = new Child(30, 40)
	console.log(`Sum = ${o3.sum()}`); //70

	let o4 = new Child2(0, 0)
	console.log(`Sum = ${o4.sum()}`); //10

	let o5 = new Child2(30, 40)
	console.log(`Sum = ${o5.sum()}`); //80

	console.log(`o1 instanceof Parent: ${o1 instanceof Parent}`); //true
	console.log(`o2 instanceof Parent: ${o2 instanceof Parent}`); //true
	console.log(`o2 instanceof Child: ${o2 instanceof Child}`); //true
});