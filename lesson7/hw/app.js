angular.module('contactList', [])

.directive('contactItem', function(){
	return {
		template: '<section><h3>Contact Item</h3></section>',
		// templateUrl: './contact-item.html', //why doesn't this work?
		controller: 'ContactController',
		controllerAs: 'c',
		contact: "=",
		bindToController: true
	} 
})

.controller('FormController', function(){
	var self = this;

	self.contacts = [];

	self.newContact = {
		firstName: "",
		lastName: "",
		description: "",
		telephoneNumber: "",
		email: ""
	}

	self.addContact = function(){

		self.contacts.push( self.newContact );

	};

});
