var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    // the html is just calling this, cuz lowercasehandle calls handle
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

}]);
