angular.module('myApp', [])


.directive('myUserEditDirective', function() {
  return {
    templateUrl: '../partials/my-user-edit-directive.html',
    restrict: 'A',
    scope: {
      currentUser: '=',
      currentState: '=',
      myScopeFunction: '&',
      myScopeReadOnlyVariable: "@"
    },
    controller:'MyDirectiveController',
    link: function(scope, element, attributes) {
      console.log(attributes)
    },
    transclude: true
  }
})

.controller('MyDirectiveController', function($scope) {
  $scope.isDisplaying = true;
  $scope.onEditAction = function() {
    if (!this.currentState.isEditing) {
      this.isDisplaying = !this.isDisplaying;
      this.currentState.isEditing = true;
    }
  }

  $scope.onEditAction =  function() {
    console.log('editing!');
    $scope.isDisplaying = !$scope.isDisplaying;
  }
  $scope.onCancelAction = function() {
    console.log('cancelling!');
    $scope.isDisplaying = !$scope.isDisplaying;
    this.currentState = !this.isDsiplaying;
    this. currentState.isEditing = false;
  }

})

.controller('MyCtrl1', function() {
  this.isDisplayingUserOne = true;

  this.currentState = {
    isEditing = false;
  };


  this.userOne = {
    firstName: "George",
    lastName: "Washington"
  };

  this.userTwo = {
    firstName: "Abraham",
    lastName: "Lincoln"
  }

  this.userThree = {
    firstName: "Thomas",
    lastName: "Jefferson"
  }

  this.testFunction = function() {
    alert('Hello World');
  }


});
