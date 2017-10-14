declare var $:any;

function doProcess1(p){
	//does not throw error even if 'v' is not declared earlier
	//displays undefined (hoisted first, assigned later)
	console.log(v); 
	//console.log(v2); //throws compilation error
	if(p == 1){
		var v = 10;		
	}
	else{
		var v = 20;
	}
	return v; //works, no error as 'v' is hoisted
}


function doProcess2(p){
	//console.log(v); //throws compilation error
	//console.log(v2); //throws compilation error
	if(p == 1){
		let v = 10; //available only to this block
		return v;
	}
	else{
		let v = 20; //available only to this block
		return v;
	}
	//return v; //throws compilation error
}

//block-level (local) functions using 'let'
function doProcess3(p){
	if(p == 1){
		return 1;
	}
	else{
		let f = function(a){
			return a * a;
		};
		return f(p);
	}
	
}

$(function(){
	//console.log(doProcess1(2));
	//console.log(doProcess2(2));
	console.log(doProcess3(4));

});
