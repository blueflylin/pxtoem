(function(){

var app = angular.module('pxtoemApp', []);

app.controller('MainController', ['$filter', mainController]);

    function mainController ($filter) {

        var vm = this;

        vm.px = '';
        vm.em = '';
        vm.base = 16;

        vm.pxChange = fn_pxChange;
        vm.emChange = fn_emChange;
        vm.baseChange = fn_baseChange;
        vm.inFocus = fn_inFocus;
        vm.baseFocus = fn_baseFocus;
        vm.baseBlur = fn_baseBlur;
        
        vm.baseBackup = vm.base;
        vm.pixels = [];

        //Replaces commas with periods or removes both if not desired
        function fixCommas () {
            if (typeof vm.px === 'string') {
                vm.px = vm.px.replace(',', '');
                if (typeof vm.px === 'string') {
                    vm.px = vm.px.replace('.', '');
                }
            }
            if (typeof vm.em === 'string') {
                vm.em = vm.em.replace(',', '.');

            }
            if (typeof vm.base === 'string') {
                vm.base = vm.base.replace(',', '');
                if (typeof vm.base === 'string') {
                    vm.base = vm.base.replace('.', '');
                }
            }
        }

        function fn_pxChange () {
            fixCommas();

            vm.em = vm.px / vm.base;
            vm.em = $filter('number')(vm.em, 3);
        };

        function fn_emChange () {
            fixCommas();

            vm.px = vm.em * vm.base;
            vm.px = $filter('number')(vm.px, 0);
        };
        function fn_baseChange () {
            fixCommas();

            var newEm = vm.px / vm.base;

            if (newEm > 0) {
                newEm = $filter('number')(newEm, 3);
                vm.em = newEm;
            }
        };

        function fn_inFocus () {
            vm.px = '';
            vm.em = '';
        };
        function fn_baseFocus () {
            vm.inFocus();
            baseBackup = vm.base;
            vm.base = '';
        };
        function fn_baseBlur () {
            if (!vm.base) {
                vm.base = vm.baseBackup;
            }
        };

        
        for (var i = 8; i <= 36; i++) {
            vm.pixels.push(i);
        }
        vm.pixels.push(42);
        vm.pixels.push(48);
    };

})();