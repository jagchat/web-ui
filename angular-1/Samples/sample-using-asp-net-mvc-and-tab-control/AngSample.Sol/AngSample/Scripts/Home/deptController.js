angular.module('app').controller('deptController', ['$scope', 'dataService', function ($scope, dataService) {

    ////using callback
    //dataService.getDepartments(function (r) {
    //    $scope.depts = r;
    //});

    //using promise
    dataService.getDepartments().then(function (r) {
        $scope.depts = r;
    });

    $scope.toggleSelectedDept = function (deptno) {
        $scope.depts.forEach(function (dept) {
            //if (dept.Deptno == deptno) {
            //    dept.isSelected = !dept.isSelected;
            //} else {
            //    dept.isSelected = false;
            //}
            dept.isSelected = (dept.Deptno == deptno) ? !dept.isSelected : false;
        });
    }

}]);