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


Board.prototype.rollDice = function () {
	return Math.floor(Math.random() * 6) + 1;
}

Board.prototype.startGame = function(){
	/*for(var i = 0, var i > (this.teams).length, i++){
		this.points = [];
		(this.points).push(rollDice());
	}
	if ((this.points) ) {} else{};*/
	return('im returning somehting')


}

/////rules for game goes here

//saving the last rolled die ?
// var lastRolledDice = [rollDice()];
// ///start with dice 
// function repeatDice (){
// 	for (var i = 0; i < lastRolledDice.length; i++) {
// 		if (lastRolledDice[i] === 6) {
// 		alert("you get a free turn! yay! \n Roll dice again!");
// 		rollDice();
// 		}
// 	}
// }









module.exports = Board;











