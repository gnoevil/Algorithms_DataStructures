var Card = function Card(suit, value){
	this.suit = suit;
	this.value = value;
	this.card_string;
}


var Deck = function Deck(){
	this.deck = [];
	this.reset();
	this.shuffle();
}

Deck.prototype.reset = function(){
	this.deck = [];
	var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
	var pips = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

	for(var suit in suits){
		for(var pip in pips){
			this.deck.push(pips[pip] + ' of ' + suits[suit]);
			// this.deck.push({suit: suits[suit], value: pips[pip], string: pips[pip] + ' of ' + suits[suit]});
		}
	}
	return this;
}

Deck.prototype.shuffle = function(){
  var m = this.deck.length;
  var t;
  var i;


  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }

  return this;
}

Deck.prototype.deal = function(){
	return this.deck.pop();
}




var Player = function Player(name){
	this.name = name;
	this.hand = [];
	// this.deck = deck.deck;
}

Player.prototype.draw = function(deck){
	this.hand.push(deck.deal());
	return this;
}

Player.prototype.discard = function(){
	this.hand.pop();
	return this;
}



var brendans_deck = new Deck();
var steve = new Player('Steve');
steve.address = {street: '123 Fake Street'};
steve.address.zip = 94536;
// steve.draw(brendans_deck).draw(brendans_deck)
console.log(steve);
// console.log(brendans_deck.reset());
