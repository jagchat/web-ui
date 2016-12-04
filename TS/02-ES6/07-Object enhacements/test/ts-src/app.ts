declare var $:any;

$(function(){

	let empno = "1001", ename = "Jag";

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

	// //ES6 way
	// let o = {
	// 	empno, //when both property name and value being assigned are same, just use name
	// 	ename,
	// 	print() { //no need to use "function()" (aka concise method)
	// 		console.log(`Empno = ${this.empno}, Ename = ${this.ename}`);			
	// 	}		
	// };
	// o.print();

	// //computed property names
	// let nm = "name";
	// let o = {
	// 	["first" + nm] : "Jag", //property name is "firstname"
	// 	["last" + nm]: "Pulakhandam", //property name is "lastname"
		
	// 	print() {console.log(`First Name: ${this.firstname}, Last Name: ${this.lastname}`);}
	// 	//or
	// 	//print() {console.log(`First Name: ${this["firstname"]}, Last Name: ${this["lastname"]}`);}
	// };
	// o.print();
	// //or
	// //type safety does not allow this, but works	
	// console.log(`First Name: ${o.firstname}, Last Name: ${o.lastname}`); 
	// //use type assertion to make it work everywhere
	// console.log(`First Name: ${(<any>o).firstname}, Last Name: ${(<any>o).lastname}`); 
	// //also this way (better use square brackets for computed property names)
	// console.log(`First Name: ${o["firstname"]}, Last Name: ${o["lastname"]}`);

	//object comparison (using Object.is instead of == or ===)
	//-------------------
	
	//console.log(Object.is(5, 5)); //type safety does not allow this, but works
	//console.log((<any>Object).is(5, 5)); //works with type assertion (or use compiler option 'lib', if using TS 2.0+, as included in this example)

	// console.log(NaN == NaN); //returns false (supposed to be true)
	// console.log(NaN === NaN); //returns false (supposed to be true)
	// console.log((<any>Object).is(NaN, NaN)); //returns true (recommended)

	// let o1 = {		
	// };
	// let o2 = {
	// };	
	// console.log(Object.is(o1, o2)); //returns false (does not go after objects, goes after values)


	// //copying/merging properties (like mixin) 
	// let o1 = {
	// 	name: 'Jag',
	// 	sal: 2300
	// };
	// let o2 = {
	// 	sal: 3400,
	// 	moreInfo: {
	// 		deptno: 10
	// 	}
	// }
	// Object.assign(o1, o2); //use 'any' or specifiy lib:es2015 in tsconfig
	// console.log(o1); //o2 gets merged into o1


	// //modifying prototype on the fly
	// let oEmp = {
	// 	print(){
	// 		console.log(`Employee Name: ${this.name}`);
	// 	}
	// };
	// let oCus = {
	// 	print(){
	// 		console.log(`Customer Name: ${this.name}`);
	// 	}
	// };
	// let o = {
	// 	name: "Jag"
	// };
	// //(<any>Object).setPrototypeOf(o, oEmp);
	// //(<any>o).print(); //prints 'Employee Name...'
	// (<any>Object).setPrototypeOf(o, oCus);
	// (<any>o).print(); //prints 'Customer Name...'

});
