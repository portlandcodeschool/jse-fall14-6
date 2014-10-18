var MemoryBoard = (function() {
			
	function Ctor(values, matchFn, displayFn, endgameFn) {
		
		
		// check that there are an even number of cards
		if(values.length % 2 !== 0) {
			console.error('You must provide an even number of cards to play the game!');
			return;
		}
		
		
		// create our containers for later use
		var gameBoard = [],
			removed   = {},
			faceUp 	  = [];
		
		
		// deal with our optional parameters
		if(!displayFn) {
			displayFn = function(cardValue) {
				console.log('The value of this card is ' + cardValue);
			}
		}
		
		if(!endgameFn) {
			endgameFn = function() {
				console.log('You win!');
			}
		}
		
		
		// build our game board
		buildDeck(values);
		
		
		// ===== card factory (private =====
		function buildDeck(values) {
			
			// loop through and create card objects
			for(count = 0; count < values.length; count++) {
				
				gameBoard.push({
					value: 		values[count],
					position: 	count
				});
				
			}
			
			gameBoard = shuffle(gameBoard);
			
			console.log('Ready to play!');
		}
		
		
		// ===== shuffle (private) =====
		function shuffle(array) {
		
			// shuffle
			var m = array.length, t, i;
			
			while (m) {
				i = Math.floor(Math.random() * m--);
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}
			
			// reset the position of each object
			for(count = 0; count < array.length; count++) {
				array[count].position = count;
			}
			
			return array;
		}
		
		
		// ===== reset() =====
		function reset() {
			
			// put all cards back in the deck
			for(var prop in removed) {
				delete removed[prop];
			}
			
			// turn all cards face down
			faceUp = [];
			
			// shuffle the deck
			gameBoard = shuffle(gameBoard);
			
			console.log('The game has been reset. Ready to play!');
		}
		
		
		// ===== faceupWhere() =====
		function faceupWhere() {
			
			if(faceUp.length > 0) {
				return faceUp[0].position;
			}
			
			console.log('No cards are face up at this time');
			return false;
		}
		
		
		// ===== faceupValue() =====
		function faceupValue() {
			
			if(faceUp.length > 0) {
				return displayFn(faceUp[0].value);
			}
			
			console.log('No cards are face up at this time');
			return false;
		}
		
		
		// ===== remaining() =====
		function remaining() {
			
			var arr = [];
			
			for(count = 0; count < gameBoard.length; count++) {
				if(!(gameBoard[count].value in removed)) {
					arr.push(gameBoard[count].position);
				}
			}
			
			return arr;
		}
		
		
		// ===== lift(where) =====
		function lift(where) {
			
			// check if card has been removed
			if(!(gameBoard[where].value in removed)) {
			
				// check if there is a face up card
				if(faceUp.length > 0) {
					
					// check that the face up card is different from the lifted card
					if(gameBoard[where].position !== faceUp[0].position) {
						
						// check if these cards match
						if(matchFn(gameBoard[where].value, faceUp[0].value)) {
							
							// remove these cards from the board
							removed[gameBoard[where].value] = true;
							removed[faceUp[0].value] = true;
							faceUp = [];
							
							// check to see if we've won
							var check = remaining();
							if(check.length === 0) {
								endgameFn();
								return;
							}
							
							console.log('You found a match! Keep going!');
							return true;
							
						}
						
						// if the cards don't match
						faceUp = [];
						console.log('Those cards do not match. Try again.');
						return false;
						
					}
					
					console.log('That card is already face up.');
					return false;
					
				}
				
				// turn this card face up and return its value
				faceUp.push(gameBoard[where]);
				return displayFn(gameBoard[where].value);
			
			} 

			console.log('There is no card at that position. Please pick a different position');
			return false;
			
		}
		
		return {
			reset: 			reset,
			faceupWhere: 	faceupWhere,
			faceupValue:	faceupValue,
			remaining:		remaining,
			lift:			lift
		}
			
	}
	
	return Ctor;

})();


// ----Example set 1:----

/*
// card values:
var food = ['apple','artichoke','banana','blueberry','carrot','cranberry'];
// match callback:
var sameInitial = function(str1,str2) {
	return str1[0]===str2[0];
}
// end game callback:
var gameoverFn = function() {console.log("You win!")}

var game = new MemoryBoard(food,sameInitial,null,gameoverFn);
*/

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

