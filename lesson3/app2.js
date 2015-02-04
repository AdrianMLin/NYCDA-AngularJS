angular.module('thisApp', [])

.directive('myUserEditDirective', function(){
	return {
		template: '<div>Generated from my template</div>'
	}
})

.directive('testTest', function(){
	return {
		templateUrl: "./partials/template-url.html", // needs a server
		restrict: 'A',
		scope: {
			currentUser: '=',
			myScopeFunction: '&',
			myScopeReadMeOnlyVariable: "@"
		},
		controller: 'MyDirectiveController'
		link: function(scope, element, attributes) {
			console.log(attributes);
		}

	}
})

.controller('MyDirectiveController', function($scope){
	//the $scope variable has all the return
	console.log($scope.currentUser)
	console.log($scope.myScopeReadOnlyVariable)
})

.controller('mainCtrl', function(){
	var self = this;




	this.isDisplayingUserOne;

	self.userOne = {firstName: "abe", lastName: "lincoln"};
	self.userTwo = {firstName: "bob", lastName: "marley"};
	self.userThree = {firstName: "pika", lastName: "chu"};

	self.onEditAction = function(user) {
		if (user == self.userOne) {
			self.isDisplayingUserOne = !self.isDisplayingUserOne;
		} else if (user == this.userTwo) {

		} else {

		}
	}
});
