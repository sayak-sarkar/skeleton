(function () {
  'use strict';
  /**
  * Skeleton.services Module
  *
  * Skeleton.services module definition.
  */
  angular
  .module('skeleton.services', [
    'ui.router', 
    'ui.bootstrap', 
    'ui.bootstrap.tpls'
  ])

  /*
  * Expenses factory definition.
  */
  .factory('skeletonFactory', ['$http', function($http){
    var object = {
      all: []
    };

    var path = 'https://api.domain.com/api/';

    object.get = function (id) {
      return $http.get(path+'endpoint/' + id).then(function (res) {
        return res.data;
      });
    };

    object.getAll = function() {
      return $http.get(path+'endpoint/').success(function(data){
        angular.copy(data, object.all);
      });
    };

    object.create = function (item) {
      return $http.post(path+'endpoint/', item).success(function (data) {
        object.all.push(data);
      });
    };

    object.update = function (item) {
      return $http.put(path+'endpoint/'+item._id, item).success(function (data) {
        for (var index in object.all) {
          if (object.all[index]._id === data._id) {
            object.all[index] = data;
          }
        }
      });
    };

    object.delete = function (item) {
      return $http.delete(path+'endpoint/'+item._id).success(function (data) {
        for (var index in object.all) {
          if (object.all[index]._id === item._id) {
            object.all.splice(index, 1);
          }
        }
      });
    };

    return object;
  }]);
})();
