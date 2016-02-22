// load other services, ie dependencies, into the array below
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// load services into parameters, this is 'dependency injection'
myApp.controller('mainController', function($scope, $log, $filter, $resource) {

    console.warn($resource);

});
