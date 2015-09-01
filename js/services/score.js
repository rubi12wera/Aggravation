var ScoreService = app.service("ScoreService",["$rootScope",function($rootScope){
	this.scores = [
		{team:"black", score: 0, wins: 0},
		{team:"red", score: 0, wins: 0},
		{team:"blue", score: 0, wins: 0},
		{team:"yellow", score: 0, wins: 0}
	];

	this.incrementScore = function (team) {
		var teamScore = 0;
		var teamWins=0;

		for (var i = 0; i < this.scores.length; i++) {
			if (this.scores[i].team === team) {
				this.scores[i].score++;
				teamScore = this.scores[i].score;
				if(teamScore === 4){
					this.scores[i].wins++;
					teamWins = this.scores[i].wins;
					this.scores[i].score = 0;
				}
			}
		}
	
		$rootScope.$broadcast('updateHomeCount');

		return teamScore;
	}


	this.getScores = function () {
		return this.scores;
	}


	this.getScore = function(team){
		var teamScore = 0;

		for (var i = 0; i < this.scores.length; i++) {
			if (this.scores[i].team === team) {;
				teamScore = this.scores[i].score;
				break;
			}
		}

		return teamScore;
	}
}]);