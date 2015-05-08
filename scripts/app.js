(function () {
  'use strict';
  /**
  * Skeleton Module
  *
  * Skeleton module definition.
  */
  angular
  .module('skeleton', [
    'ui.router', 
    'ui.bootstrap', 
    'ui.bootstrap.tpls',
    'skeleton.services',
    'skeleton.controllers'
  ])

  .run(function($rootScope){

    $rootScope
      .$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
          // Do stuff
      });

    $rootScope
      .$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){ 
          // Do stuff
      });
  })

  .config([
    '$stateProvider',
    '$urlRouterProvider',

    function($stateProvider, $urlRouterProvider) {

      $stateProvider

        /* Home State Definition. */
        .state('home', {
          url: '/',
          templateUrl: '../views/index.html',
          controller: 'MainController'
        })

        /* Home State Definition. */
        .state('404', {
          url: '/404',
          templateUrl: '../views/404.html',
          controller: 'MainController'
        });

      $urlRouterProvider.otherwise('404');
    }
  ]);
})();