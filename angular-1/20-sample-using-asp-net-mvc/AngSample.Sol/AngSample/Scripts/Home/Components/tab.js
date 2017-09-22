angular.module('app').directive('tab', [function () {
    return {
        templateUrl: '/Template/Components/tab',
        transclude: true,
        scope: true, //child (inherited)
        controller: function ($scope, $element, $attrs) {
            //local to child scope
            $scope.id = $attrs.id;
            $scope.isActive = $attrs.active == "true";
            $scope.templateUrl = $attrs.templateUrl;

            //adding to tabs collection in parent
            $scope.$parent.addTab({
                id: $attrs.id,
                text: $attrs.text,
                isActive: $scope.isActive
            });

            $scope.$on("ActiveTabChanged", function (e, data) {
                $scope.isActive = $scope.id == data.id;
            });
        }
    }
}]);