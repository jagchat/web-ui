angular.module('app').directive('deptRow', [function () {
    return {
        templateUrl: '/Template/deptRow',
        //isolated scope
        scope: {
            dept: '=', //object parameter
            toggleSelectedCallback: '&' //function parameter
        },
        controller: function ($scope, $element, $attrs) {
            $scope.toggleSelected = function () {
                $scope.toggleSelectedCallback()($scope.dept.Deptno);
            }
        }
    }
}]);