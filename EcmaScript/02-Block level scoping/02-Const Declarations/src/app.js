import $ from 'jquery'

function doProcess1() {
	//constant declaration
	//value cannot be changed
	//cannot have another variable with the same name
	//similar to let from scope perspective
	const v = 10;

	//v = 20; //cannot change value, run-time error
	//let v = 10; //cannot declare another variable as const, compilation error

	if (1) {
		let v = 20; //no issues
	}
}

$(function () {
	console.log(doProcess1());
});