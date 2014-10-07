angular.module("myApp", [])
.controller('MyController', ['$scope', function($scope) {

	$scope.taskList = [
		{name : 'First', state:true}
	];

	$scope.doneList = [];

	$scope.add = function() {
		$scope.taskList.push({name:$scope.task, state:false});
		$scope.task = '';
	};

	$scope.remove = function(item) {		
		$scope.taskList.splice(item, 1);
		$scope.doneList.splice(item, 1);
	};
}]);



