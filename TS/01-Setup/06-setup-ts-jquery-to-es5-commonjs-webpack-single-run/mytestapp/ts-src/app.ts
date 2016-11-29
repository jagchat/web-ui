import msg from './Message'
import * as $ from 'jquery'

$(function(){
	$("#ShowBtn").on("click", function(){
		var o = new msg();
		o.show();
	});
});
