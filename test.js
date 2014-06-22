var s = "lala";// now here

function sum(a, b) {
	a = a * a;
	b = b - 5;
	return a + b;
}
function fcn(a, b) {

	var c = sum(a, b);

	newfcn2(5);
	console.log(s, c);
	console.log("lala");
}

function newfcn2(i, val) {
	var d = sum(3, 4);
	val = val || 4;
	return i * val;
}

var a = 5;
var b = 6;
var i;

i = a * b;

seven
eight
