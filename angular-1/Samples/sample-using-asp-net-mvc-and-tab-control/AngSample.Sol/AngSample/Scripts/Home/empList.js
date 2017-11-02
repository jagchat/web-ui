angular.module('app').directive('empList', ['dataService', function (dataService) {
    return {
        templateUrl: '/Template/empList',
        //isolated scope
        scope: {
            deptno: '@' //primitive parameter
        },
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
            $scope.isLoading = true;
            dataService.getEmployeesByDept($scope.deptno).then(function (r) {
                $scope.emps = r;
                $scope.isLoading = false;
            });
        }]
    }
}]);