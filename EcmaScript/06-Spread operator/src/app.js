import $ from 'jquery'

//spread operator
//splits an array and passes as individual parameters 
function doProcess1(a, b, c) {
	console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

$(function () {
	//doProcess1(10, 20, 30);

	let ar = [10, 20, 30];
	doProcess1(...ar);

	//can be used to become part of other arrays (expands existing array)
	let br = [1, 2, ...ar];
	doProcess1(...br); //displays 1,2,10

	//a and b are two different variables with 10 and 20 values respectively
	let [a, b] = [10, 20];
	console.log(`a = ${a}, b = ${b}`);

	//c, d are variables with 10 and 20 values respectively
	//nr becomes an array with rest of the values
	let [c, d, ...nr] = [10, 20, 30, 40];
	console.log(`c = ${c}, d = ${d}, nr = ${nr}`);


});