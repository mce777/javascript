function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(53.5552189, 9.9803967),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  $.getJSON( "api/car2go/vehicles.json", function ( jsItems ) {

    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0, length = jsItems.placemarks.length; i < length; i++) {
      var data = jsItems.placemarks[i],
      coord = data.coordinates.toString().split(',').map(Number),
      latLng = new google.maps.LatLng(coord[1],coord[0]);

      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: data.title,
        icon: 'img/c2go.png'
      });

      (function(marker, data) {

        google.maps.event.addListener(marker, "click", function(e) {
          if(data.exterior === "UNACCEPTABLE"){
            var extemot = "sentiment_dissatisfied";
          }
          else {
            var extemot = "sentiment_satisfied";
          }

          if(data.interior === "UNACCEPTABLE"){
            var intemot = "sentiment_dissatisfied";
          }
          else {
            var intemot = "sentiment_satisfied";
          }

          infoWindow.setContent(data.address + "<br>" + "<strong>Exterior/Interior: </strong>" + "<i class='material-icons'>" + extemot + "</i>" + " | " + "<i class='material-icons'>" + intemot + "</i>" + "<br>" + "<strong>Fuel: </strong>" + data.fuel + "%");
          infoWindow.open(map, marker);
        });

      })(marker, data);

    }
  });

}
