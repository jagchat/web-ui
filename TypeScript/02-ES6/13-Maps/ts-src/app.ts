declare var $: any;

//maps - list of key/value pairs
// key and value can be any type
$(function () {

    let m = new Map();

    m.set("z", 10);
    console.log(`is 'z' exists? ${m.has("z")}`);
    console.log(`z = ${m.get("z")}`);

    m.set("emp", { empno: 1001, ename: 'Jag' });
    console.log(`Ename = ${m.get("emp").ename}`);

    //m.delete('z');
    //console.log(`is 'z' exists? ${m.has("z")}`);

    //m.clear(); //removes all keys and values
    console.log(`No. of entries = ${m.size}`);

    // let m2 = new Map([
    //     ['a', 10], 
    //     ['b', 20]
    // ]); //possible

    //let m2 = new Map([['a', 10], ['b', 'Jag']]); //NOT possible: mixing types during init

    //traversing
    m.forEach((v, k, ownerMap) => {
        console.log(`key: ${k}, value: ${v}`);
    })
    // for (let k of m.keys()) { //keys iterator
    //     console.log(`key: ${k}`);
    // }
    // for (let v of m.values()) { //values iterator
    //     console.log(`value: ${v}`);
    // }
    // for (let e of m.entries()) {  //entries iterator
    //     console.log(`key: ${e[0]}, value: ${e[1]}`);
    // }
    // for (let [k, v] of m.entries()) { //using destructuring
    //     console.log(`key: ${k}, value: ${v}`);
    // }

    let ar = [...m]; //convert to array (of key/value arrays)
    console.log(ar);

    let m1 = new Map([...m].filter(([k, v]) => k == 'z')); //using array method 'filter'
    console.log(`m1 size: ${m1.size}`);

    let m2 = new Map().set('a', 10).set('b', 20);
    let m3 = new Map().set('b', 30).set('d', 40);
    let mc = new Map([...m2, ...m3]); //combines maps into new. If keys match, latest is preserved
    mc.forEach((v, k) => console.log(`key: ${k}, value: ${v}`))
});