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
