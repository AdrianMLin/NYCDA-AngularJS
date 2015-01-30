angular.module('monkey', []) 
//no ; so we can chain /chaining functions here to avoid global variable

//no need for scope now, it's better for testing.
.controller('octopus', function($scope) {
	var self = this;
	self.name = "otto octavius";

	self.list = ['cephalopod', 'tentacles', 8];


	self.thing = "ougagdougou"

	$scope.$watch('ougagdougou', function(newValue, oldValue) {
		if (newValue) {
			console.log('new value: ' + newValue);
			console.log('old value: ' + oldValue);
		}
	})

}) //no ; so we can chain

//no need for scope
.controller('fox', function() {
	var self = this;
	self.name = "frank jaeger";

	self.list = [
		['ninja suit', 'katana', 'electricity'], 
		['red', 'blue'] 
	];

	self.details = {
		occupation: "ninja",
		armour: "plated",
		organisation: "foxhound"
	}


	self.boom = function(){
		alert('boom');
	}


	self.showDetails = false;


	self.veracity = true;

	self.focusDo = true;


	self.focusClass = "red";

}) //no ; so we can chain

.controller('scopeme', function($scope) {
	$scope.name = "scopeo and juliet";
});