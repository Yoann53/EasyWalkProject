/**
 * @author Yoann GAUCHARD
 */





exports.monitorGPSPosition = function(){
	
	if (Ti.Geolocation.locationServicesEnabled) {
	    Ti.Geolocation.purpose = 'Get Current Location';
	    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
	    Ti.Geolocation.distanceFilter = 10;
	
	    Ti.Geolocation.addEventListener('location', function(e) {
	        if (e.error) {
	            alert('Error: ' + e.error);
	        } else {
	            Ti.API.info(e.coords);
	        }
	    });
	} else {
	    alert('Activer le service de location svp');
	}
	
	
};
