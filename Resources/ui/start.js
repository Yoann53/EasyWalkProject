/**
 * @author Yoann GAUCHARD
 */

var win_start = Titanium.UI.currentWindow;

// initialize to all modes
win_start.orientationModes = [
	Titanium.UI.PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
];

//Invoke geo services
var svc_geo = require('services/business_services/geo');

//var mapview = svc_geo.displayMap();


var tab_views = [];
//tab_views.push(mapview);

var scrollableview = Ti.UI.createScrollableView({
	showPagingControl : true,
	currentPage : 0,
	pagingControlHeight : 30,
	views: tab_views
});

win_start.add(scrollableview);

//svc_geo.monitorGPSPositiion();
