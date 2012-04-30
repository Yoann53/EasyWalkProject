/**
 * @author Yoann GAUCHARD
 */

export.displayMap = function(){
	
	var mapview = Titanium.Map.createView({
	    mapType: Titanium.Map.STANDARD_TYPE,
	    region: {
	    	latitude:37.389569, 
	    	longitude:-122.050212,
	        latitudeDelta:0.1, 
	        longitudeDelta:0.1},
	    animate:true,
	    regionFit:true,
	    userLocation:false
	});
}
/*
export.monitorGPSPosition = function(){
	
	if (Ti.Geolocation.locationServicesEnabled) {
	    Titanium.Geolocation.purpose = 'Get Current Location';
	    Titanium.Geolocation.addEventListener('location', function(e) {
	        if (e.error) {
	            alert('Error: ' + e.error);
	        } else {
	            Ti.API.info(e.coords);
	        }
	    });
	} else {
	    alert('Please enable location services');
	}
}
*/