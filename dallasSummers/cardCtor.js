//**3)***

	var Card = 
	(function(){

		var cardRankArr = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

		var cardSuitArr = ['Hearts','Diamonds', 'Spades', 'Clubs'];

		function Card(id){

			this.id = id;
		}


		Card.rankNames = function(){

			return cardRankArr.slice();
		}

		Card.suitNames = function(){ 
				
				return cardSuitArr.slice()	
			};

		Card.numCards = function(){

				return 52;
			};

		Card.prototype = {

			isValid :function(card) {

			    if(this !== undefined){
			        
			        if((typeof(this) == 'number') || Object.keys(this).length === 0){
			        
			            return false;
			        }

			        if (this.id >= 52){

			            return false;
			        
			        }else{

			            return true;
			        }
			    }else{

			        if(!(typeof(this.id) == 'number')){

			            return false;

			        }

			        if(this.id >= 52){

			            return false;
			        
			        }else{

			            return true;
			        }
			    }
			},


			rank: function() {
			    if(!(typeof(this.id) == 'number')){
			        
			        return 'invalid input, is NaN';
			    
			    }else{
			        
			        return Math.floor((this.id/4) + 1);
			    }
			},


			suit :function() {
			    
			    return (this.id % 4) + 1;

			},

			color :function() { 

			    var cardSuit = this.suit();
			    
			    if(cardSuit < 3){
			    
			        return 'red';
			    
			    }else{
			    
			        return 'black';
			    
			  }
			},

			name :function() { 
			    
			    var cardRank = this.rank();
			    
			    var cardSuit = this.suit();

			    return cardRankArr[cardRank] + ' of ' + cardSuitArr[cardSuit];
			    
			},
		}
	
	return Card
	})();


var num0 = new Card(0);

// num0.prototype = Card;














