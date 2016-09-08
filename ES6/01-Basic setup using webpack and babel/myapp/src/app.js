import msg from './Message.js'
import $ from 'jquery'

$(function(){
	$("#ShowBtn").on("click", function(){
		var o = new msg();
		o.show();	
	});
});
