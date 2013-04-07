$(function() {
  var stockholm = new google.maps.LatLng(59.32522, 18.07002);
  var parliament = new google.maps.LatLng(59.327383, 18.06747);
  var marker;
  var map;

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  var canvas = $('#map-canvas');
  map = new google.maps.Map(canvas.get(0), {
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: stockholm
  });

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: parliament
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);

  $(".date").datepicker();
});
