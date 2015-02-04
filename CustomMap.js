function initialize() {
    var myLatlng = new google.maps.LatLng(37.06, -95.68);
    var mapOptions = {
        zoom: 12,
        center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('my_custom_map'),
      mapOptions);

    var Auteuil = new google.maps.KmlLayer({
        url: 'http://deia.powerdev-web.com/calques/auteuil.kml',
        suppressInfoWindows: true,
        map: map
    });

    google.maps.event.addListener(Auteuil, 'click', function (kmlEvent) {
        window.open('http://www.google.com', 'Ceci est un test de pop-up', 'menubar=no, scrollbars=no, top=100, left=100, width=700, height=400');
    });


}

google.maps.event.addDomListener(window, 'load', initialize);