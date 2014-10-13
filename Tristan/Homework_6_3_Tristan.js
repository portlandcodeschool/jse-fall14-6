//Homework 6 Problem 3 - Tristan
// This IIFE will define a superclass:
var Card = (function(){


	var Ctor = function(id){

		//Check the argument to make sure it's a valid card ID
		if (!((id>-1) && (id<56))) console.log("Invalid card number."); //Allows numbers to include tarot cards, too
		if (typeof(id) != "number") console.log("Invalid card number.");
		if ((id%1)!==0) console.log("Invalid card number.");
	    
	    this.id = id;

	}//This is the end of the constructor

    //Class variables
	var suitNames = ["Hearts", "Diamonds", "Spades", "Clubs"];
    var rankNames = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven","Eight", "Nine", "Ten", "Jack", "Queen", "King"]


	//Class Methods - this is like a little toolbox for decks of cards

	//Class method #1: return true if the card is a valid instance of class Card
	Ctor.isCard = function(card){
		return (card instanceof Card);
	}

	//Class method #2: returns the number of cards in a deck
	Ctor.numCards = function(){
		return 52;
	}
	//Class method #3: returns array of all rank names
	Ctor.rankNames = function(){
		var x = rankNames.slice();
		return x;
	}

	//Class method #4: returns array of all suit names
	Ctor.suitNames = function(){
		var x = suitNames.slice();
		return x;

	}

		//Define each of the functions that will be given to the instances.

		//#1 is the rank function
		Ctor.prototype.rank = 
		function() {
			   return Math.ceil((this.id+1)/4);
			}

			//#2 is the suit function
			Ctor.prototype.suit =
			function(){
			return (this.id%4)+1;
				 }

			//#3 is the color function
			Ctor.prototype.color=
			function(){
					var mySuit = this.suit(this.id);
		     	if ((mySuit === 1) || (mySuit ===2))
		    	return "red";
			    	else 
		        	return "black";
				}

		//#4 is the name function which we must call differently for some reason. I'll call it myName
		Ctor.prototype.name = 
		function(){
				var fullName = this.constructor.rankNames()[this.rank(this.id)-1] + " of " + this.constructor.suitNames()[this.suit(this.id)-1];
				return fullName;
			    }


	return Ctor;

}) (); //Close the function definition with the closing brace. Close the parens that cause the function definition to happen. Then parens to cause the function to run immediately.


// This IIFE will create a subclass (constructor TarotCard) of a superclass (constructor Card)
var TarotCard = (function(Super){ //<-- Superclass is parameter

	// Create subclass constructor:
	function SubCtor(id) {
		Super.call(this,id); // call superclass ctor first
		this.upright = true; // then add subclass-specific properties
	}
	SubCtor.isCard = Super.isCard; //share one superclass method

	// Override some other superclass methods and resources:

	var suitNames = ["Cups","Pentacles","Swords","Wands"];
	var rankNames = Super.rankNames(); // subclass ranks are derived from super,
	rankNames.splice(10,1,"Page","Knight"); // but Jack gets replaced w. Page+Knight

	SubCtor.rankNames = function() {
		return rankNames.slice();
	}
	SubCtor.suitNames = function() {
		return suitNames.slice();
	}
	SubCtor.numCards = function() {
		return 56;
	}

	// Replace default prototype so that subclass inherits from superclass
	var proto = (SubCtor.prototype = new Super());
	proto.constructor = SubCtor;

	// Override one superclass instance method:
	proto.color = undefined; //Tarot cards have no color; disable inherited method

	return SubCtor;
})(Card); //<-- provide superclass as argument to IIFE