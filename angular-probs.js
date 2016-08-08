var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope){

	$scope.findYear = function(){
		var age = Number($scope.age);
		var date = 2016;
		var answer = date - age;
		$scope.result = answer; 
	};

});