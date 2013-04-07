$(function() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var canvas = $('#map-canvas');
  var map = new google.maps.Map(canvas.get(0), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
  });
});
