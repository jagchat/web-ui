declare var $:any;

function doProcess1(){
	let s1 = "Hi Jag1";
	console.log(s1);

	let s2 = 'Hi Jag2';	
	console.log(s2);

	let s3 = `Hi Jag3`; //template literal
	console.log(s3);

	let s4 = `"Hi" 'Jag4'`; //no escapting necessary for template literals
	console.log(s4);

	let s5 = `Hi 
	Jag5`; //multi-line acceptable
	console.log(s5);
	
	let s6 = `Hi\nJag6`; //next line character allowed
	console.log(s6);
	
	//String Substitutions
	let sal = 1000;
	let o = {
		name: 'Jag',
		getAnnualSal: function(p) { return p*12; }
	};	
	let s7 = `Employee ${o.name} earns ${sal} - Annual Sal ${o.getAnnualSal(sal)}`;
	console.log(s7)

	//Tagged templates
	doProcess2`Employee ${o.name} earns ${sal} - Annual Sal ${o.getAnnualSal(sal)}`;
	
}

function doProcess2(literals, ...substitutions){//using 'rest parameter', which holds remaining parameters into an array
	let listLiterals = '';
	listLiterals = literals.join(',')
	console.log("Literals: " + listLiterals);

	let listSubstitutions = '';
	listSubstitutions = substitutions.join(',')
	console.log("Substitutions: " + listSubstitutions);	
}

$(function(){
	doProcess1();
});
