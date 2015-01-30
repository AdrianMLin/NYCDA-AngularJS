angular.module('simon', [])

.controller('boardCtrl', function(){
	var self = this;

	


})


.controller('gameCtrl', function(){
	var self = this;

	self.title = "Simon Game"

	self.turnNumber = 1;

	//from stack overflow
	// function shuffle(o){ //v1.0
	//     for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	//     return o;
	// };


	self.colourChoices = ['red', 'blue', 'green', 'yellow'];
	// self.colourChoices = shuffle(self.colourChoices); //randomise

	self.computerInstructions = [];
	self.playerSequence = [];






	// gonna ng-repeat this
	self.pickColour = function(){
		var pickedColour;
		// some magic here (THERE ARE UNDEFINEDS BEING PUSHED HERE)
		self.playerSequence.push(pickedColour);

		self.newTurn();
	}


	// new turn
	self.newTurn = function(){
		self.turnNumber += 1; //increment turn

		self.newColour(); //new instruction

	}

	//new colour for instruction
	self.newColour = function(){

		var randomIndex = Math.floor( Math.random() * self.colourChoices.length );
		var newColour = self.colourChoices[ randomIndex.valueOf() ];
		self.computerInstructions.push( newColour );

		console.log("randomised computer instrucitons: " + self.computerInstructions);
	}



})


/* 
flow:

turn starts
	turn increases
		turnNumber += 1;

	random colour added to computerInstructions
		- .sample() colourChoices
		- .push() to computerInstructions

	output the computerInstructions
		- ng-repeat? forEach? just show in sequence
		- then timeout ng-hide

	player clicks colours to follow 
		- colours added to playerSequence on ng-click
	

	game checks if correct
		- forEach or otherwise iterate through playerSequence to check equivalence with comptuerInstructions
	
		- if correct, turn ends, new turn starts, repeat
		- if incorrect, end game, you lose, sucker.


*/