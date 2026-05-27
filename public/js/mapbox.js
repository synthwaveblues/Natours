/* eslint-disable */
export const displayMap = locations => {
  const map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    mapTypeId: 'roadmap'
  });

  const bounds = new google.maps.LatLngBounds();

  locations.forEach(loc => {
    // GeoJSON stores [lng, lat]; Google Maps uses { lat, lng }
    const position = { lat: loc.coordinates[1], lng: loc.coordinates[0] };

    const marker = new google.maps.Marker({
      position,
      map,
      icon: {
        url: '/img/pin.png',
        scaledSize: new google.maps.Size(32, 40),
        anchor: new google.maps.Point(16, 40)
      }
    });

    new google.maps.InfoWindow({
      content: `<div class="map-popup"><p>Day ${loc.day}: ${loc.description}</p></div>`
    }).open(map, marker);

    bounds.extend(position);
  });

  map.fitBounds(bounds);
};
