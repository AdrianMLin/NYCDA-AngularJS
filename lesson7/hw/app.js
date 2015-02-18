angular.module('contactList', [])

.directive('contactItem', function(){
	return {
		restrict: 'A',
		templateUrl: './contact-item.html',
		controller: 'ContactController',
		controllerAs: 'c'
	} 
})

.controller('FormController', function(){
	var self = this;
	self.addContact = function(){

	};

});
