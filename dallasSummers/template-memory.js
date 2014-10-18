var MemoryBoard = (function() {

	function Ctor(values,matchFn,displayFn,endgameFn) {

		var faceupValuesArr = [];

		board = values.slice();

		this.reset = function(){

			//create new game board
			board = values.slice();
			
			//shuffling the entire array
			board.sort(shuffle);

			faceupValuesArr = []

			return 'ready to play!';

		};

		
		this.faceupWhere = function(){

			if(faceupValuesArr[0] !== undefined){

				return board.indexOf('face up');
			}
			// return false;
		};
		
		
		this.faceupValue = function(){

			if(faceupValuesArr.length > 0){
			
				return faceupValuesArr[0];
			}
			
			return false;
		};

		this.remaining = function(){
			return Object.keys(board).map(Number)
		};

		
		this.lift = function(where){
	
			var lifted = board[where];
	
			if(lifted !== undefined){
				
				if(faceupValuesArr[0] === undefined){

					faceupValuesArr.push(lifted);

					board.splice(where,1, 'face up');

					if(displayFn){

						return displayFn(faceupValuesArr[0]);
					}
					else{

						return this.faceupValue();
					}
				}

				else if(matchFn(lifted, this.faceupValue())){

					console.log(lifted + ', ' + this.faceupValue());

					board.splice(where,1);

					faceupValuesArr.shift();

					board.splice(board.indexOf('face up'),1);

					return 'Match!';
					}
				else{

					displayFn(lifted);

					faceupValuesArr.shift();

					return 'no match! Try again';
				}
			}
							
			if(board.length === 0){
				
				if(endgameFn){

					return endgameFn();
				}
				else{
					return "No more pairs! You Won!";
				}
			}
		
		};

		
		
		function shuffle(array) {
		  var m = array.length, t, i;

		  // While there remain elements to shuffle…
		  while (m) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		   
		    array[m] = array[i];
		   
		    array[i] = t;
		  }
		}
	}
	//...

	return Ctor;
})();


// ----Example set 1:----

// card values:
var food = ['apple','artichoke','banana','blueberry','carrot','cranberry'];

match callback:
var sameInitial = function(str1,str2) {
	return str1[0]===str2[0];
};
// end game callback:
var gameoverFn = function() {console.log("You win!");};

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












