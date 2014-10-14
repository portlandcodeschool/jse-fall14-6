var MemoryBoard = (function() {
	var gameValues = [];

	function Ctor(values,matchFn,displayFn,endgameFn) {
		//simple matchFn callback (user inputs what a match is)

		//"an optional 'display' callback which takes 1 parameter 
		//(the raw value of a card from the values array) and 
		//converts it to another value. If this argument is undefined 
		//or null, the raw value will be displayed instead"

		//an optional "win" callback which takes no arguments and is 
		//run when the game ends.

		//Your board must keep track of whether and where any card is face up, 
		//where any matching cards have been removed, and where unmatched cards 
		//remain.

		//verify even number of input values

		if(!(values % 2 == 0)) {return "Gotta have an even number of cards to make matches!"}

		//turn values array into objects within gameTokens array

		function tokensToObjects(values) {
  			//build empty array for game tokens
  			var gameTokens = [];
  			//run through each value in the array
  			for (var i = 0; i < values.length; ++i) {
  				//create an empty object for the game token
  				var obj = {
  					facing = "down";
  					inPlay = true;
  					token = values[i];
  				};
  				//push object to gameTokens array
  				gameTokens.push(obj);
  			}
  			return gameTokens;
		}

		//planning to give each "card" properties of up/down and in/out of play
		//will run face-up/face-down/remaining/etc by evaluating the values of those properties

		//instance methods go here

		//reset() 

		function reset() = {
			//replaces all removed cards, 
			for (var i = 0; i < this.gameTokens.length; ++i) {
				for (prop in this.gameTokens[i]) {
					this.gameTokens[i].inPlay = true;
				}
			}
			//reshuffles the entire board, 

			var end = this.gameTokens.length, temp, i;
		  	while (end>1) {
		    	i = Math.floor(Math.random() * end--);
		    	temp = this.gameTokens[end];
		    	this.gameTokens[end] = this.gameTokens[i];
		    	this.gameTokens[i] = temp;
		  	}
			//and rebuilds the board face-down.
			//done! already on the board!	
		}


		//faceupWhere() 
		//returns the position (a number) of the one face-up card (if any), 
		//otherwise returns false.

		//faceupValue() 
		//returns the value of the one face-up card (if any), 
		//otherwise false.

		//remaining() returns an array of the positions of all cards still 
		//on the board.

		//lift(where) 
		//If there is a face-down card at position where (a single number) 
		//return its display value (by calling the display callback on the card's raw value); 
		//otherwise return false. 

			//If there is not currently a face-up card, leave this card face-up. 

			//If there's already a face-up card, do one of the following:
				//If this card and the face-up card match (according to your 
				//matching callback), remove both from the board. If all pairs 
				//are removed from the board, you win the game; run the "win" 
				//callback, if any.

				//If there is no match, leave both cards in place and turn 
				//them face down.
	}
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

