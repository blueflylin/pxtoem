var pxtoemApp = angular.module('pxtoemApp', []);

pxtoemApp.controller('pxToEmCtl', function($scope, $filter) {
    $scope.px = '';
    $scope.em = '';
    $scope.base = 16;

    var baseBackup = $scope.base;

    /**
     * Replaces commas with periods or removes both if not desired
     */
    function fixCommas() {
        if (typeof $scope.px === 'string') {
            $scope.px = $scope.px.replace(',', '');
            if (typeof $scope.px === 'string') {
                $scope.px = $scope.px.replace('.', '');
            }
        }
        if (typeof $scope.em === 'string') {
            $scope.em = $scope.em.replace(',', '.');

        }
        if (typeof $scope.base === 'string') {
            $scope.base = $scope.base.replace(',', '');
            if (typeof $scope.base === 'string') {
                $scope.base = $scope.base.replace('.', '');
            }
        }
    }

    $scope.pxChange = function() {
        fixCommas();

        $scope.em = $scope.px / $scope.base;
        $scope.em = $filter('number')($scope.em, 3);
    };
    $scope.emChange = function() {
        fixCommas();

        $scope.px = $scope.em * $scope.base;
        $scope.px = $filter('number')($scope.px, 0);
    };
    $scope.baseChange = function() {
        fixCommas();

        var newEm = $scope.px / $scope.base;

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
        baseBackup = $scope.base;
        $scope.base = '';
    };
    $scope.baseBlur = function() {
        if (!$scope.base) {
            $scope.base = baseBackup;
        }
    };

    $scope.pixels = [];
    for (var i = 6; i <= 36; i++) {
        $scope.pixels.push(i);
    }
    $scope.pixels.push(42);
    $scope.pixels.push(48);
});