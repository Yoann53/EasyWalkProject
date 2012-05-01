/**
 * @author Yoann GAUCHARD
 */

/*
 * Timer Class
 */

//constructor

function Timer() {
	this.h = 0; //hours
	this.m = 0; //minutes
	this.s = 0; //secondes
	this.totalsec = 0; //total of secondes 
	this.timer = null; //timer function
}


//Timer start method

Timer.prototype.start = function(callback) {
    var self = this; 
    self.timer = setInterval( function() {
    	self.totalsec += 1 ;
    	//Ti.API.info(self.totalsec); 
    	self.h = Math.floor(self.totalsec / 3600);
    	//Ti.API.info(self.h); 
    	self.m = Math.floor(self.totalsec / 60);
    	//Ti.API.info(self.m); 
    	self.s = self.totalsec % 60;
    	//Ti.API.info(self.s); 
    	
    	if(self.h < 10) self.h = '0' + self.h;
    	if(self.m < 10) self.m = '0' + self.m;
    	if(self.s < 10) self.s = '0' + self.s;
    	
    	callback(self);
    }, 1000 );
};


//Timer pause method

Timer.prototype.pause = function(callback) {
	clearInterval(this.timer);
    this.timer = null;
};

//Timer stop method

Timer.prototype.stop = function(callback) {
    clearInterval(this.timer);
    this.timer = null;
    this.h = 0;
    this.m = 0;
    this.s = 0;
    this.totalsec = 0;
    
    var self = this;
    self.h = '0' + self.h;
    self.m = '0' + self.m;
    self.s = '0' + self.s;
    
    callback(self);
};

module.exports = Timer;
