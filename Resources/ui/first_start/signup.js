/**
 * @author Yoann GAUCHARD
 */

var win_signup = Titanium.UI.currentWindow;

// initialize to all modes
win_signup.orientationModes = [
	Titanium.UI.PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
];

var txt_login = Titanium.UI.createTextField({
	color:'#336699',
	top:20,
	left:35,
	width:250,
	height:40,
	hintText:'Adresse_mail',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var txt_password = Titanium.UI.createTextField({
	color:'#336699',
	top:80,
	left:35,
	width:250,
	height:40,
	hintText:'Mot de passe',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var txt_confirm_password = Titanium.UI.createTextField({
	color:'#336699',
	top:140,
	left:35,
	width:250,
	height:40,
	hintText:'Confirmation du mot de passe',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var txt_username = Titanium.UI.createTextField({
	color:'#336699',
	top:210,
	left:35,
	width:250,
	height:40,
	hintText:'Pseudo',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var btn_send = Ti.UI.createButton({
		height:44,
		width:200,
		title:'Valider',
		top:280
});

btn_send.addEventListener('click', function(){
	
	try{
		
		//Handle all textfield values
		var obj_params = {
			login : txt_login.value,
			password1 : txt_password.value,
			password2 : txt_confirm_password.value,
			username : txt_username.value
		}
	
		//Invoke profile services
		var svc_profile = require('services/business_services/profile');
	
		//Call signup service to register the current user on webserver
		svc_profile.signup(obj_params);	
	
	} catch(e) {
		
		Ti.API.info('[DEV] SignUp ui EventListener failed : ' + e);
		
	}
});

win_signup.add(txt_login);
win_signup.add(txt_password);
win_signup.add(txt_confirm_password);
win_signup.add(txt_username);
win_signup.add(btn_send);


