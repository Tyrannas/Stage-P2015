
// listes dans lesquelles seront stockés les calques
//une liste pour les DT, une pour chaque DT, et une pour toutes les Agences

var val_retourne;
var calquesDT = [];
var calquesDTE = [];
var calquesDTNE = [];
var calquesDTSE = [];
var calquesDTNO = [];
var calquesDTSO = [];
var calquesA = [];

// fonction appellée au clic sur une DT, permet de zoomer et centrer à l'endroit du clic et désaffiche les calques DT
//On rappelle qu'il est nécessaire de désafficher les calques DT puisque seuls 15 calques peuvent être affichés à la fois
function on_click(liste, map, kmlEvent) {
    var mouseLocation = kmlEvent.latLng;
    map.setZoom(12.5);
    map.setCenter(mouseLocation);
    clean(liste);
}


//permet de charger itérativement tous les fichiers .kml des calques dont les noms sont passés en paramètre à travers une liste
function loadCalque(nomCalque) {
    var calque = new google.maps.KmlLayer({
        url: 'http://intranet.deia.fr/Calques/' + nomCalque + '.kml',
        suppressInfoWindows: true,
        map: null
    });
    return calque;
}

//créé les variables calques à partir des fichiers récupérés avec loadCalque()

function build(noms, liste_calque) {
    for (var i = 0; i < noms.length; i++) {
        var c = loadCalque(noms[i]);
        if (liste_calque !== calquesDT) { calquesA.push(c) };
        liste_calque.push(c);
    }
}

//permet d'afficher des calques déjà chargés sur la map
function set(liste, map) {
    for (i = 0; i < liste.length; i++) {
        liste[i].setMap(map);
    }
}
//désaffiche tous les calques passés en paramètre
function clean(liste) {
    for (i = 0; i < liste.length; i++) {
        liste[i].setMap(null);
    }
}

