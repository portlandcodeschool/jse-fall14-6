// Stacy Fabian
// Week 6 prob 2

function Animal(name) {
	this.name = name;
};

Animal.prototype.move = function() {
	return "walk";
};

function Bird(name) {
	Animal.call(this,name);
};
Bird.prototype = new Animal;
Bird.prototype.constuctor = Bird;

Bird.prototype.move = function() {return "fly";};
Bird.prototype.hasWings = true;

function Fish(name) {
	Animal.call(this,name)
}
Fish.prototype = new Animal;
Fish.prototype.constuctor = Fish;

Fish.prototype.move = function() {return "swim";};


function Penguin(name) {
	Animal.call(this,name);
};
Penguin.prototype = new Bird;
Penguin.prototype.constructor = Penguin;
Penguin.prototype.move = function() {return "swim";};x


