// conversion is used to convert one type of data into another
// Number use to convert value in number
const a = "33"
console.log("number conversion==== "+ typeof a +" => " + typeof Number(a));

const b = 33
console.log( "string conversion==== "+ typeof b + "=>" + typeof String(b));

const c = 1
console.log("Boolean conversion==== "+ typeof c + "=>" + typeof Boolean(c));

const d = "33abc"
console.log("number conversion==== "+ typeof d +" => " + typeof Number(d));
const dd = Number("33abc")
console.log("dd===", typeof dd);
console.log("ddd===", Number("abc"));




