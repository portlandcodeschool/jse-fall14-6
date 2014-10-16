//============= 
// Homework #6
//=============


// Problem 1a):
//-------------

function Ctor() {
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

obj1.c = 2;

// obj2 will only contain it's original properties of a: 0 and b: 1.

obj1.constructor.prototype.d = 3;
// OR
Ctor.prototype.d = 3;

// obj1.d & obj2.d will have a value of 3, but obj.3 is undefined.  This is because obj3 borrowed the Ctor function to initially set it up, but it's not effected by any changes made to the constructor afterward.


// Problem 1b):
//-------------



// Problem 2):
//------------

function Animal(val) {
	this.name = val;
	this.move = function() {return 'walk';};
}

function Bird (val) {
	this.name = val;
	this.hasWings = true;
}

var protoBird = new Animal();
Bird.prototype = protoBird;
protoBird.constructor = Bird;

Bird.prototype.move = function() {return "fly";}

function Fish (val) {
	this.name = val;
}

var protoFish = new Animal();
Fish.prototype = protoFish;
protoFish.constructor = Fish;

Fish.prototype.move = function() {return "swim";}

function Penguin (val) {
	this.name = val;
}

var protoPenguin = new Bird();
Penguin.prototype = protoPenguin;
protoPenguin.constructor = Penguin;

Penguin.prototype.move = function() {return "swim";}


// Problem 4):
//-------------

var MemoryBoard = (function() {

	function Ctor(values,matchFn,displayFn,endgameFn) {
		this.board = values.slice();

		this.reset = function() {
			this.board = values.slice();
			// RESHUFFLE!
			var m = this.board.length, t, i;
			while (m) {
			  i = Math.floor(Math.random() * m--);
			  t = this.board[m];
			  this.board[m] = this.board[i];
			  this.board[i] = t;
			}
			faceupArr[0] = undefined;
			console.log("The board has been reset.");
		};

		this.faceupWhere = function() {
			return this.board.indexOf(faceupArr[0]);
		};

		this.faceupValue = function() {
			if (faceupArr[0] === undefined) {
				return false;
			} else {
				if (displayFn === null) { // if no displayFn is given
					return faceupArr[0];
				} else {
					return displayFn(faceupArr[0]);
				}
			}
		};

		this.remaining = function() { // return array of positions of all cards
			var tempArr = [];
			this.board.forEach(function logArrayElements(element, index, array) {
				tempArr.push(index);})
			console.log(tempArr);
		};

		this.lift = function(where) {

			if (faceupArr[0] === undefined) { // if no other card has been lifted
				faceupArr = this.board.slice(where,where+1); // place the first lifted card into a seperate array for comparison
				if (displayFn === null) { // if no displayFn is given
					return this.board[where]; // return lifted card
				} else {
					return displayFn(this.board[where]);
				}

			} else if (this.board[where] === faceupArr[0]) {
				return false; // if element (where) has already been lifted

			} else if (matchFn(faceupArr[0],this.board[where])) { // if cards match
				if (displayFn === null) { // if no displayFn is given
					console.log(this.board[where]+".. "+"You found a match!");
				} else {
					console.log(displayFn(this.board[where])+".. "+"You found a match!");
				}
				this.board.splice(where,1) && this.board.splice(this.board.indexOf(faceupArr[0]),1);
				faceupArr[0] = undefined;
				if (this.board.length === 0) { // if board is empty
					if (endgameFn !== undefined) { // if endgameFn is given
						return endgameFn();
					} else {
						console.log("Game Over")
					}
				}

			} else {
				console.log(this.board[where] + " does not match " +faceupArr[0]+ ".. Try again.");
				faceupArr[0] = undefined;
			}
		};
	}

	var faceupArr = [];

	return Ctor;
})();


// ----Example set 1:----

// card values:
var food = ['apple','artichoke','banana','blueberry','carrot','cranberry'];
// match callback:
var sameInitial = function(str1,str2) {
	return str1[0]===str2[0];
}
// end game callback:
var gameoverFn = function() {console.log("You win!")}

var game = new MemoryBoard(food,sameInitial,null,gameoverFn);

// ----Example set 2:----

// card values (each card is a pair, array [name,num]) :
var animals = [['dog',1],['puppy',1],['cat',2],['kitten',2],['frog',3],['tadpole',3],['bird',4],['chick',4]];
// match callback:
var sameSpecies = function(animal1,animal2) { // check if num matches:
	return (animal1[1]===animal2[1]);
}	
// display callback:
var showName = function(animal) { // display only name:
	return animal[0];
}

var game = new MemoryBoard(animals,sameSpecies,showName);











