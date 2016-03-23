// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });

    $scope.submit = function() {
      $location.path("/forecast");
    };
}]);

weatherApp.controller('forecastController', ['$scope', 'weatherService', '$routeParams', 'cityService', function($scope, weatherService, $routeParams, cityService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

    $scope.convertToCel = function(degk) {
      return Math.round( degk - 273.15 );
    }

    $scope.convertDate = function(dt) {
      return new Date(dt * 1000);
    }

}]);
