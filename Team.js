
var Track = require('./Track.js');
var Token = require('./Token.js')

var Team = function(color){
	this.setColor(color);

	this.homeTrack = new Track(4);
	this.baseTrack = new Track(4);
	this.tokens = [
		new Token(0,this.baseTrack),
		new Token(1,this.baseTrack),
		new Token(2,this.baseTrack),
		new Token(3,this.baseTrack)
	];
}

Team.prototype.validateColor = function(color){
  var VALID_COLORS = ["blue", "red", "green", "black"];

  var isValidColor = false;

  if ( VALID_COLORS.indexOf(color) >= 0 ) {
    isValidColor = true;
  }

  return isValidColor;
}

Team.prototype.setColor = function(color){
	if ( this.validateColor(color) ) {
		this.color = color;
	} else {
		this.color = this.color || null;
	}
}

Team.prototype.getColor = function(){
	return this.color;
}


module.exports = Team;