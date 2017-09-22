angular.module('app').service('dataService', ['$http', '$q', '$log', function ($http, $q, $log) {

    ////using callback
    //this.getDepartments = function (cb) {
    //    $http({
    //        url: '/Data/Departments',
    //        method: 'GET'
    //    }).then(function (resp) {
    //        //$log.log(resp.data);
    //        cb(resp.data);
    //    }, function (resp) {
    //        $log.error("ERROR occurred");
    //    });
    //};


    //using promise
    this.getDepartments = function () {
        var deferred = $q.defer();
        $http({
            url: '/Data/Departments',
            method: 'GET'
        }).then(function (resp) {
            deferred.resolve(resp.data);
        },
            function (resp) {
                deferred.reject(resp);
                $log.error("ERROR occurred");
            });
        return deferred.promise;
    };

    this.getDepartment = function (deptno) {
        var deferred = $q.defer();
        $http({
            url: '/Data/Departments/' + deptno,
            method: 'GET'
        }).then(function (resp) {
            deferred.resolve(resp.data);
        }, function (resp) {
            deferred.reject(resp);
            $log.error("ERROR occurred");
        });
        return deferred.promise;
    };

    this.getEmployeesByDept = function (deptno) {
        var deferred = $q.defer();
        $http({
            url: '/Data/Departments/' + deptno + '/Employees',
            method: 'GET'
        }).then(function (resp) {
            deferred.resolve(resp.data);
        }, function (resp) {
            deferred.reject(resp);
            $log.error("ERROR occurred");
        });
        return deferred.promise;
    };

    this.getEmployees = function () {
        var deferred = $q.defer();
        $http({
            url: '/Data/Employees',
            method: 'GET'
        }).then(function (resp) {
                deferred.resolve(resp.data);
            },
            function (resp) {
                deferred.reject(resp);
                $log.error("ERROR occurred");
            });
        return deferred.promise;
    };

    this.getEmployee = function (empno) {
        var deferred = $q.defer();
        $http({
            url: '/Data/Employees/' + empno,
            method: 'GET'
        }).then(function (resp) {
            deferred.resolve(resp.data);
        }, function (resp) {
            deferred.reject(resp);
            $log.error("ERROR occurred");
        });
        return deferred.promise;
    };

}]);