angular.module('app').directive('deptDynamicDetails', ['dataService', function (dataService) {
    return {
        templateUrl: '/Template/deptDynamicDetails',
        //isolated scope
        scope: {
            deptno: '@' //primitive parameter
        },
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
            dataService.getDepartment($scope.deptno).then(function (r) {
                $scope.dept = r;
            });
        }]
    }
}]);