(function () {
  'use strict';
  /**
  * Skeleton.controllers Module
  *
  * Skeleton.controllers module definition.
  */
  angular
  .module('skeleton.controllers', [
    'ui.router', 
    'ui.bootstrap', 
    'ui.bootstrap.tpls'
  ])


  /**
  * Main controller defintion.
  */
  .controller('MainController', ['$scope', '$modal', 'skeletonFactory',
    function($scope, $modal, skeletonFactory){
      //Do stuff
    }
  ]);
})();