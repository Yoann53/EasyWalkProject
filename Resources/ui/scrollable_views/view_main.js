/**
 * @author Yoann GAUCHARD
 */

//Invoke geo services
var svc_geo = require('services/business_services/geo'); 
//Invoke Timer class
var Timer = require('business_entities/timer');


/*
 * global vars
 */
var timer;
var arr_pos = svc_geo.getGPXtrace();
Ti.API.info(arr_pos.length);
/*
 * functions
 */
function displayTimerCallback(obj_timer) {
	lab_timer.text = obj_timer.h + ' : ' + obj_timer.m + ' : ' + obj_timer.s;
}



/*
 * UI elements
 */

var view_main = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {
    	latitude : arr_pos[0].latitude, 
    	longitude : arr_pos[0].longitude,
        latitudeDelta : 0.1, 
        longitudeDelta : 0.1},
    animate : false,
    regionFit : false,
    userLocation : false
});

var anno_current = Ti.Map.createAnnotation({
	animate : true,
	pincolor : Titanium.Map.ANNOTATION_GREEN,
	title : 'Vous êtes ici !',
	latitude : arr_pos[0].latitude, 
	longitude : arr_pos[0].longitude
});


var btn_start = Ti.UI.createButton({
	height : 44,
	width : 55,
	title : 'Start',
	bottom : 40,
	left : 40
});

var btn_pause = Ti.UI.createButton({
	height : 44,
	width : 55,
	title : 'Pause',
	bottom : 40,
	left : 40,
	visible : false
});

var btn_stop = Ti.UI.createButton({
	height : 44,
	width : 55,
	title : 'Stop',
	bottom : 40,
	right : 40
});

var lab_timer =  Ti.UI.createLabel({
	text:"start?",
	height:40,
	width:320,
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


/*
 * Event Listeners
 */

btn_start.addEventListener('click', function(){
	
	if(!timer) timer = new Timer();
	timer.start(displayTimerCallback);
	btn_pause.setVisible(true);
	this.setVisible(false);
	
	//TEST
	tracking();
	
});


btn_pause.addEventListener('click', function(){
	
	timer.pause(displayTimerCallback);
	
	btn_pause.setVisible(false);
	btn_start.setVisible(true);
	
});


btn_stop.addEventListener('click', function(){
	
	if(timer) {
		timer.stop(displayTimerCallback);
		timer = null;
	}
	
	if(btn_pause.getVisible) {
		btn_pause.setVisible(false);
		btn_start.setVisible(true);
	}
	
});


Ti.App.addEventListener('evtLocationUpdate', function(obj_coords){
	
	var tab_anno = view_main.getAnnotations();
	tab_anno[0].latitude = obj_coords.latitude;
	tab_anno[0].longitude = obj_coords.longitude;
	view_main.setAnnotations(tab_anno);
	
});


/*
 * UI element adds	
 */

view_main.add(lab_timer);
view_main.add(btn_start);
view_main.add(btn_pause);
view_main.add(btn_stop);
view_main.addAnnotation(anno_current);



/*
 * Functions calls
 */

//svc_geo.monitorGPSPosition();

function tracking(){
	
	var i = 1;
	var anno;
	var prec_anno;
	var timerAnno = setInterval( function() {
		
		if(i < 35) {
			anno = Ti.Map.createAnnotation({
				animate : true,
				pincolor : Titanium.Map.ANNOTATION_GREEN,
				title : lab_timer.text,
				latitude : 	arr_pos[i].latitude,
				longitude : arr_pos[i].longitude
			});
			
			if(!prec_anno) {
				prec_anno = anno_current;
			} else {
				prec_anno.setPincolor(Titanium.Map.ANNOTATION_RED);
			}
			
			view_main.addRoute({
				name : 'myRoute',
				width : 4,
				color : '#f00',	
				points : [
					{latitude : prec_anno.latitude, longitude : prec_anno.longitude},
					{latitude : arr_pos[i].latitude, longitude : arr_pos[i].longitude},
				]
			});
			
			view_main.addAnnotation(anno);
			prec_anno = anno;
			i++;	
		} else {
			clearInterval(timerAnno);
			timerAnno = null;	
		}
	}, 3000);
	
}


