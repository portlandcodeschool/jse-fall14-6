## Section 1

a)
```
function Ctor() {
	this.a = 0,
	this.b = 1
};

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

obj2.c = 2;

obj1.constructor.prototype.d = 3;
```
Each instance now has a 'd' property that holds a value of '3'. This happens because they each share the proto created by Ctor().

b)
In function A we see an object being set as the value for A's prototype whereas in function B the properties are set individually. This difference causes different proto's and constructors to be used.

<br>

---
## Section 2

```
// ===== animal =====
function Animal(name) {
	this.name = name;
};
Animal.prototype.move = function() {
	return 'walk';
};


// ===== bird =====
function Bird(name) {
	Animal.call(this, name);
};

var protoBird = new Animal();
Bird.prototype = protoBird;
protoBird.constructor = Bird;

Bird.prototype.move = function() {
	return 'fly';
};

Bird.prototype.hasWings = true;


// ===== fish =====
function Fish(name) {
	Animal.call(this, name);
};

var protoFish = new Animal();
Fish.prototype = protoFish;
protoFish.constructor = Fish;

Fish.prototype.move = function() {
	return 'swim';
};


// ==== penguin ====
function Penguin(name) {
	Bird.call(this, name);
};

var protoPenguin = new Bird();
Penguin.prototype = protoPenguin;
protoPenguin.constructor = Penguin;

Penguin.prototype.move = function() {
	return 'swim';
};
```

<br>

---
## Section 3

See template-tarot.js

<br>

---
## Section 4

See template-memory.js