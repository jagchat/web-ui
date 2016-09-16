import msg from './Message'
import * as _$ from 'jquery'
const $ = (_$ as any).default;

$(function(){
	$("#ShowBtn").on("click", function(){
		var o = new msg();
		o.show();
	});
});