// Stacy Fabian
// Week 6 prob 2


function Animal(name) {
	this.name = name;
}

Animal.prototype.move = function() {
	return "walk";
};


function Bird() {
	// insert name call through animal
}

Bird.prototype = new Animal;
Bird.prototype.constuctor = Bird;

Bird.prototype.move = function() {return "fly";};
Bird.prototype.hasWings = true;

function Fish() {
	// insert name call through animal
}
Fish.prototype = new Animal;
Fish.prototype.constuctor = Fish;

Fish.prototype.move = function() {return "swim";};


function Penguin() {
	// insert name call through animal
}
Penguin.prototype = new Bird;
Penguin.prototype.constructor = Penguin;

Penguin.prototype.move = function() {return "swim";};

// failed tests
// pengo.name; // function() {return name;}
// pengo instanceof Animal; // false


