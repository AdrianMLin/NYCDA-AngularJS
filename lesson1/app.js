

var myFirstAppModule = angular.module("MyFirstApp", [ /*dependencies*/ ]);


//accepts two arguments, name of controller, and function, uses dependency injection.
myFirstAppModule.controller("MyFirstController", function($scope){
	
	$scope.name = "bob"
	$scope.car = "Honda";


	$scope.buttonPressed = function() {
		alert($scope.winner); 
		// winner is not declared, but it is bound to scope via html 2 way bind
		
		$scope.winner = "";
		// by resetting it, it changes on html again , 2 way binding yo!

	}

	$scope.myObjects = ["octopus", 1, true, {key: 'value'}, null, undefined];
});

// one-way binding, defined in scope, and can be used in html
// - controller --> html

// two-way binding, can define in html and use in controller
// - controller <--> html