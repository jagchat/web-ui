import * as $ from 'jquery'

export default class Message{
	show(){
		alert("Hello world!");
		$("body").html('Hello');
	}
}
