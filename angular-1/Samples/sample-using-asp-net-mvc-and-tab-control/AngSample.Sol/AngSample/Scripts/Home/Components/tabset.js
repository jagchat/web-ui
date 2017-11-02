angular.module('app').directive('tabset', [function () {
    return {
        templateUrl: '/Template/Components/tabset',
        transclude: true,
        controller: function ($scope, $element, $attrs) {
            $scope.tabs = [];

            $scope.addTab = function (oTab) {
                $scope.tabs.push(oTab);
            }

            $scope.setActiveTab = function (tabId) {
                $scope.tabs.forEach(function (tab) {
                    tab.isActive = tab.id == tabId;
                });
                $scope.$broadcast("ActiveTabChanged", { id: tabId });
            }

        }
    }
}]);