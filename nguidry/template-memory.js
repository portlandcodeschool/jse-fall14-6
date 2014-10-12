var MemoryBoard = (function() {
	function Ctor(values,matchFn,displayFn,endgameFn) {
		//verify even number of input values
		//slice values array to new array for memory game

		gameValues = values.slice();

		//simple matchFn callback (user inputs what a match is)

		match = matchFn;

		//"an optional 'display' callback which takes 1 parameter 
		//(the raw value of a card from the values array) and 
		//converts it to another value. If this argument is undefined 
		//or null, the raw value will be displayed instead"

		display = displayFn;

		//an optional "win" callback which takes no arguments and is 
		//run when the game ends.

		endgame = endgameFn;
	}

	//Your board must keep track of whether and where any card is face up, 
	//where any matching cards have been removed, and where unmatched cards 
	//remain.

	//game mechanics:

	//users select card 1 with lift(where)
	//card 1 is turned face up
	//user selects card 2 with lift(where)
	//run matchFn to determine if card 1 matches card 2
		
		//if no, both cards are flipped face down. alert user 'no match'
		
		//if yes, both cards are removed from the gameValues array and placed 
		//in 'removedCards' array. removed spots from gameValues replaced with 'null'
		//to determine places held

	//repeat until no values are left in the gameValues array (trigger endgame cb)

	//instance methods go here

	//reset() replaces all removed cards, reshuffles the entire board, 
	//and rebuilds the board face-down.

	//faceupWhere() returns the position (a number) of the one face-up 
	//card (if any), otherwise returns false.

	//faceupValue() returns the value of the one face-up card (if any), 
	//otherwise false.

	//remaining() returns an array of the positions of all cards still 
	//on the board.

	//lift(where) If there is a face-down card at position where (a 
	//single number), return its display value (by calling the display 
	//callback on the card's raw value); otherwise return false. 

	//If there is not currently a face-up card, leave this card face-up. 

	//If there's already a face-up card, do one of the following:
		//If this card and the face-up card match (according to your 
		//matching callback), remove both from the board. If all pairs 
		//are removed from the board, you win the game; run the "win" 
		//callback, if any.

		//If there is no match, leave both cards in place and turn 
		//them face down.

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

