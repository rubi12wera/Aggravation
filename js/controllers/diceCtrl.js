

/**/

app.controller('diceCtrl', function($scope) {

	$scope.RollDice = function () {
		this.rollDice = Math.floor(Math.random() * 6) + 1;
			
			if (this.rollDice === 6) {
				alert("you get a free turn! yay! \n Roll dice again!");
			}
		$scope.rollDice = this.rollDice;
	
	};

});