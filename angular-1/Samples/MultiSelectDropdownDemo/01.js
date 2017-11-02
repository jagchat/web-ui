//-->using 3rd party library here: http://isteven.github.io/angular-multi-select/#/main

var app = angular.module("app", ['isteven-multi-select']);
app.controller("emp", ["$scope", function ($scope) {

    $scope.itemsSet1 = [{
            text: 'Jag',
            value: '1001'
        },
        {
            text: 'Chat',
            value: '1002'
        },
        {
            text: 'Scott',
            value: '1003'
        },
        {
            text: 'Smith',
            value: '1004'
        },
        {
            text: 'Sean',
            value: '1005'
        }
    ];

    $scope.modernBrowsers = [{
            icon: '<img src="https://cdn1.iconfinder.com/data/icons/fatcow/32/opera.png" />',
            name: 'Opera',
            maker: 'Opera Software',
            ticked: true
        },
        {
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32/internet_explorer.png" />',
            name: 'Internet Explorer',
            maker: 'Microsoft',
            ticked: false
        },
        {
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/humano2/32x32/apps/firefox-icon.png" />',
            name: 'Firefox',
            maker: 'Mozilla Foundation',
            ticked: true
        },
        {
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/fatcow/32x32/safari_browser.png" />',
            name: 'Safari',
            maker: 'Apple',
            ticked: false
        },
        {
            icon: '<img  src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/32/chrome.png" />',
            name: 'Chrome',
            maker: 'Google',
            ticked: true
        }
    ];
}]);