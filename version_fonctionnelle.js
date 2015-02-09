
function affiche_carte() {
    var myLatlng = new google.maps.LatLng(37.06, -95.68);
    var mapOptions = {
        zoom: 12,
        center: myLatlng
    };
    // On créé la map et on l'affiche dans la div map-canvas appellée dans Default.aspx
    var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

    //Affichage et gestion d'event du calque Direction Teritoriale Nord-Ouest
    var DTNO = new google.maps.KmlLayer({
        url: 'http://intranet.deia.fr/Calques/DTNO.kml',
        suppressInfoWindows: true,
        map: map
    });

    google.maps.event.addListener(DTNO, "click", function (kmlEvent) {
        var mouseLocation = kmlEvent.latLng;
        map.setZoom(13);
        map.setCenter(mouseLocation);

    });

    //Affichage et gestion d'event du calque Direction Teritoriale Est
    var DTE = new google.maps.KmlLayer({
        url: 'http://intranet.deia.fr/Calques/DTE.kml',
        suppressInfoWindows: true,
        map: map
    });
    google.maps.event.addListener(DTE, "click", function (kmlEvent) {
        var mouseLocation = kmlEvent.latLng;
        map.setZoom(13);
        map.setCenter(mouseLocation);

    });

    //Affichage et gestion d'event du calque Direction Teritoriale Nord-Est
    var DTNE = new google.maps.KmlLayer({
        url: 'http://intranet.deia.fr/Calques/DTNE.kml',
        suppressInfoWindows: true,
        map: map
    });

    google.maps.event.addListener(DTNE, "click", function (kmlEvent) {
        var mouseLocation = kmlEvent.latLng;
        map.setZoom(13);
        map.setCenter(mouseLocation);

    });

    //Affichage et gestion d'event du calque Direction Teritoriale Sud-Est
    var DTSE = new google.maps.KmlLayer({
        url: 'http://intranet.deia.fr/Calques/DTSE.kml',
        suppressInfoWindows: true,
        map: map
    });

    google.maps.event.addListener(DTSE, "click", function (kmlEvent) {
        var mouseLocation = kmlEvent.latLng;
        map.setZoom(13);
        map.setCenter(mouseLocation);

    });

    //Affichage et gestion d'event du calque Direction Teritoriale Sud-Ouest
    var DTSO = new google.maps.KmlLayer({
        url: 'http://intranet.deia.fr/Calques/DTSO.kml',
        suppressInfoWindows: true,
        map: map
    });

    google.maps.event.addListener(DTSO, "click", function (kmlEvent) {
        var mouseLocation = kmlEvent.latLng;
        map.setZoom(13);
        map.setCenter(mouseLocation);

    });

}
//function affiche_DTNO(google.maps.Map carte){
   // Set.zoom = 15;
   // }    
google.maps.event.addDomListener(window, 'load', affiche_carte);