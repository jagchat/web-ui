angular.module('app').directive('empRow', [function () {
    return {
        templateUrl: '/Template/empRow',
        //isolated scope
        scope: {
            emp: '=', //object parameter
        }
    }
}]);