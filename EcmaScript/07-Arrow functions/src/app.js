import $ from 'jquery'

//arrow function (with no params and only a return statement)
// let doProcess1 = function () {
// 	return 1;
// }
//or
let doProcess1 = () => 1;

//with one param and only a return statement
// let doProcess2 = function (a) {
// 	return a * 2;
// }
//or
let doProcess2 = a => a * 2;

//with more than one param and only a return statement
// let doProcess3 = function (a, b, c) {
// 	return a + b + c;
// }
//or
let doProcess3 = (a, b, c) => a + b + c;

//with params and multiple statements in function body
// let doProcess4 = function (a, b) {
// 	let c = a + b;
// 	let d = a * b;
// 	return c + d;
// }
//or
let doProcess4 = (a, b) => {
	let c = a + b;
	let d = a * b;
	return c + d;
};

//with rest param
// let doProcess5 = function (...a) {
// 	return a.join(',');
// }
//or
let doProcess5 = (...a) => a.join(',');

//with default values
let doProcess6 = (a, b = 10, c = 20) => a + b + c;

//with arrays in arrays
//let ar = [[1, 2], [3, 4]].map((x) => x[0] + x[1]);
let ar = [
	[1, 2],
	[3, 4]
].map(([a, b]) => a + b); //another way
console.log(ar); //[3, 7]

$(function () {
	console.log(doProcess1());
	console.log(doProcess2(10));
	console.log(doProcess3(10, 20, 30));
	console.log(doProcess4(10, 20));
	console.log(doProcess5(10, 20, 30));
	console.log(doProcess6(10, undefined, 30)); //50
	console.log(doProcess6(10)); //40
});