// listes dans lesquelles seront stockés les calques
//une liste pour les DT, une pour chaque DT, et une pour toutes les Agences
//fonction principale 
function affiche_carte() {
    //================DECLARATION DES VARIABLES=================
    //
    var myLatlng = new google.maps.LatLng(48.853, 2.35);
    var mapOptions = { zoom: 12, center: myLatlng };

    // On créé la map et on l'affiche dans la div map-canvas 
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //==============INITIALISATION DES LISTES DE CALQUES A CHARGER===================
    //==============ENTREZ LE NOM DE VOTRE CALQUE A L'EMPLACEMENT SOUHAITE
    var Tab_N1=['DTNO','DTSO'];
    var liste_Tab_N2=[];
    var Tab_N2_0=['Auteuil','Colonel','Firmin'];
    var Tab_N2_1=['Choisy','Neuilly','Lafenestre'];
    liste_Tab_N2.push(Tab_N2_0,Tab_N2_1);

    //================ON CHARGE LES CALQUES=====================
    //
    for(i=0;i<Tab_N1.length;i++){
    }
    //build(Tab_N2, calques_N2);
    build(Tab_N1, calques_N1);
    //====================ON AFFICHE LES CALQUES=================
    //set(calques_N2, map);
    set(calques_N1,map);
    //====================GESTION DES EVENTS DES CALQUES DE NIVEAU 1===========================
    //On créé dynamiquement des listener d'evenement "clic" pour tous les calques 
    for(i = 0; i<calques_N1.length;i++){
    ajoute_event_N1(i,calques_N1,liste_calques_N2[i],map);
    }

    //====================GESTION DES EVENTS DES CALQUES DE NIVEAU 2===========================
    //On créé dynamiquement des listener d'evenement "clic" pour tous les calques 
    /*for(i = 0; i<calques_N2.length;i++){
    ajoute_event_N2(i,calques_N2,Tab_N2);
    }*/
}


google.maps.event.addDomListener(window, 'load', affiche_carte);