// 3a

//Rewrite makeCard factory as a constructor Card

var Card = (function(id) {
	this.id = id;
})();

Card.rank = function() {
	return Math.floor(this.id/4)+1
}

Card.suit = function() {
	return (this.id%4)+1
}

Card.color = function() {
	var suit = this.suit();
	return ((suit<3)? "red": "black");
}

Card.name = function() {
	var ranks = this.rankNames();
	var suits = this.suitNames();
	var cardRank = this.rank() - 1;
	var cardSuit = this.suit() - 1;
	return cardRank && cardSuit && ([cardRank] + " of " + suits[cardSuit]);
}

Card.isValid = function() {
    if ((typeof this.id)!="number" || this.id%1 !== 0 || 
            this.id < 0 || this.id > 51) {
        return null;
    }
    return true;
}

Card.isCard = function(card) {
    if ((typeof card)!="object") {
            return null;
    }
    if (!("id" in card) || !card.rank || !card.suit || !card.color || !card.name || !card.isValid) {
        return null;
    }
    return true;
}

Card.numCards = function() {
	return 52;
}

Card.rankNames = function() {
	return ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
}

Card.suitNames = function() {
	return ["Hearts", "Diamonds", "Spades", "Clubs"];
}