var Track = require('./Track.js');
var Team = require('./Team.js');

function Board(teamSetupFunction){
	this.track = new Track(56);
	this.teams = [];

	teamSetupFunction(this.teams, function(callbackTeams){
		this.teams = this.teams || callbackTeams;
		console.log("i'm executing right after teamSetupFunction");
		console.dir(this.teams);
	});
}

Board.prototype.startGame = function(){

}

Board.prototype.rollDice = function () {
	return Math.floor(Math.random() * 6) + 1;
};

module.exports = Board;