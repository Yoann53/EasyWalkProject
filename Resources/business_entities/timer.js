/**
 * @author Yoann GAUCHARD
 */

//Timer Class

//constructor

function Timer() {
	this.h = 0; //hours
	this.m = 0; //minutes
	this.s = 0; //secondes
	this.totalsec = 0; //total of secondes 
}


//Start timer method

Timer.prototype.start = function(callback) {
    var self = this; 
    setInterval( function() {
    	self.totalsec += 1 ;
    	Ti.API.info(self.totalsec); 
    	self.h = Math.floor(self.totalsec / 3600);
    	Ti.API.info(self.h); 
    	self.m = Math.floor(self.totalsec / 60);
    	Ti.API.info(self.m); 
    	self.s = self.totalsec % 60;
    	Ti.API.info(self.s); 
    	//callback(self);
    }, 1000 );
};

//Stop timer method

Timer.prototype.stop = function() {
    return this.login;
};


//accessors

Timer.prototype.getTotal_sec = function() {
	return this.total_sec;
}

module.exports = Timer;
