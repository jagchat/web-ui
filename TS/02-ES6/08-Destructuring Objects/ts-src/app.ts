declare var $: any;

//destructurring - extracting data from object into variables
$(function () {

	let oEmp = {
		empno: 1001,
		ename: 'Jag'
	};

	//creates two new local variables 'empno' and 'ename',
	//fetch the properties with those of variable names from 'oEmp',
	//assign those property values from 'oEmp' to new variables 'empno' and 'ename' respectively
	let { empno, ename } = oEmp;
	console.log(`Id = ${empno}`);
	console.log(`Name = ${ename}`);

	//empno = 1002; //will have no affect on oEmp

	//assigning new values to already existing variables
	let oEmp2 = {
		empno: 1002,
		ename: 'Scott'
	};
	({ empno, ename } = oEmp2); //paranthesis are essential
	console.log(`Id = ${empno}`);
	console.log(`Name = ${ename}`);

	//-->variable renaming
	//creates different local variables 'id' and 'name' (from empno and ename)
	let { empno: id, ename: name } = oEmp2;
	console.log(`Id = ${id}`);
	console.log(`Name = ${name}`);

	//-->retrieving dynamic property names
	let empId = "empno"; //property name in a variable
	let { [empId]: id2 } = oEmp2; //destructuring with dynamic property name in a variable
	console.log(`Id2 = ${id2}`);

	//-->a string can be destructured too (valid in ES6, not in TS)
	// let s = "Hello";
	// let [a,,,,e] = s; //a="H", e="o"


	//-->destructuring with nested objects
	let oEmp3 = {
		empno: 1003,
		name: 'Gates',
		designation: 'engineer',
		moreInfo: {
			address: {
				address1: '1234 first line',
				city: 'Manhattan',
				state: 'NY'
			},
			dept: {
				deptno: 10,
				dname: 'sales'
			}
		}
	};

	//extract moreInfo->dept->dname into dname
	let { moreInfo: { dept: { dname } } } = oEmp3;
	console.log(`Department = ${dname}`);
	//extract moreInfo->dept->dname into vDname
	let { moreInfo: { dept: { dname: vDname } } } = oEmp3;
	console.log(`Department = ${vDname}`);
	//extract moreInfo->dept into vDept, moreInfo->address into vAddress
	let { moreInfo: { dept: vDept }, moreInfo: { address: vAddress } } = oEmp3;
	console.log(`State = ${vAddress.state}`);
	console.log(`Department = ${vDept.dname}`);

	//-->default values
	// let {designation = '-NA-'} = oEmp3; //no issues with this (oEmp3 has 'designation')
	// console.log(`Designation = ${designation}`);

	// let {designation: desig = '-NA-'} = oEmp3; //variable renaming
	// console.log(`Designation = ${desig}`);

	//valid in ES6 (but not in TS)	
	//let {designation = '-NA-'} = oEmp2; //oEmp2 does not have 'designation' 
	//console.log(`Designation = ${designation}`);

	//TS alternative - need to define (the expected) as nullable and specific type
	//let {designation = '-NA-'}: {designation?: string} = oEmp2; 	
	//console.log(`Designation = ${designation}`);

	//TS alternative - along with variable renaming
	//let {designation: desig = '-NA-'}: {designation?: string} = oEmp2; 	
	//console.log(`Designation = ${desig}`);

	//can send options as last parameter as follows:
	let doProcess = function (a, b, { option1, option2, option3 }) {
		console.log(`a = ${a}`);
		console.log(`b = ${b}`);
		console.log(`option1 = ${option1}`);
		console.log(`option2 = ${option2}`);
		console.log(`option3 = ${option3}`);
	}

	doProcess(10, 20, { option1: '1', option2: '2', option3: '3' });
});
