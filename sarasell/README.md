### Homework #6
Due Mon. 10/13

---

 **1)  Constructor basics** _[easy, 1/2 hr]_

**a)** Heres a sequence of simple exercises related to how constructors and prototypes work.

-   First make a constructor named _Ctor_ for an object that has properties _a_ and _b_ and initializes them to 0 and 1 
respectively.
-   Now, make two objects named _obj1_ and _obj2_ using _Ctor_.
-   Now make a new object _obj3_ this way:
    ```
    var obj3 = {};
    Ctor.call(obj3);
    ```

    and check its properties.
-   Next, add a property _c_ to _obj1_ with a value of 2.  What will be the value of _obj2.c_? //undefined
-   Now, add a property _d_ with the value 3 to _obj1_s "proto" (the object which helps out when _obj1_ cant do something 
	by itself).  Remember that there are at least four ways of referring to that proto object.
-   What are the values of _obj1.d_, _obj2.d_, and _obj3.d_? Can you explain the results?


//ANSWER
function Ctor() {
	this.a = 0;
	this.b = 1;
}
obj1 = new Ctor();
obj2 = new Ctor();
var obj3 = {};
Ctor.call(obj3);
obj1.c = 2;
obj1.d = 3;
var proto = obj1.__proto__;
proto.d = 3;
 
The values of obj1.d and obj2.d are both 2. The value of obj3.d is undefined. This happens because ___________.


**b)** Consider this code:

```
function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
```

There is a difference between the behaviors of `objA` and `objB`!  Explain.

//ANSWER
objA doesnt know that A is a constructor. objB knows that B is a constructor. A.prototype = {num:0, str:'default'}
overrides the above object but B.prototype.num simply adds a property to the already setup object. A is a constructor
of the "native Object" whereas B is actually the constructor B.

---

**2) Simple Subclassing** _[easyish: 1hr]_

Implement a simple taxonomy of four related classes, using a constructor for each:

- _Animal_: every instance of an Animal should inherit a method called _move()_.  For basic animals, this just returns 
the string "walk".
- _Bird_: A subclass of Animal.  Every Bird instance should return "fly" instead of "walk" when asked to _move()_.  
All Birds also have a property _hasWings_ which is true.
- _Fish_: Another subclass of Animal.  A Fish instance will "swim" instead of "walk".
- _Penguin_: A subclass of Bird.  Penguins cannot fly and they should move like Fish.

Every instance of Animal and its subclasses should also have a personal _name_ property which is not inherited.  
It should be set only within the constructor Animal, and each subclass should each ensure that its own constructor calls 
its superclass constructor as an initializer.


function Animal(name) {
	this.name = function () {
		return name;
	};
	this.move = function () {
		return 'walk';
	};
	this.vertebrate = function () {
		return true;
	};
}

function Bird(name) {
	this.name = function() {
		return name;
	};
	this.move = function() {
		return 'fly';
	}
	this.hasWings = function () {
		return true;
	};
}


Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;


function Fish(name) {
	this.move = 'swim';
	this.name = name;
}

Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;

function Penguin(name) {
	this.move = 'swim';
	this.hasWings = false;
	this.name = name;
}

Penguin.prototype = new Bird();
Penguin.prototype.constructor = Penguin;


You should see these behaviors:
```
new Animal("Simba").move();// 'walk' ***
new Fish("Nemo").move();// 'swim' ***
new Bird("Lulu").move();// 'fly' ***
var pengo = new Penguin("Pengo"); ***
pengo.name;     // "Pengo"  ***
pengo.move();   //'swim'
pengo.hasWings; //true;
pengo instanceof Penguin; //true
pengo instanceof Bird; 	  //true
pengo instanceof Animal;  //true
```

---
**3) Cards Finale** _[moderate, 2hrs]_

**a)**
Rewrite your _makeCard_ factory as a constructor _Card_.  You should define your constructor and any supplementary code 
nside an IIFE and export it to a global variable _Card_.

_Card_ should initialize card objects which have the same four instance methods as before (`rank()`, `suit()`, `color()`, 
	and `name()`), plus another method `isValid()`, which returns _true_ if the card has a valid id.
Implement each of those instance methods using _Card_s prototype instead of linking them to each card.  Make sure each 
method uses `this` to refer to the card instance.

_Card_ should also have four class methods which are called through the constructor:

- `isCard(card)` returns true if card is a valid instance of the class _Card_;
- `numCards()` returns the number of cards in a full deck;
- `rankNames()` returns an array of all rank names;
- `suitNames()` returns an array of all suit names.

For both name arrays: omit any empty "padding" strings, and protect the internal name arrays by returning only a copy.

There are multiple ways of organizing your module to satisfy these requirements, but some of the patterns will be much
easier to adapt to part (b).  Read ahead carefully and study the included [template file](template-tarot.js).


