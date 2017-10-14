import $ from 'jquery'
//default parameters
function doProcess1(a, b = 2) {
	console.log(`a = ${a}, b = ${b}`);
}

//using default values while calling functions (using 'undefined')
function doProcess2(a = 10, b = 20, c) {
	console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

//using functions as default parameters
//'c' contains function
function doProcess3(a, b = 20, c = function () {
	return (1 + Math.floor(Math.random() * 6));
}) {
	console.log(`a = ${a}, b = ${b}, c = ${c()}`); //execute function 'c'
}

//functions can be 'executed' in default parameters (when called)
//not just functions, 'c' can expressions as well (ex: c=a+b)
//'f' gets executed when doProcess4 is called
//'c' contains value (not function)
var f = function () {
	return (1 + Math.floor(Math.random() * 6));
};

function doProcess4(a, b = 20, c = f()) {
	console.log(`a = ${a}, b = ${b}, c = ${c}`); //c contains value not function
}

$(function () {
	doProcess1(10);
	doProcess1(10, 20);

	doProcess2(1, 2, 30);
	doProcess2(undefined, 2, 30);
	doProcess2(undefined, undefined, 30);

	doProcess3(1, 2, function () {
		return 30
	});
	doProcess3(1, 2);

	doProcess4(1, 2, 30);
	doProcess4(1, 2);
});