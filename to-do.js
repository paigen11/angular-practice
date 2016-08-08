var toDoApp = angular.module('toDoApp', []);
toDoApp.controller('toDoController', function($scope){
	
	$scope.tasks = [
		{
			title: "groceries",
			description: "go to the supermarket for food" ,
			deadline: "Tuesday",
			completed: false
		},
		{
			title: "laundry",
			description: "wash, dry and fold clothes",
			deadline: "Thursday",
			completed: false
		},
		{
			title: "car",
			description: "wash and vacuum out the car",
			deadline: "Sunday",
			completed: false
		},
		{
			title: "dentist appt",
			description: "make an appointment to see the dentist",
			deadline: "Wednesday",
			completed: false
		}
	];

	$scope.addToDo = function(){
		$scope.tasks.push({title: $scope.newTitle, description: $scope.newDescription, deadline: $scope.newDeadline}); 
	}

	// //not quite working yet
	// $scope.removeToDo = function(){
	// 	for(var i = $scope.tasks.length; i >= 0; i--){
	// 		if($scope.checkBoxModel[i] === true){
	// 		$scope.tasks.splice(index,1);
			
	// 		}
	// 	}
	// }
})