var app = angular.module('app', []);

app.controller('sample', ['$scope', function($scope) {
	$scope.a = {
		x: 10		
	};
}]);

//shared scope
//transclusion scope is created automatically, if not used with transclude function
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
//transclusion scope is created automatically, if not used with transclude function
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
//transclusion scope is created automatically, if not used with transclude function
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

//custom data to transclusion scope
app.directive('message4', function(){
	return {
		templateUrl: 'msg2.htm',
		transclude: true,
		scope: {},
		controller: function($scope, $element, $attrs, $transclude){
			$scope.b = {
				y: 20
			};

			//NOTE:
			//Transcluded element instance and transclusion scope is created ONLY ONCE when a transclude function is called with no callback function (as follows)
			//$element.find('#innerPanel').append($transclude()); //NOT RECOMMENDED ANYMORE
			
			//Transcluded element instance and transclusion scope is created (and cloned) every time a transclude function is called with a callback function (more suitable for multiple transcludes within a directive and is CURRENTLY RECOMMENDED WAY)
			//This is also called "clone attach function"
			
			
			//manual transclusion - not using ng-transclude in msg2.htm			
			//we can modify the scope using transclude function as follows			
			$transclude(function(transEl, $transScope){
				$transScope.b = {};
				$transScope.b.y = $scope.b.y;
				$element.find('#innerPanel').append(transEl);
			});
		}
	}
});

//custom transclusion scope
app.directive('message5', function(){
	return {
		templateUrl: 'msg2.htm',
		transclude: true,
		scope: {},
		controller: function($scope, $element, $attrs, $transclude){
			$scope.b = {
				y: 20
			};

			//creates new isolated scope
			//$customScope.$parent automatically set to $scope
			//no inheritance in transclusion scope now
			var $customScope = $scope.$new(true);  

			$customScope.a  = {
				x: 100
			};
			$customScope.b  = {
				y: 200
			};

			//you can send any scope object here (including controller, root scope or custom scope)
			$transclude($customScope, function(transEl){
				$element.find('#innerPanel').append(transEl);
			});
		}
	}
});