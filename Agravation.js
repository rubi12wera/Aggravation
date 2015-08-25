//how many players?
var prompt = require('prompt');
var Board = require('./Board.js')
var Team = require('./Team.js')

var myBoard = new Board(function(teamArray, afterSetupFunction){
  getPlayers(teamArray, afterSetupFunction);
});

// 
// Get two properties from the user: number of players and team color 
// 
function getPlayers (teamArray, afterSetupFunction){
  prompt.start();
  prompt.get(['players'], function (err, result) {
    var numPlayers = result.players;

    // Log the results. 
    console.log('  number of players: ' + numPlayers);
    // console.log(result);
    // console.log(numPlayers);
    
    if (result.players > 4 || result.players < 2) {
       throw ('min 2 players and max 4 players, try again!');
    } 

    getTeamsColors(numPlayers, teamArray, afterSetupFunction);
  });
   
}

function getTeamsColors(numberOfTeams, teamArray, afterSetupFunction){
  if ( teamArray.length < numberOfTeams ) {
    var message = "Enter the color for team "+(teamArray.length+1).toString();
    getTeamColor(message, teamArray, numberOfTeams, afterSetupFunction);
  } else {
    afterSetupFunction(teamArray);
  }
}


function getTeamColor (message, teamArray, numPlayers, afterSetupFunction){
  console.log(message);
  prompt.get(['teamColor'], function (err, answer) {
    if ( (new Team).validateColor(answer.teamColor) ) {
      var team = new Team(answer.teamColor);
      teamArray.push(team);
      getTeamsColors(numPlayers, teamArray, afterSetupFunction);
    } else {
      console.log("Team color not valid!\nPlease try again.");
      getTeamColor(message, teamArray, numPlayers, afterSetupFunction);
    }
  }
)}