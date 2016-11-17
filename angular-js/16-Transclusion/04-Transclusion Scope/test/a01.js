var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {
	$scope.a = {
		x: 10		
	};
}]);

//shared scope
app.directive('message1', function(){
	return {
		templateUrl: 'msg1.htm',
		transclude: true,
		controller: function($scope, $element, $attrs){
			$scope.b = {
				y: 20
			};
		}
	}
});

//inherited scope
app.directive('message2', function(){
	return {
		templateUrl: 'msg1.htm',
		transclude: true,
		scope: true,
		controller: function($scope, $element, $attrs){
			$scope.b = {
				y: 20
			};
		}
	}
});

//isolated scope
app.directive('message3', function(){
	return {
		templateUrl: 'msg1.htm',
		transclude: true,
		scope: {},
		controller: function($scope, $element, $attrs){
			$scope.b = {
				y: 20
			};
		}
	}
});

