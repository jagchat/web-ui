import $ from 'jquery'

//Weak Maps - doesn't prevent garbase collection, if it's the only remaining reference
$(function () {

	let emp1 = {
		empno: 1001,
		ename: 'Jag'
	};
	let m = new Map().set(emp1, {
		sal: 1500,
		deptno: 10
	});
	console.log(m.get(emp1).sal);

	let emp2 = {
		empno: 1002,
		ename: 'Win'
	};
	let wm = new WeakMap().set(emp2, {
		sal: 2500,
		deptno: 20
	});
	console.log(wm.get(emp2).sal);

	emp1 = null;
	console.log(m.size); //still returns 1.  emp1 is not garbage collected (still in memory), as the Map holds its reference

	emp2 = null; //also removes from WeakMap (if emp2 is the last one holding the reference)

	//-->we cannot test the above due to following limitations:
	//-In a WeakSet instance, the add() method, has() method, and delete() method all throw an error when passed a nonobject.
	//-Weak sets aren’t iterables and therefore cannot be used in a for-of loop.
	//-Weak sets don’t expose any iterators (such as the keys() and values() methods)
	// so there is no way to programmatically determine the contents of a weak set.
	//-Weak sets don’t have a forEach() method.
	//-Weak sets don’t have a size property.

	//-->Use case 1:
	//-->adding/triggering/removing listeners

	// const _objToListeners = new WeakMap();

	// function addListener(obj, listener) {
	//     if (!_objToListeners.has(obj)) {
	//         _objToListeners.set(obj, new Set());
	//     }
	//     _objToListeners.get(obj).add(listener);
	// }

	// function triggerListeners(obj) {
	//     const listeners = _objToListeners.get(obj);
	//     if (listeners) {
	//         for (const listener of listeners) {
	//             listener();
	//         }
	//     }
	// }

	//The advantage of using a WeakMap above is that, 
	//once an object is garbage-collected, 
	//its listeners will be garbage-collected, too. 
	//In other words: there won’t be any memory leaks.

	//-->Use case 2:
	//-->Maintaining private data

	// In the following code, 
	//the WeakMaps _counter and _action are used to store the data of virtual properties of instances of Countdown:

	// const _counter = new WeakMap();
	// const _action = new WeakMap();
	// class Countdown {
	//     constructor(counter, action) {
	//         _counter.set(this, counter);
	//         _action.set(this, action);
	//     }
	//     dec() {
	//         let counter = _counter.get(this);
	//         if (counter < 1) return;
	//         counter--;
	//         _counter.set(this, counter);
	//         if (counter === 0) {
	//             _action.get(this)();
	//         }
	//     }
	// }


});