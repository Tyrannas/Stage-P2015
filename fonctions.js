var val_retourne;
var calques_N1 = [];
var calques_N2_1 = [];
var calques_N2_2 = [];
var liste_calques_N2 = [];
var liste_Tab_N2=[];
var i = 0;
var Tab_N1 =[];
var Tab_N2_0=['Auteuil','Colonel','Firmin'];
var Tab_N2_1=['Choisy','Firmin','Lafenestre'];


function rajoute_calque(){
    var calque = document.getElementById("N1").value
    if('http://intranet.deia.fr/Calques/' + calque + '.kml')
    Tab_N1.push(calque);
    affiche_carte();
    
}

var ajoute_event_N2 = function (i,tabCalque,tabNom) {
google.maps.event.addListener(tabCalque[i], 'click', function(){
    val_retourne =tabNom[i];
    alert(val_retourne);                 
});
}

var ajoute_event_N1 = function (i,tabCalqueN1,tabCalqueN2,map) {
google.maps.event.addListener(tabCalqueN1[i], 'click', function(kmlEvent){
    //on_click(tabCalqueN1,map,kmlEvent);
    clean(tabCalqueN1);
    alert("coucou");
    set(liste_calques_N2[i],map);
});
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
        //if (liste_calque !== calques_N1) { liste_calques_N2.push(c) };
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