$.getJSON( "api/car2go/vehicles.json", function ( data ) {
  // headers for the table colums
  var tblHead = ["<thead><tr><th>" +
              "Car" + "</th><th>" +
              "Address" + "</th><th>" +
              "Exterior" + "</th><th>" +
              "Interior" + "</th><th>" +
              "Fuel" + "</th>" + "</tr></thead>"];

  // setting up empty array to store data
  var items = [];
  for (var i = 0; i < data.placemarks.length; i++) {
      if(data.placemarks[i].exterior === "UNACCEPTABLE"){
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

      items.push("<tr>" + "<td>" + data.placemarks[i].name + "</td>" +
                          "<td>" + data.placemarks[i].address + "</td>" +
                          "<td align='center'><i class='material-icons'>" + extemot + "</i></td>" +
                          "<td align='center'>" + "<i class='material-icons'>" + intemot + "</i></td>" +
                          "<td align='center'>" + data.placemarks[i].fuel + "%" + "</td>" +
                "</tr>");
  }
  //rendering table
  $( "<table/>", {
    "class": "mainTable table-striped",
    html: tblHead + items
  }).appendTo( "#list" );


});
