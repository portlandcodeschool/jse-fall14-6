//***1)***
function Ctor(){

this.a = 0;

this.b = 1;

};

var obj1 = new Ctor();

var obj2 = new Ctor();

var obj3 = {};
    
Ctor.call(obj3);

// obj1
// Ctor { a=0, b=1}
// obj2
// Ctor { a=0, b=1}
// obj3
// Object { a=0, b=1}

obj1.c = 2;

// obj1
// Ctor { a=0, b=1, c=2}
// obj2
// Ctor { a=0, b=1}



Ctor.prototype.d = 3;

// obj1.d
// 3
// obj2.d
// 3
// obj3.d
// undefined

//When setting the value of d for the prototype we changed the inherited values for obj1, and obj2 because they are descendants of the Ctor object. Where as obj3 was not a descendant but rather a shallow copy, and therefore did not inherit any of Ctor.prototype's values.

// ***B)***

function A() {};

//set default values for instances of A:

A.prototype = {num:0, str:'default'};

var objA = new A();



function B() {};

// set default values for instances of B:

B.prototype.num = 0;

B.prototype.str = 'default';

var objB = new B();


//If we were to open up these two objects seperately in the window the idea of why they are behaving differently would become apparent. objA received its properties through inheriting a object with said properties that was in the prototype of its constructor. Where as objB recieved its default values from its constructor directly and not through an object. Therefore objA reads as an Object, and objB reads as an instance of B.




//***2)***


function Animal(){

	this.move = 'walk';

};

function Bird(name){

	return name;
};

function Fish(name){

	return name;
};

function Penguin(name){

	return name;
};




Bird.prototype = new Animal();

Fish.prototype = new Animal();

Penguin.prototype = new Bird();


Bird.prototype.constructor = Bird;

Fish.prototype.constructor = Fish;

Penguin.prototype.constructor = Penguin;


Bird.prototype.move = 'fly';

Fish.prototype.move = 'swim';

Penguin.prototype.move = 'swim';

Bird.prototype.hasWings = true;


var linus = new Penguin('linus');




new Animal("Simba").move;
// walk

new Fish("Nemo").move;
// swim

new Bird("Lulu").move;
// fly

var pengo = new Penguin("Pengo");

pengo.name;
// Pengo

pengo.move;
//swim

pengo.hasWings;
//true

pengo instanceof Penguin;
//true

pengo instanceof Bird;
//true

pengo instanceof Animal; 
//true


















