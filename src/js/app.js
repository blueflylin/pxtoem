var pxtoemApp = angular.module('pxtoemApp', []);

pxtoemApp.controller('pxToEmCtl', function($scope, $filter) {
    $scope.px = '';
    $scope.em = '';
    $scope.base = 16;

    $scope.pxChange = function() {
        $scope.em = $scope.px / $scope.base;
        $scope.em = $filter('number')($scope.em, 3);
    };
    $scope.emChange = function() {
        $scope.px = $scope.em * $scope.base;
        $scope.px = $filter('number')($scope.px, 0);
    };
    $scope.baseChange = function() {
        newEm = $scope.px / $scope.base;

        if (newEm > 0) {
            newEm = $filter('number')(newEm, 3);
            $scope.em = newEm;
        }
    };

    $scope.inFocus = function() {
        $scope.px = '';
        $scope.em = '';
    };
    $scope.baseFocus = function() {
        $scope.inFocus();
        $scope.base = '';
    };

    $scope.pixels = [];
    for (var i = 6; i <= 25; i++) {
        $scope.pixels.push(i);
    }
    $scope.pixels.push(30);
    $scope.pixels.push(45);
});