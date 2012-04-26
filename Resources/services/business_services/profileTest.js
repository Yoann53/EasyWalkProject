Titanium.include("../../TitaniumUnity.js");
 
var DataTestSuite = {
 
    suiteName: "Profile Test Suite",
 
    setUp: function() {
       // ...
    },
 
    tearDown: function() {
       // ...
    },
 
// add your test functions:
 
    testPasswordMatch: function() {
    	
       //jsUnity.assertions.assertNaN(true,"oh oh");
       
       //Handle all textfield values
		var obj_params = {
			login : 'bob',
			password1 : 'x',
			password2 : 'y',
			username : 'txt_username.value'
		}
	
		//Invoke profile services
		var svc_profile = require('services/business_services/profile');
	
		//Call signup service to register the current user on webserver
		var obj_user = svc_profile.signup(obj_params);	
       
       jsUnity.assertions.assertUndefined(obj_user,"obj user was not null");
       
    }
};
 
Titanium.UI.currentWindow.addEventListener(
    'focus',
    function(e) {
        jsUnity.run(DataTestSuite);
});