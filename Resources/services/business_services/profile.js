/**
 * @author Yoann GAUCHARD
 */

//*******  Profile services  *******//


//Signup Service

exports.signup = function(user_args){
	
	// 1 - Check if current user is exist
	// 2 - Save user on web server
	// 3 - Create one cookie on mobile
	// 4 - Instanciate current user in global scope 
	
	
	try{
		
		if (user_args.login == '' || user_args.password1 == '' || user_args.password2 == '' || user_args.username == '') {
	    	
	    	return alert("Tous les champs sont obligatoires !");
	    	
		} else {
			
			//** 1 - Check if current user is exist **//
	    	
	    	//Invoke utils services
	    	var svc_utils = require('services/utils_services/utils');
	    	
	    	//Call checkmail service to verify mail synthax
	    	var mailok = svc_utils.check_mail(user_args.login);
	    	
	    	if(mailok) {
	    		
	    		alert('login déjà utilisé !');
	    		
			} else {
				
		    	//Invoke web services
				var svc_web = require('services/resources_services/web');
				
				//Call "isExist" service to check if current user already exists
				var isExist = svc_web.isExist(user_args.login);
				
				if(!isExist){
					
					alert('Cette adresse email est déjà utilisée !');
					
				} else {
					
					//** 2 - Save user on web server **//
					
					//Call postUserInfo service to register the current user on webserver
					var success = svc_web.postUserInfo(user_args);
					
					if(!success) {
						
						alert('L\inscription a échouée, veuillez recommencez.');
						
					}else{
						
						return success;  
						
					} 
					
					//** 3 - Create one cookie on mobile **//
					
					
				
					//** 4 - Create one cookie on mobile **//
					
					//Invoke user entity
					var ent_user = require('business_entities/user.js');  
					
					var obj_user = new User();
					obj_user.setLogin(user_args.login);
					obj_user.setPassword(user_args.password);
					obj_user.setUsername(user_args.username);
					
				}//end else	
	    	}//end else	
		}//end else
		
	} catch(e) {
		
		Ti.API.info('[DEV] SignUp profile service failed : ' + e);
		
	}
}
