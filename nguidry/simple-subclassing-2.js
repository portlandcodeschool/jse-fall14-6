// Implement a simple taxonomy of four related classes, using a 
// constructor for each:

// Animal: every instance of an Animal should inherit a method 
// called move(). For basic animals, this just returns the string 
// "walk".

// Bird: A subclass of Animal. Every Bird instance should return 
// "fly" instead of "walk" when asked to move(). All Birds also 
// have a property hasWings which is true.

// Fish: Another subclass of Animal. A Fish instance will "swim" 
// instead of "walk".

// Penguin: A subclass of Bird. Penguins cannot fly and they should 
// move like Fish.

// Every instance of Animal and its subclasses should also have a 
// personal name property which is not inherited. It should be set 
// only within the constructor Animal, and each subclass should each 
// ensure that its own constructor calls its superclass constructor 
// as an initializer.

function Animal(name) {
	this.name = name;
}

Animal.prototype.move = "walk";


function Bird() {

}

var protoBird = new Animal();
Bird.prototype = protoBird;
protoBird.constructor = Bird;

protoBird.move = "fly";

Bird.prototype.hasWings = true;



function Fish() {

}

var protoFish = new Animal();
Fish.prototype = protoFish;
protoFish.constructor = Fish;

protoFish.move = "swim";


function Penguin() {

}

var protoPenguin = new Bird();
Penguin.prototype = protoPenguin;
protoPenguin.constructor = Penguin;

protoPenguin.move = "swim";


// *** currently seeing "TypeError: string is not a function" ***

// You should see these behaviors:

new Animal("Simba").move();// 'walk'
new Fish("Nemo").move();// 'swim'
new Bird("Lulu").move();// 'fly'
var pengo = new Penguin("Pengo");
pengo.name;     // "Pengo"
pengo.move();   //'swim'
pengo.hasWings; //true;
pengo instanceof Penguin; //true
pengo instanceof Bird;    //true
pengo instanceof Animal;  //true