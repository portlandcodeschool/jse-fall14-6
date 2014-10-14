var MemoryBoard = (function() {
	function Ctor(values,matchFn,displayFn,endgameFn) {

		this.reset = function(){}

		this.faceupWhere = function(){

			return values[]
		}

		
		
		this.faceupValue = function(){

			if(faceupValuesArr[0]){
			
				return faceupValuesArr[0];
			}
			
			return false;
		}

		this.remaining = function(){}

		

		this.lift = function(where){

			//if where is a valid point in the array of values, then proceed, otherwise return false
			if(values[where] !== undefined){

				//if there is a value already in our array of face up values
				if(faceupValuesArr[0]){

					//if the value found in our face up array called by our faceupValue function is not equal to our where value
					if(!(this.faceupValue() === values[where])){

						//then push our value in our face up Array back into our original values array and remove it from the faceup array
						values.push(faceupValuesArr.shift())

						//then put our where value into our faceup array
						faceupValuesArr.unshift(values[where]);

						//where our where value was found in our values array, replace it with the string face up.
						values[where] = 'face up';
					}
					else{

						delete(value[where] && faceupValuesArr[0]);
					}
				}

			}
			return false;
		}
		
		var faceupValuesArr = [];
	}
	//...

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
