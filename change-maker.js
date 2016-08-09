var changeMakerApp = angular.module('changeMakerApp', []);
changeMakerApp.controller('changeMakerController', function($scope, $filter){

	var purse = {
       dollar: {
           name: "dollar coin",
           value: 1.00,
           image: "images/dollar.png"
       },
       quarter: {
           name: "quarter",
           value: 0.25,
           image: "images/quarter-front.png"
       },
       dime: {
           name: "dime",
           value: 0.10,
           image: "images/dime-front.png"
       },
       nickel: {
           name: "nickel",
           value: 0.05,
           image: "images/nickle-front.png"
       },
       penny: {
           name: "penny",
           value: 0.01,
           image: "images/penny-front.png"
       }
   };

   var changeArray = [];
   $scope.changeArray = changeArray;

	$scope.makeChange = function(){
		// make change function called by button click (ng-click)
		var leftOver = $filter("number")($scope.paid - $scope.total, "2");
		$scope.totalDue = $filter('currency')(leftOver, "$", "2");
		for(coin in purse){
			while(purse[coin].value <= leftOver){
				$filter("number")(purse[coin].value, "2");  //done for rounding purposes
				$scope.changeArray.push(purse[coin]);
				leftOver -= purse[coin].value;
				leftOver = $filter("number")(leftOver, "2"); //done for rounding purposes
			}
		}

		sortThroughCoins(changeArray);

	}

	function sortThroughCoins(arr){
		var coinAmountArray = [];
		var current = null;
		var count = 0;

		arr.sort(function(a, b){
			if (a.value > b.value){
				return -1;
			}else if(a.value < b.value){
				return 1;
			}else{
				return 0;
			}
		});
		for(var i=0; i < arr.length; i++){
			if(arr[i] != current){
				if(count > 1){
					coinAmountArray.push("You have " + count + " " + current.name + "'s");
				}else if(count == 1){
					coinAmountArray.push("You have " + count + " " + current.name);
				}
				current = arr[i];
				count = 1
			}else{
				count++;
			}
		}
		if(count > 1){
			coinAmountArray.push("You have " + count + " " + current.name + "'s");
		}else if(count == 1){
			coinAmountArray.push("You have " + count + " " + current.name);
		}
		$scope.coinAmount = coinAmountArray;
	}
	
});