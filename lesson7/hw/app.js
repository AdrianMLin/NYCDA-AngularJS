var myApp = angular.module('contactList', ['ui.router']);

myApp.directive('contactItem', function(){
	return {
		// template: '<section><h3>Contact Item</h3></section>',
		templateUrl: './contact-item.html', //why doesn't this work?
		controller: 'ContactController',
		controllerAs: 'c',
		scope: {
			contact: "="
		},
		
		bindToController: true
	} 
});

myApp.config( function( $stateProvider, $urlRouterProvider ) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/add-contact");
  //
  // Now set up the states
  $stateProvider
    .state('add-contact', {
      url: "/add-contact",
      templateUrl: "partials/add-contact.html"
    })
    .state('add-contact.list', {
      url: "/list",
      templateUrl: "partials/add-contact.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('show-contact', {
      url: "/show-contact",
      templateUrl: "partials/show-contact.html"
    })
    .state('show-contact.list', {
      url: "/show-contact.list",
      templateUrl: "partials/show-contact.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});

myApp.controller('ContactController', function(){
	var self = this;
});

myApp.controller('FullController', function(){
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

		console.log( self.contacts );

		self.newContact = {
			firstName: "",
			lastName: "",
			description: "",
			telephoneNumber: "",
			email: ""
		}
	};

});


