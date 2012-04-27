/**
 * @author Yoann GAUCHARD
 */

var win_start = Titanium.UI.currentWindow;
var scrollableview_start = Ti.UI.createScrollableView();
var view_start = Ti.UI.createView();

// initialize to all modes
win_signup.orientationModes = [
	Titanium.UI.PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
];

