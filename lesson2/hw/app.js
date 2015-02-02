angular.module('simon', [])

// .controller('boardCtrl', function(){
// 	var self = this;

	


// })


.controller('gameCtrl', function($timeout){
	var self = this;


	/////////////////////
	/// binding stuff ///
	/////////////////////

	self.title = "Simon Game"
	self.turnNumber = 0;

	//from stack overflow
	// function shuffle(o){ //v1.0
	//     for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	//     return o;
	// };

	self.colourChoices = ['red', 'blue', 'green', 'yellow'];
	// self.colourChoices = shuffle(self.colourChoices); //randomise

	self.computerInstructions = "";
	self.playerSequence = "";


	self.pickColour = function(colour){
		self.playerSequence += colour + " ";
		$timeout( checkCorrect, 450);
	}


	//////////////////////
	/// back-end logic ///
	//////////////////////

	function checkCorrect(){
		//had to use .split(" ") because it's not an array, and so .length() didn't work. also could not use array with ng repeat because ng-repeat cannot repeat identicals
		if ( self.playerSequence.split(" ").length == self.computerInstructions.split(" ").length ) {
			// console.log('same length!');
			if ( areColoursEquivalent() == true ){
				console.log('good job! next turn now!');
				startNewTurn();			
			} else if ( areColoursEquivalent() == false ) {
				alert('Wrong!');
				startNewGame();
			}
		}
	}

	//new turn
	function startNewTurn() {
		self.playerSequence = ""; //clear sequence
		self.turnNumber += 1; //increment turn
		newColour(); //new instruction
	}

	//getting a new colour for instructions
	function newColour(){
		var randomIndex = Math.floor( Math.random() * self.colourChoices.length );
		var colour = self.colourChoices[ randomIndex.valueOf() ];
		// var newColourHTML = "<span class='" + colour + "'>" + colour + "</span>";
		self.computerInstructions += colour + " ";

		// console.log("randomised computer instrucitons: " + self.computerInstructions);
	}

	//checking if colours are equivalent
	function areColoursEquivalent(){
		return self.computerInstructions == self.playerSequence;
	}

	//start new game if you lose
	function startNewGame() {
		window.location.reload();
	}




	/////////////////////////
	///	Starting the game ///
	/////////////////////////

	startNewTurn();




});



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