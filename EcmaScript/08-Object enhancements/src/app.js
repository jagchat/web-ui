import $ from 'jquery'

$(function () {

	let empno = "1001",
		ename = "Jag";

	// //the following ES5 can be simplified
	// let o = {
	// 	empno: empno,
	// 	ename: ename,
	// 	print: function(){
	// 		console.log(`Empno = ${this.empno}, Ename = ${this.ename}`);			
	// 	}		
	// };
	// o.print();
	//or

	//ES6 way
	let o = {
		empno, //when both property name and value being assigned are same, just use name
		ename,
		print() { //no need to use "function()" (aka concise method)
			console.log(`Empno = ${this.empno}, Ename = ${this.ename}`);
		}
	};
	o.print();

	//computed property names
	let nm = "name";
	let o2 = {
		["first" + nm]: "Jag", //property name is "firstname"
		["last" + nm]: "Pulakhandam", //property name is "lastname"

		print() {
			console.log(`First Name: ${this.firstname}, Last Name: ${this.lastname}`);
		}
		//or
		//print() {console.log(`First Name: ${this["firstname"]}, Last Name: ${this["lastname"]}`);}
	};
	o2.print();
	//or
	console.log(`First Name: ${o2.firstname}, Last Name: ${o2.lastname}`);
	//also this way (better use square brackets for computed property names)
	console.log(`First Name: ${o2["firstname"]}, Last Name: ${o2["lastname"]}`);

	//object comparison (using Object.is instead of == or ===)
	//-------------------
	console.log(Object.is(5, 5)); //returns true
	console.log(NaN == NaN); //returns false (supposed to be true)
	console.log(NaN === NaN); //returns false (supposed to be true)
	console.log(Object.is(NaN, NaN)); //returns true (recommended)

	let o3 = {};
	let o4 = {};
	console.log(Object.is(o3, o4)); //returns false (does not go after objects, goes after values)


	//copying/merging properties (like mixin) 
	let o5 = {
		name: 'Jag',
		sal: 2300
	};
	let o6 = {
		sal: 3400,
		moreInfo: {
			deptno: 10
		}
	}
	Object.assign(o5, o6);
	console.log(o5); //o6 gets merged into o5


	//modifying prototype on the fly
	let oEmp = {
		print() {
			console.log(`Employee Name: ${this.name}`);
		}
	};
	let oCus = {
		print() {
			console.log(`Customer Name: ${this.name}`);
		}
	};
	let o7 = {
		name: "Jag"
	};
	Object.setPrototypeOf(o7, oEmp);
	o7.print(); //prints 'Employee Name...'
	Object.setPrototypeOf(o7, oCus);
	o7.print(); //prints 'Customer Name...'

});