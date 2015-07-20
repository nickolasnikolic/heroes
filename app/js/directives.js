/*
heroesApp.directive('packery', ['$rootScope', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            if($rootScope.packery === undefined || $rootScope.packery === null){
                $rootScope.packery = new Packery(element[0].parentElement, {
                  'itemSelector': '.job',
                  'gutter': 15
                });
            }
            $rootScope.packery.appended(element[0]);
            $rootScope.packery.layout();
        }
    };
}]);
*/
