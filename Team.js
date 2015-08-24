
var Track = require('./Track.js');
var Token = require('./Token.js')

var Team = function(name){
	this.name = name;
	var homeTrack = new Track(4);
	var baseTrack = new Track(4);
	var tokens = [
		new Token(0,baseTrack),
		new Token(1,baseTrack),
		new Token(2,baseTrack),
		new Token(3,baseTrack)
	];
}

module.exports = Team;
