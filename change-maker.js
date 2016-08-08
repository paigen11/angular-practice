var changeMakerApp = angular.module('changeMakerApp', []);
changeMakerApp.controller('changeMakerController', function($scope){

	$scope.makeChange = function(){
		var bill = Number($scope.billAmount);
		var given = Number($scope.givenAmount);
		var change = given - bill;
		change = change.toFixed(2);
		console.log(change);

		$scope.total = change;

		// for(var i = change; i >= 0.25; i++){
		// 	change = change[i] - 0.25;
		// 	console.log(i);
		// 	}	
		}
});