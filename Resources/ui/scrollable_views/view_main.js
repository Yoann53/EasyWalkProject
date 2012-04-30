/**
 * @author Yoann GAUCHARD
 */


var view_main = Titanium.Map.createView({
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

//Invoke geo services
var svc_geo = require('services/business_services/geo');

svc_geo.monitorGPSPosition();
