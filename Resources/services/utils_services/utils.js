/**
 * @author Yoann GAUCHARD
 */


exports.check_mail = function(str_emailAddress){
  
  	try{
		
	  	var boo_mailOK; 
	    var str_mail = str_emailAddress;  
	    
	    var obj_filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;  
	    if (obj_filter.test(str_mail))  
	    {  
	        boo_mailOK = true;  
	    }  
	    else  
	    {  
	        boo_mailOK = false;  
	    }  
	    return (boo_mailOK);	
	  		
	  		
  	}catch(e){
  		
  		Ti.API.info('[DEV] checkmail utils service failed : ' + e);
  		
  	}
}
