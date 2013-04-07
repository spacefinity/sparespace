$(function() {
  init_maps();
});

function init_maps() {
  var startup_weekend = new google.maps.LatLng(40.461642,-79.925473);

  // Show map of Pittsburgh
  var canvas = $('#map-canvas');
  var map = new google.maps.Map(canvas.get(0), {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: startup_weekend
  });

  // Startup Weekend
  add_marker(map, startup_weekend);

  // Thrill Mill
  add_marker(map, new google.maps.LatLng(40.462556, -79.918327));
}

function add_marker(map, position) {
  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: position
  });

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  google.maps.event.addListener(marker, 'click', toggleBounce);
  return marker;
}