var Card = // receive constructor with external name `Card`
    (function () { //begin IIFE...

    var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven',
                        'Eight','Nine','Ten','Jack','Queen','King'];
    var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];

    var isValidID = function(num) { // Returns--> true, false
         return ((typeof num)==="number") //correct type
                 && (num%1 === 0)        //integer
                 && num>=0 && num<=51;   //in range
    };
    function Card(id) {
        if (!isValidID(id))
            return null;
        this.id=id;
    };
    Card.prototype.rank = function () { // --> 1..13, NaN
        return Math.floor(this.id/4)+1;
    };
    Card.prototype.suit = function () { // --> 1..4, NaN
        return (this.id%4)+1;
    };
    Card.prototype.color = function () { // -->"red,"black", NaN
        var suitVal = this.suit();
        return suitVal && ((suitVal<3)? "red": "black");
    };
    Card.prototype.cardName = function () { //--> string, NaN
        var rankVal = this.rank();
        var suitVal = this.suit();
        return rankVal && suitVal &&
            (rankNames[rankVal]+' of '+suitNames[suitVal]);
	};
	Card.isCard = function(card) { // Returns --> true, falsish
    	return card instanceof Card;
    };
    Card.numCards = function() {
		return 52;
	};
	Card.listRanks = function() {
		return rankNames.slice();
	};
	Card.listSuits = function() {
		return suitNames.slice();
	};
    return Card;  
})(); //end IIFE definition and do it now!

//example
card1 = new Card();
> Card {id: 1, rank: function, suit: function, color: function, cardName: function}
card1.rank()
> 1
card1.color()
> "red"

**b)** The Card class will have a subclass TarotCard, another constructor which inherits from it.  Tarot cards (Minor 
only!) are similar to ordinary playing cards, but with four differences:

1. Their suit names are "Cups", "Pentacles", "Swords", and "Wands".

2. A Jack is called instead a "Knight", and there is one extra rank "Page" between "Ten" and "Knight".  Therefore there 
are 56 total cards.

3. Tarot cards have no color, and should have no such method.

4. Each tarot card can be oriented normally or upside-down, and has a boolean instance property reflecting that 
orientation.

The _TarotCard_ constructor is implemented in a separate module, and it has been written completely in the [template]
(template-tarot.js).  You dont need to change anything in that module.  But you should write your _Card_ module in such a 
way that _TarotCard_ can sucessfully inherit from it.  An expression like `card = new Card(51)` should make an object with 
Card behavior, and `tarot = new TarotCard(51)` should make an object with Tarot behavior.
The two classes should be able to co-exist and pass all of the tests in the template.


---
**4) Memory Game** _[moderate, 4 hours]_

Write a game of Memory, in which some set of cards are arranged face down on a board and a player turns them over looking for pairs.
In this version, your board will be a single row of cards (later youll convert it to a 2D grid) which are identified by a single position number.

_[UPDATE: You can write the constructor using either public data accessible to a prototype, or private data in a closure with dedicated methods.  But youll find in difficult to combine them.  Pick one strategy or the other.]_

Use a constructor ~~and prototype~~ _(optional)_, packaged in an IIFE, to implement a game board.
Your _MemoryBoard_ constructor should receive 3 arguments:

1. an array of values, each representing a game "card" (not necessarily a playing card).  You should have an even number of values which can be matched in pairs.
1. a callback which takes 2 cards as parameters and returns true if they match.  The definition of "match" will depend on the card type.
1. an optional "win" callback which takes no arguments and is run when the game ends.

For example, if you decide to use regular playing cards in your game, your _values_ array could be a set of 52 cards generated by your _Card_ constructor.  In that case, an appropriate matching function might return true if two cards are the same rank and same color, creating 26 matching pairs.  Alternatively, you could use simple strings as cards, with two of each in your values set.  But your implementation should be completely general, without commitment to any particular values.  Only the consumer of your module will supply the values and matching rule.

Your board must keep track of whether and where any card is face up, where any matching cards have been removed, and where unmatched cards remain.

Your board should have these instance methods:

* `reset()` replaces all removed cards, reshuffles the entire board, and rebuilds the board face-down.

* `faceupWhere()` returns the position (a number) of the one face-up card (if any), otherwise returns _false_.

* `faceupValue()` returns the value of the one face-up card (if any), otherwise _false_.

* `remaining()` returns an array of the positions of all cards still on the board.

* `lift(where)`  If there is a face-down card at position _where_ (a single number), return its value; otherwise return _false_.  If there is not currently a face-up card, leave this card face-up.  If theres already a face-up card, do one of the following:

	* If this card and the face-up card match (according to your matching callback), remove both from the board.  If all pairs are removed from the board, you win the game; run the "win" callback, if any.

	* If there is no match, leave both cards in place and turn them face down.

Though it might be difficult, it should be possible to play an entire game through the console, one `lift()` at a time.

