// SERVICES
weatherApp.service('cityService', function () {

    this.city = "New York, NY";

});

weatherApp.service('weatherService', ['$resource', function($resource) {

  this.GetWeather = function(city, days) {
    var weatherAPI =
    $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=543e1598c287b899b054a5bb9a0613de", {
      callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }} );

    return weatherAPI.get({ q: city, cnt: days});

  };
}]);
