var Token = function(position, track){
	this.track = track;
	this.setPosition(position);
}

Token.prototype.moveAhead = function(x){
	this.setPosition(this.position+x);
}


Token.prototype.setPosition = function (x) {
	if ( typeof this.position != "undefined" ) {
		this.track[this.position] = null;
	}

	this.position = x%this.track.length;

	this.track[this.position] = this;
}

module.exports = Token;