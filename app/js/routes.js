var heroesApp = angular.module('nono', ['ui.router', 'ngSanitize', 'angular.filter', 'infinite-scroll'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider
//logged out
        .state('home', {
          url: '/',
          templateUrl: 'templates/home.html',
          controller: 'HomeController',
          onEnter: function($state) {
            console.log('home');
          }
        })


      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactController',
        onEnter: function($state) {
          console.log('contact');
        }
      })


      .state('selection', {
        url: '/selection',
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
