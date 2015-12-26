var app = angular.module("app", []);
app.controller('emp', ['$scope', '$http', function($scope, $http){
	$scope.a = 10;
	$scope.b = 20;

	$scope.doSum = function(){
		//$scope.sum = parseInt($scope.a) + parseInt($scope.b);
		$http({
			method: 'GET',
			url: 'http://localhost:5567/Sum?a=' + $scope.a + '&b=' + $scope.b
		}).then(function (resp){
			debugger;			
			$scope.sum = resp.data;
		}, 
		function(resp){
			alert("An Error!");
			debugger;
		});
	};
}])