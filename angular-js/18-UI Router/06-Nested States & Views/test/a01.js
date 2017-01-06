var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('employees', {
		//Acts as parent.
		//No url/route necessary.
		//This state/views are automatically rendered by children (with their own routes/urls)
		abstract: true,     
		views:{
			'':{
				templateUrl: 'emp-layout.htm'
			},
			'emp-header@employees':{ //render the emp-header.htm view in 'ui-view=emp-header' of 'employees' state (which is emp-layout.htm)
				templateUrl: 'emp-header.htm'
			},

		}		
	})
	.state('employees.list',{
		//inherits from parent "employees" (nested state)
		//automatically includes parent while rendering the route
		url:'/employees',
		views:{
			'emp-list': { //render the emp-list.htm view in 'ui-view=emp-list' (of parent state)
				templateUrl: 'emp-list.htm',
				controller: 'empListController'
			}
		}
	})	
	.state('details', {
		//inherits from parent "employees" (just another way instead of "employees.details")
		//automatically includes parent while rendering the route
		parent: 'employees',
		url: '/employees/:empno',
		views:{
			'emp-detail': {//render the emp-detail.htm view in 'ui-view=emp-detail' (of parent state)
				templateUrl: 'emp-detail.htm',
				controller: 'empDetailController'
			}
		}		
	})	
	.state('root', {
		url: '/',
		template: '<strong>you are at root..click something else</strong>'
	})
	.state('otherwise',{
		url: "*path",
		template: '<strong>no route available</strong'
	})

}]);

app.controller('empListController', ['$scope', 'dataService',
	function($scope, dataService){

		$scope.isLoading = true;

		dataService.getEmployees().then(function(result){
			$scope.result = result;
			$scope.isLoading = false;
		}); 

	}]);

app.controller('empDetailController', ['$scope', 'dataService', '$stateParams',
	function($scope, dataService, $stateParams){

		$scope.isLoading = true;
		$scope.isNotFound = false;
		dataService.getEmployee($stateParams.empno).then(function(result){
			if(result.data.length > 0){
				$scope.employee = result.data[0];	
			}
			else{
				$scope.isNotFound = true;
			}
			
			$scope.isLoading = false;
		}); 

	}]);