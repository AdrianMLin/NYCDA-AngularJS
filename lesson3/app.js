angular.module('showNameApp', [])

.controller('mainCtrl', function(){
	var self = this;

	self.users = [
		{name: "abe"},
		{name: "bob"},
		{name: "cal"}
	];

});
