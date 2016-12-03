declare var $:any;

//rest parameters
//'...r' is an array 
//it gets created with all of the other parameters
//there can be only one rest parameter
//a rest parameters has to be the last parameter
function doProcess1(a, b, ...r){
	console.log(`a = ${a}`);
	console.log(`b = ${b}`);
	for(let i=0;i<r.length;i++){
		console.log(`Other Values ${i} = ${r[i]}`);
	}
}

$(function(){
	//doProcess1(10,20);
	//doProcess1(10,20,30);
	doProcess1(10,20,30,40,50,60,70);
});
