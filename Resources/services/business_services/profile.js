/**
 * @author Yoann GAUCHARD
 */

//*******  Profile services  *******//


//Signup Service

exports.signup = function(user_args){
	
	// 1 - Check if all fields aren't empty
	// 2 - Check if login is a valid
	// 3 - Check if current user is exist
	// 4 - Compare password1 and password2
	// 5 - Save user on web server
	// 6 - Create one cookie on mobile
	// 7 - Instanciate current user in global scope 
	
	
	try{
		
		//** 1 - Check if all fields aren't empty **//
		
		if (user_args.login == '' || user_args.password1 == '' || user_args.password2 == '' || user_args.username == '') {
	    	return 'Veuillez renseigner tous les champs !';
		}
		
		
		
		//** 2 - Check if login is a valid **//
		
    	//Invoke utils services
    	var svc_utils = require('services/utils_services/utils');
    	
    	//Call checkmail service to verify mail synthax
    	var mailok = svc_utils.check_mail(user_args.login);
    	
    	if(!mailok) return 'Adresse mail invalide !';
		
		
		
		//** 3 - Check if current user is exist **//
				
    	//Invoke web services
		var svc_web = require('services/resources_services/web');
		
		//Call "isExist" service to check if current user already exists
		var isExist = svc_web.isExist(user_args.login);
		
		if(isExist) return 'Login déjà utilisé !';			
		
		
		
		//** 4 - Save user on web server **//
		
		if(user_args.password1 != user_args.password2) return 'Mots de passe différents !';	 		
					
		//** 5 - Save user on web server **//
		
		//Call postUserInfo service to register the current user on webserver
		var success = svc_web.postUserInfo(user_args);
		
		if(!success) return 'L\inscription a échouée !';
		else {
			
			//** 6 - Create one cookie on mobile **//
					
					
				
			//** 7 - Instanciate current user in global scope  **//
			
			//Invoke user entity
			var ent_user = require('business_entities/user.js');  
			
			var obj_user = new User();
			obj_user.setLogin(user_args.login);
			obj_user.setPassword(user_args.password);
			obj_user.setUsername(user_args.username);
			
			return obj_user;
		}//end else
		
	} catch(e) {
		
		Ti.API.info('[DEV] SignUp profile service failed : ' + e);
		
	}
}
