/**
 * @author Yoann GAUCHARD
 */

//*******  Web services  *******//

//findFile Service

exports.isCookieExist = function(str_filename) {
	
	var file_userCookie = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'userCookie.txt');
	
	if(file_userCookie.exists()) return true;
	else return false;
}




//writeUserCookie Service

exports.writeUserCookie = function(obj_userArgs){
	
	var file_userCookie = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'userCookie.txt');
			
	file_userCookie.write(JSON.stringify(obj_userArgs));
}