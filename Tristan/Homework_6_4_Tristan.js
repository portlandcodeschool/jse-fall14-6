//Homework 6 Problem 4

vals = ["red", "red", "green", "green", "yellow", "yellow", "blue", "blue"];

var matching = function(x, y){return x===y;}

var win = function(){console.log("You win!");}

var MemoryBoard = function(vals, matching, win){
	
	var cards = [];
	var cardPosition = [];
	for (var i=0; i<vals.length; i++){cards[i] = vals[i]; cardPosition[i] = "down";}

	//Remaining: Loop through cardPositions and build an array with position numbers for everything not "gone"
	this.remaining = function(){var remaining = []; 
								for(var i = 0; i<cardPosition.length(); i++)
									{if(cardPosition[i] != "gone")remaining[i] = i;} 
								return remaining;
								}

	this.faceUpWhere = function(){return cardPosition.indexOf("up");}

	this.faceUpValue = function(){var x = cardPosition.indexOf("up"); if (x!=false) {return cards[x];}}

	this.reset = function(){(for (var i=0; i<vals.length; i++){cardPosition[i] = "down";})//set all to "down"
								//and then shuffle the cards
								var m = this.cards.length, t, i;
								var array = this.cards;
							  // While there remain elements to shuffle…
							  while (m) {

							    // Pick a remaining element…
							    i = Math.floor(Math.random() * m--);

							    // And swap it with the current element.
							    t = array[m];
							    array[m] = array[i];
							    array[i] = t;
							  }

							  this.cards = array;
							}

	this.lift = function(cardNum){
				if (cardPosition.indexOf("up") == false){ //If no cards are in up position, proceed
					cardPosition[cardNum] = "up"; console.log("Pick another card.");}
				else{ //one card is already "up" so proceed with comparison
					if cardNum == this.faceUpWhere(){console.log("You can't pick the same card twice. Pick again.")} 

					else {//one card is up and you have not chosen the same card twice. Proceed.
					var compareCardOne = cardPosition.indexOf("up"); //get index of the other "up" card
					if (this.matching(cards[compareCardOne], cards[cardNum])) //use matching method to compare
						{cardPosition[compareCardOne]= "gone"; //if they match, mark both as "gone"
						cardPosition[cardNum] = "gone";
						console.log("Those two were a match!");
						}
					else { //if matching method shows no match the put both cards back in "down" position
						cardPosition[compareCardOne] = "down";
						cardPosition[cardNum] = "down";
						console.log("Not a match.");
					}
				}
			}
		}//end of lift function
	}//end of MemoryBoard constructor