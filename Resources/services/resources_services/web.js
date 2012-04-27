/**
 * @author Yoann GAUCHARD
 */

//*******  Web services  *******//

//isExist Service

exports.isExist = function(username){

	//Check if user exists on database server
	try{ 
		
		var url = 'http://EasyWalk.com/WebServ/API/isExist/login='+ username +'&format=json'; 
        var json;
        var xhr = Ti.Network.createHTTPClient({
	    	onload: function(e) {
				// this function is called when data is returned from the server and available for use
		        // this.responseText holds the raw text return of the message (used for text/JSON)
		        // this.responseXML holds any returned XML (including SOAP)
		        // this.responseData holds any returned binary data
		        Ti.API.info(this.responseText);
		        json = JSON.parse(this.responseText);
		    },
		    onerror: function(e) {
				// this function is called when an error occurs, including a timeout
		        Ti.API.info(e.error);
		    },
		    timeout: 5000  /* in milliseconds */
		});
		
		xhr.open("GET", "POST","http://localhost:8888/post_auth.php"); //replace by url var
		xhr.send();  // request is actually sent with this statement
		
		return json.isExist;        	
	} catch(e) {
		
		Ti.API.info('[DEV] isExist web service failed : ' + e);
		
	}
}

exports.signup = function(obj_args){
	
	
	
}

/*
var params = {  
            password: Ti.Utils.md5HexDigest(user_args.password)  
        };
        
*/ 