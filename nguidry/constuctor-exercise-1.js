// 1a

// Here's a sequence of simple exercises related to how constructors and prototypes work.

// First make a constructor named Ctor for an object that has properties a and b and 
// initializes them to 0 and 1 respectively.

function Ctor() {
	this.a = 0;
	this.b = 1;
};

// Now, make two objects named obj1 and obj2 using Ctor.

var obj1 = new Ctor();
var obj2 = new Ctor();

// Now make a new object obj3 this way:
var obj3 = {};
Ctor.call(obj3);

// and check its properties.

// checked properties showed:
// Object {a:0, b:1}

// Next, add a property c to obj1 with a value of 2. What will be the value of obj2.c?

obj1.c = 2;
obj2.c
// undefined

// Now, add a property d with the value 3 to obj1's "proto" (the object which helps 
// out when obj1 can't do something by itself). Remember that there are at least 
// four ways of referring to that proto object.

obj1.___proto___.d = 3;

// What are the values of obj1.d, obj2.d, and obj3.d? Can you explain the results?

// obj1.d, obj2.d, and obj3.d will all have the same value of 3. Even though we 
// did not assign obj2 and obj3 the property d, when we try to access that property 
// through those objects, and we have not yet set a property of d for those specific 
// objects, the program will look past the individual object to its prototype to see 
// if the prototype has a property of d. This is because, by setting the prototype 
// through object 1, we told the constructor to give each object made from that 
// contstructor the same prototype object that contains the property d. 


// 1b
// Consider this code:

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
// There is a difference between the behaviors of objA and objB! Explain.

// In objA, you are wiping out the prototype and replacing the prototype 
// 'property' with a new object, only containing properties of 'num' and 
// 'str'. In objB, you are just adding the properties 'num' and 'str' to 
// the existing prototype.









