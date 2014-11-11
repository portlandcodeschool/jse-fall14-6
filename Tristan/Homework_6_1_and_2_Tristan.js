//Homework 6 - Tristan

//Problem 1
function Ctor(arg){
	this.a = 0;
	this.b = 1;
}
var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

obj1.c=2;

//obj2.c will be undefined because we have only give the instance obj1 the value of 2.

obj1.constructor.prototype.d = 3;

//obj1 and obj2 will both appear to have a property d with the value of 3. 
//But obj3 doesn't share the same proto because it was created with a call so it has no property d (undefined)

//It appears to me that constructors A and B work the same way. Both have the same values for num an dstr in their prototypes.

//Problem 2

function Animal(animalName){

	Animal.prototype.move = function(){return "walk"};
	this.name = animalName;
}

function Bird(birdName){
	this.name = birdName;
}
var birdProto = new Animal();
Bird.prototype = birdProto;
birdProto.constructor = Bird;

Bird.prototype.move = function(){return "fly"};
Bird.prototype.hasWings = true;

function Fish(fishName){
	this.name = fishName;
}

var fishProto = new Animal();
Fish.prototype = fishProto;
fishProto.constructor = Fish;

Fish.prototype.move = function(){return "swim"};

function Penguin(penguinName){
	this.name = penguinName;
}

var penguinProto = new Bird();
Penguin.prototype = penguinProto;
penguinProto.constructor = Penguin;
Penguin.prototype.move = Fish.prototype.move;
