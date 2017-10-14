import $ from 'jquery'

//array destructuring - extracting data from array into variables
$(function () {

	let arr = ['one', 'two', 'three'];

	let [a, b] = arr;

	console.log(`a = ${a}`); //a = one
	console.log(`b = ${b}`); //b = two

	let [, , c] = arr; //can skip items
	console.log(`c = ${c}`); //c = three

	let [, , , d = 'NA'] = arr; //can have default values
	console.log(`d = ${d}`); //d = NA	

	let [m, ...n] = arr; //can be used with rest params
	console.log(`m = ${m}`); //m = one
	console.log(`n = ${n}`); //n = [two, three]

	let [...p] = arr; //arr is cloned to p
	arr[0] = '1'; //no affect on p
	console.log(`p[0] = ${p[0]}`); //p[0] = one
	p[1] = '2'; //no affect on arr
	console.log(`arr[1] = ${arr[1]}`); //arr[1] = two
});