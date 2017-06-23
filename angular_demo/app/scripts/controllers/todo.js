'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularDemoApp
 */
app.controller('TodoCtrl', function ($scope, $http) {
	this.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];
	$scope.obj = "good work";
	
	$scope.todoTask = {};
	//$scope.todoList = [{title: "Go Market",desc: "Go to market to buy vegetables", status: "notStarted"}, {title: "Go Market",desc: "Go to market to buy vegetables", status: "notStarted"}, {title: "Go Market",desc: "Go to market to buy vegetables", status: "notStarted"}];
	$http({
	    method : "GET",
	    url : "http://0.0.0.0:3000/todo_tasks"
	}).then(function mySuccess(response) {
	    $scope.todoList = response.data;
	}, function myError(response) {
	    alert(response.statusText);
	});

	$scope.create = function(todoTask) {

		var req = {
			method: 'POST',
			url: 'http://0.0.0.0:3000/todo_tasks',
			headers: {
			'Content-Type': undefined
			},
			params: { todo_task: todoTask }
		}

		$http(req).then(function mySuccess(response) {
		    $scope.todoList.push(response.data);
		}, function myError(response) {
		    alert(response.statusText);
		});
		// $scope.todoList = $scope.todoList.filter(item => item !== todoTask)
		// $scope.todoList.push(todoTask);
		$scope.todoTask = {}
	};

	$scope.reset = function() {
		$scope.todoTask = {}
	};

	$scope.delete = function(todoTask) {
		//$scope.todoList = $scope.todoList.filter(item => item !== todoTask)
		var req = {
			method: 'DELETE',
			url: 'http://0.0.0.0:3000/todo_tasks/' + todoTask.id,
			headers: {
			'Content-Type': undefined
			}
		}
		$http(req).then(function mySuccess(response) {
			    $scope.todoList = response.data;
		}, function myError(response) {
			    alert(response.statusText);
		});
	};

	$scope.update = function(todoTask) {
		$scope.todoTask = todoTask
	};

});
