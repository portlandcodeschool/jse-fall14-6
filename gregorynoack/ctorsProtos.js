function Ctor(){
this.a = 0;
this.b = 1;
};

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

obj1.c = 2;

obj1.prototype = 3;


function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();



//Animal
function Animal(name) {
    this.name = name;
};
Animal.prototype.move = function() {
    return 'walk';
};
var Simba = new Animal("Simba");

//Bird
function Bird(name){
	Animal.call(this,name);
};
var protoBird = new Animal();
Bird.prototype = protoBird;
protoBird.constructor = Bird;

Bird.prototype.move = function(){
	return 'fly';
}
Bird.prototype.hasWings = true;


var Lulu = new Bird("Lulu");

//Fish
function Fish(name){
	Animal.call(this,name);
};
var protoFish = new Animal();
Fish.prototype = protoFish;
protoFish.constructor = Fish;

Fish.prototype.move = function(){
	return 'Swim';
}

var Nemo = new Fish("Nemo");

//Penguin

function Penguin(name){
	Animal.call(this,name);
};
var protoBird = new Bird();
Penguin.prototype = protoBird;
protoBird.constructor = Penguin;

Penguin.prototype.move = function(){
	return 'swim';
}
Penguin.prototype.hasWings = true;
Penguin.prototype.canFly = false;


var Pengo = new Penguin("Pengo");

