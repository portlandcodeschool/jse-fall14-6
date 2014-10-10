// Stacy Fabian
// Week 6 Problem 1

function Ctor() {
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor();

var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

obj1.c = 2;
// What will the value of obj2.c be?
// Estimate:
// undefined
// Actual:
// undefined

Ctor.prototype.d = 3;

// The values of obj1.d, obj2.d and obj3.d are:
// Estimates:
// All are equal to 3.
// Actuals:
// obj1.d and obj2.d = 3 but obj3.d is undefined.

// Explain (pre-test): Since all the object instances were created from the same Ctor constructor function, they all inherit the same properties from the parent function. And since the "d" property had not explicitly been set in any of the object instances, they refer back to Ctor's protptype and that has a set value for d thus they all have the value.

// Explain (post-test): Since obj3 was created first as an empty object and then the Ctor function was used through the .call method, the properties of the Ctor applied only in that moment and at that moment property  and b were set but nothing else. And the when the propery d of Ctor.prototype was later set it didn't inherit to obj3 like it did obj1 or obj2.



// B) When objA is built, it'g given an object as it's constructor. But when objB is built, it uses the function B's prototype which includes .num and .str properties instead of objA that was given a full object as it's construtor that just happens to have some properties and values inside that object. It's trying to be a shortcut but instead is ruining it.

