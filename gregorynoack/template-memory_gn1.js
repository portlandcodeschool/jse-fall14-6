var MemoryBoard = (function() {

	function Memory(values,matchFn,displayFn,winFn) {
		var slots, //sparse array: will have elements deleted as cards are removed
			length,//total slots, including gaps
			number; //position of face-up card if any, or false
		var reset = function() {  //public method
			slots = values.slice(); // slice Values of Array
			length = values.length; //Get lenght of Array
			number = false;
			shuffle(slots);
		}
		reset();// reset now as part of init'ing

		//Match Check
		var faceupWhere = function() {
			return slots[number];
		}
		var faceupValue = function() {
			return number;
		}
		var remaining = function() {
			return Object.keys(slots).map(Number);
		}

		var valAtWhere = function(where){
			return slots[where];
		}
		var lift = function(where) {
			var valHere = valAtWhere[];
				if(number === false){
					number = slots.splice(where,1);
					return number[0];
					//Turn Face Up and stored card
				}else{
					if(matchFn( valHere, valAtWhere)){
						return true;

					}else{
						return number[0];
					}
					//check to see if where == stored card
					// if(){
					// 	//no match flip card back over
					// }else{
					// 	//delete cards
					// }
				}
		}

	// Make some methods public:
		this.reset = reset;
		this.lift = lift;
		this.faceupValue = faceupValue;
		this.faceupWhere = faceupWhere;
		this.remaining = remaining;
	}//end ctor

	///IS Valid
	function isValid(where,length) {
		return (typeof where === 'number')
			&& (where%1 === 0)
			&& (where>=0)
			&& (where<length)
	}
	//Shuffle
	function shuffle(array) {
	// Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
		var end = array.length, temp, i;
  			// While there remain elements to shuffle…
		while (end>1) {
   			// Pick a remaining element…
   			i = Math.floor(Math.random() * end--);
   			// And swap it with the current element.
   			temp = array[end];
   			array[end] = array[i];
		    array[i] = temp;
 		}
	}
return Memory; //end IFFE
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


