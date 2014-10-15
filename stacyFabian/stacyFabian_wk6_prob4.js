// Stacy Fabian
// Week 6 prob 4

// pseudo coding

- build the game board
	- a single row
	- function MemoryBoard
		- takes 3 arguments
			- array of game "cards"
				- must be even number 
					(check by doing if (array.length%2 == 0) to move on)
			
			- callback to compare the match for true or false 
				- 'match' depends on the card type
				
			


			

- build the card set (array)
	- assign each card a unique identifier
	- include some sort of property that indicates the match or not



// -- Coding
function makeboard(array) {
	var newArray = array.slice();
	for (var card=0; card<array.length; ++card) {
		position[array.card] = new Object {
			value: array[card],
			faceup: false;
		};
	}
}
function playMemory() {

	function MemoryBoard(array,matchRule,arg3)

		var matchingRule = function matchRule(card1,card2) {
			return matchRule(card1) === matchRule(card2);}
		
		function winCallBack() = {}
			// - search for faceup = true value

		function buildBoard() {

			function reset() {}

			function faceupWhere() {
				for (var pos=0; pos<array.length; ++pos) {
					// array[pos].faceup = true
					return array[pos];
				}
			}

			function faceupValue() {
				return array[where];
			}

			function lift(where) {}
			- first look if array[where].faceup = true
				if array[where].faceup = true {
				 	return false;
				}
				else ()
				return array[where];
			 
			 - when cards match then replace both arrayindex values with null

			 if matchRule(card1,card2) = true {
					array[card1], array[card2] = null;
			 }

	 		- last run winCallBack to see if any cards have "faceup" property of false, if not 
	 		for (pos=0, pos<array.index; ++pos) {
	 			if array[pos].faceup = true, return true
	 		}
	 		else {
	 		return "Congratulations, you win!"
		}
	return playMemory()
}













