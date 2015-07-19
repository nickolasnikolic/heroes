var heroesApp = angular.module('nono', ['ui.router', 'ngSanitize', 'angular.filter', 'infinite-scroll'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider

      
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactController',
        onEnter: function($state) {
          console.log('contact');
        }
      })


      .state('selection', {
        url: '/',
        templateUrl: 'templates/selection.html',
        controller: 'SelectionController',
        onEnter: function($state) {
          console.log('selection');
          //if the credentials are not set
          //route back to
        }
      })

    }
  ]);
