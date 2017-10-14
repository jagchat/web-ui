declare var $:any;

//spread operator
//splits an array and passes as individual parameters 
function doProcess1(a, b, c){
	console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

$(function(){
	//doProcess1(10, 20, 30);

	let ar = [10, 20, 30];

	////following fails in typechecking/transpilation 
	////but, still runs in browser with no issues
	//doProcess1(...ar); 

	////an alternative way
	////works with no issues (using type assertion using 'any')
	////or use compiler option 'lib', if using TS 2.0+, as included in 'object enhancements' example
	//(<any>doProcess1)(...ar);

	////can be used to become part of other arrays (expands existing array)
	//let br = [1, 2, ...ar];
	//(<any>doProcess1)(...br);	

	//a and b are two different variables with 10 and 20 values respectively
	//let [a, b] = [10, 20];	
	//console.log(`a = ${a}, b = ${b}`);	

	//c, d are variables with 10 and 20 values respectively
	//nr becomes an array with rest of the values
	let [c, d, ...nr] = [10, 20, 30, 40];
	console.log(`c = ${c}, d = ${d}, nr = ${nr}`);	


});
