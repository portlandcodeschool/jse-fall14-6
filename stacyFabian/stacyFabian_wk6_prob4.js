// Stacy Fabian
// Week 6 prob 4

// pseudo coding

- build the game board
	- a single row
	- function MemoryBoard
		- takes 3 arguments
			- array of game "cards"
				- must be even number 
					(check that by doing
					 if (array.length%2 == 0)
					 	then move on)
			
			- callback to compare the match for true or false 
				- 'match' depends on the card type
				
- build the card set (array)
	- assign each card a unique identifier
	- include some sort of property that indicates the match or not
		- set by the 'player' so just be a param that is evaluated for equality.



// -- Coding
function makeboard(array) {
	//var newArray = array.slice();
	for (var card=0; card<array.length; ++card) {
		position[array.card] = new Object {
			value: array[card].slice,
			faceup: false;
		};
	}
}
// IFFE function
function playMemory() {

	function MemoryBoard(array,matchRule,winFn)

		var matchingRule = function matchRule(card1,card2) {
			return matchRule(card1) === matchRule(card2);}
		
		function winCallBack() = {}
			// for loop to search for any !null values
			for (var i=0; i<this.length; ++i) {}
			// if everything is null then
			return "Congratulations, you win!!"

		function reset() {
			array = [];
			array.length = 0;
		}

		function faceupWhere(input) {
			for (var pos=0; pos<input.length; ++pos) {
				if (input[pos].faceup === true) {
					return pos
				}
			}
		}

		function faceupValue(input) {
			for (var pos=0; pos<input.length; ++pos) {
		    	if (input[pos].faceup === true) {
				return input[pos];
				}
			}
		}

		function lift(where) {
			for (pos=0, pos<array.index; ++pos) { 
				if array[where].faceup === true {
				 	return false;
				}
			return array[where];
			}
		}

			// - when cards match then replace both arrayindex values with null

			 if matchRule(card1,card2) === true {
					array[card1], array[card2] = null;
			 }

	 		// - last run winCallBack to see if any cards have "faceup" property of false, if not 
	 		for (pos=0, pos<array.index; ++pos) {
	 			if (!(array[pos].faceup === null)
	 		} // keep going
	 		else {
	 		return "Congratulations, you win!"
		}
	return playMemory()
}













