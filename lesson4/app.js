angular.module('app', [])

.value("COLOR_THEME_VALUES", {
	//should match up to styling and css
	RED: {
		bodyColor: 'red',
		fontColor: 'font-green',
		displayValue: "Red Fire"
	},

	BLUE: {
		bodyColor: 'blue',
		fontColor: 'font-yellow',
		displayValue: "Blue Steel"
	},
	GREEN: {
		bodyColor: 'green',
		fontColor: 'font-red',
		displayValue: "Green Giant"
	},
	YELLOW: {
		bodyColor: 'yellow',
		fontColor: 'font-blue',
		displayValue: "Yellow Sun"
	},

})

.factory('MyFactoryExample', function(){
	var name = "hello"
	var test = function() {
		console.log('test');
	}

	return {
		myName: name
	}
})

.service('MyServiceExample', function(){
	this.serviceName = "Ford";
	this.serviceFunction = function(){
		console.log('log from service');
	};
})

// .controller('ctrl', function(MyFactorExample, MyServiceExample, COLOR_THEME_VALUES){
// 	//this gives the VIEW access to this object
// 	this.COLOR_THEME_VALUES = COLOR_THEME_VALUES; 
// 	console.log(MyFactoryExample);
// 	console.log(MyServiceExample);

// })

.controller('ctrl', function(COLOR_THEME_VALUES){
	//this gives the VIEW access to this object
	this.COLOR_THEME_VALUES = COLOR_THEME_VALUES; 


})



