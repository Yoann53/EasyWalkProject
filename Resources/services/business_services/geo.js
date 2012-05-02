/**
 * @author Yoann GAUCHARD
 */

//globals var
exports.LATITUDE_BASE = 38.500000;
exports.LONGITUDE_BASE = -121.050210;

//Contnually moniitor GPS Position as soon as location change

exports.monitorGPSPosition = function(){
	
	if (Ti.Geolocation.locationServicesEnabled) {
	    Ti.Geolocation.purpose = 'Get Current Location';
	    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
	    Ti.Geolocation.distanceFilter = 10;
	
	    Ti.Geolocation.addEventListener('location', function(e) {
	        if (e.error) {
	            alert('Error: ' + e.error);
	        } else {
	        	Ti.App.fireEvent('evtLocationUpdate',e.coords)
	            Ti.API.info(e.coords);
	        }
	    });
	} else {
	    alert('Activez le service gps.');
	}
	
};


//Save current coords in temporary gpx file

exports.saveCurrentCoords = function(obj_Coords){
	
	svc_file = require('services/resources_services/file');
	
	
};

exports.getGPXtrace = function(){
	
	svc_file = require('services/resources_services/file');
	xml_gpxtrace = svc_file.readGPXfile();
	Ti.API.info('test' + xml_gpxtrace);
	var doc = Ti.XML.parseString(xml_gpxtrace);
	var trace = doc.documentElement.getElementsByTagName('trkpt');
	Ti.API.info(trace);
	
	var tab_XMLpositions = [];
	var latitude;
	var longitude;
	for (var i=0; i < trace.length; i++) {
		latitude = trace.item(i).getAttributes().item(0).nodeValue;
		longitude = trace.item(i).getAttributes().item(1).nodeValue;
		tab_XMLpositions[i] = {
			longitude : longitude,
			latitude : latitude
		}
		//Ti.API.info(tab_XMLpositions[i].longitude + '\n');
	};
	
	return tab_XMLpositions;
};