//fonction principale 
function affiche_carte() {
    //================DECLARATION DES VARIABLES=================
    var myLatlng = new google.maps.LatLng(48.853, 2.35);

    var mapOptions = {
        zoom: 12,
        center: myLatlng
    };

    // On créé la map et on l'affiche dans la div map-canvas 
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //==============INITIALISATION DES LISTES DE CALQUES A CHARGER===================
    var tab_DT = ['DTNO', 'DTE', 'DTNE', 'DTSE', 'DTSO'];
    var tab_DTE = ['Nation', 'Fécamp', 'Courat', 'Couronnes', 'Ménilmontant'];
    var tab_DTNE = ['Colonel', 'Chaumont', 'Belleville', 'Curial'];
    var tab_DTSE = ['Bédier', 'Choisy', 'Collégiale', 'Rousselle'];
    var tab_DTNO = ['Centre', 'Pisan', 'Flammarion', 'Chartres', 'Firmin'];
    var tab_DTSO = ['Bargue', 'Auteuil', 'Lefebvre', 'Lafenestre'];

    //================ON CHARGE LES CALQUES=====================
    //====================================================================
    /* appel des calques de DT 0 = DTNO 1 = DTE, 2 = DTNE, 3 = DTSE, 4 = DTSO*/
    //====================================================================
    build(tab_DT, calquesDT);
    build(tab_DTE, calquesDTE);
    build(tab_DTNE, calquesDTNE);
    build(tab_DTSE, calquesDTSE);
    build(tab_DTSO, calquesDTSO);
    build(tab_DTNO, calquesDTNO);
    //====================ON AFFICHE LES CALQUES DE DT=================
    set(calquesDT, map);

    //====================GESTION DES EVENTS DES DT===========================
    //GESTION DTNO
    google.maps.event.addListener(/*trouve('DTNO',calquesDT)*/calquesDT[0], "click", function (kmlEvent) {
        on_click(calquesDT, map, kmlEvent);
        set(calquesDTNO, map);
    });
    //GESTION DTE
    google.maps.event.addListener(calquesDT[1], "click", function (kmlEvent) {
        on_click(calquesDT, map, kmlEvent);
        set(calquesDTE, map);
    });
    //GESTION DTNE
    google.maps.event.addListener(calquesDT[2], "click", function (kmlEvent) {
        on_click(calquesDT, map, kmlEvent);
        set(calquesDTNE, map);
    });
    //GESTION DTSE
    google.maps.event.addListener(calquesDT[3], "click", function (kmlEvent) {
        on_click(calquesDT, map, kmlEvent);
        set(calquesDTSE, map);
    });
    //GESTION DTSO
    google.maps.event.addListener(calquesDT[4], "click", function (kmlEvent) {
        on_click(calquesDT, map, kmlEvent);
        set(calquesDTSO, map);
    });

    //====================GESTION DES EVENTS DES AGENCES DE LA DTNE===========================
    //GESTION Colonel Fabien
    google.maps.event.addListener(calquesDTNE[0], "click", function (kmlEvent) {
        alert("Colonel Fabien");
        val_retourne = "Colonel";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);
    });
    //GESTION Chaumont
    google.maps.event.addListener(calquesDTNE[1], "click", function (kmlEvent) {
        alert("Chaumont");
        val_retourne = "Chaumont";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Belleville
    google.maps.event.addListener(calquesDTNE[2], "click", function (kmlEvent) {
        alert("Belleville");
        val_retourne = "Belleville";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Curial
    google.maps.event.addListener(calquesDTNE[3], "click", function (kmlEvent) {
        alert("Curial");
        val_retourne = "Curial";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });

    //====================GESTION DES EVENTS DES AGENCES DE LA DTSE===========================
    //GESTION Bédier
    google.maps.event.addListener(calquesDTSE[0], "click", function (kmlEvent) {
        alert("Bédier");
        val_retourne = "Bedier";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Choisy
    google.maps.event.addListener(calquesDTSE[1], "click", function (kmlEvent) {
        alert("Choisy");
        val_retourne = "Choisy";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Collegiale
    google.maps.event.addListener(calquesDTSE[2], "click", function (kmlEvent) {
        alert("Collegiale");
        val_retourne = "Collegiale";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Rousselle
    google.maps.event.addListener(calquesDTSE[3], "click", function (kmlEvent) {
        alert("Rousselle");
        val_retourne = "Rousselle";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });

    //====================GESTION DES EVENTS DES AGENCES DE LA DTE===========================
    //GESTION Nation
    google.maps.event.addListener(calquesDTE[0], "click", function (kmlEvent) {
        alert("Nation");
        val_retourne = "Nation";
        wwindow.location.replace("/ListingPatrimoine.aspx?niveau2=" + val_retourne);
    });
    //GESTION Fécamp
    google.maps.event.addListener(calquesDTE[1], "click", function (kmlEvent) {
        alert("Fécamp");
        val_retourne = "Fecamp";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Courat
    google.maps.event.addListener(calquesDTE[2], "click", function (kmlEvent) {
        alert("Courat");
        val_retourne = "Courat";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Couronnes
    google.maps.event.addListener(calquesDTE[3], "click", function (kmlEvent) {
        alert("Couronnes");
        val_retourne = "Couronnes";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Ménilmontant
    google.maps.event.addListener(calquesDTE[4], "click", function (kmlEvent) {
        alert("Ménilmontant");
        val_retourne = "Menilmontant";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });

    //====================GESTION DES EVENTS DES AGENCES DE LA DTNO===========================
    //GESTION Centre
    google.maps.event.addListener(calquesDTNO[0], "click", function (kmlEvent) {
        alert("Centre");
        val_retourne = "Centre";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Pisan
    google.maps.event.addListener(calquesDTNO[1], "click", function (kmlEvent) {
        alert("Pisan");
        val_retourne = "Pisan";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Flammarion
    google.maps.event.addListener(calquesDTNO[2], "click", function (kmlEvent) {
        alert("Flammarion");
        val_retourne = "Flammarion";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Chartres
    google.maps.event.addListener(calquesDTNO[3], "click", function (kmlEvent) {
        alert("Chartres");
        val_retourne = "Chartres";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Firmin Gémier
    google.maps.event.addListener(calquesDTNO[4], "click", function (kmlEvent) {
        alert("Firmin Gémier");
        val_retourne = "Firmin";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });

    //====================GESTION DES EVENTS DES AGENCES DE LA DTSO===========================
    //GESTION Bargue
    google.maps.event.addListener(calquesDTSO[0], "click", function (kmlEvent) {
        alert("Bargue");
        val_retourne = "Bargue";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Auteuil
    google.maps.event.addListener(calquesDTSO[1], "click", function (kmlEvent) {
        alert("Auteuil");
        val_retourne = "Auteuil";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Lefebvre
    google.maps.event.addListener(calquesDTSO[2], "click", function (kmlEvent) {
        alert("Lefebvre");
        val_retourne = "Lefebvre";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });
    //GESTION Lafenestre
    google.maps.event.addListener(calquesDTSO[3], "click", function (kmlEvent) {
        alert("Lafenestre");
        val_retourne = "Lafenestre";
        window.location.replace("ListingPatrimoine.aspx?niveau2="+val_retourne);    });

    //=====================GESTION DES EVENTS DE LA MAP==============================
    google.maps.event.addListener(map, 'zoom_changed', function () {
        zoomLevel = map.getZoom();
        if (zoomLevel <= 11) {
            set(calquesDT, map);
            clean(calquesA);
        }
    });

}


google.maps.event.addDomListener(window, 'load', affiche_carte);