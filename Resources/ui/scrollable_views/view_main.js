/**
 * @author Yoann GAUCHARD
 */

//Invoke geo services
var svc_geo = require('services/business_services/geo'); 

var view_main = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {
    	latitude : svc_geo.LATITUDE_BASE, 
    	longitude : svc_geo.LONGITUDE_BASE,
        latitudeDelta : 0.1, 
        longitudeDelta : 0.1},
    animate : false,
    regionFit : false,
    userLocation : false
});

var anno_current = Ti.Map.createAnnotation({
	animate : true,
	pincolor : Titanium.Map.ANNOTATION_RED,
	title : 'Vous êtes ici !',
	latitude : svc_geo.LATITUDE_BASE,
	longitude : svc_geo.LONGITUDE_BASE,
});

svc_geo.monitorGPSPosition();

Ti.App.addEventListener('evtLocationUpdate', function(obj_coords){
	var tab_anno = view_main.getAnnotations();
	tab_anno[0].latitude = obj_coords.latitude;
	tab_anno[0].longitude = obj_coords.longitude;
	view_main.setAnnotations(tab_anno);
});

view_main.addAnnotation(anno_current);

