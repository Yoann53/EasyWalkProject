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


var btn_start = Ti.UI.createButton({
	height : 44,
	width : 44,
	title : 'Start',
	bottom : 40,
	left : 40
});

var btn_stop = Ti.UI.createButton({
	height : 44,
	width : 44,
	title : 'Stop',
	bottom : 40,
	right : 40
});

var lab_timer =  Ti.UI.createLabel({
	text:"start?",
	height:40,
	width:200,
	top:0,
	left:0,
	color:'#fff',
	borderRadius:10,
	backgroundColor:'#000',
	font:{
		fontSize:30,
		fontWeight:'bold'
	},
	textAlign:'center'
});

svc_geo.monitorGPSPosition();

btn_start.addEventListener('click', function(){
	
	Timer = require('business_entities/timer');
	var timer = new Timer();
	timer.start(displayCallback);
	
});

function displayCallback(obj_timer){
	lab_timer.text = String.format("%s : %s : %s", obj_timer.h, obj_timer.m, obj_timer.s);
	//lab_timer.text = obj_timer.total_sec;
}

Ti.App.addEventListener('evtLocationUpdate', function(obj_coords){
	
	var tab_anno = view_main.getAnnotations();
	tab_anno[0].latitude = obj_coords.latitude;
	tab_anno[0].longitude = obj_coords.longitude;
	view_main.setAnnotations(tab_anno);
	
});

view_main.add(lab_timer);
view_main.add(btn_start);
view_main.add(btn_stop);
view_main.addAnnotation(anno_current);

