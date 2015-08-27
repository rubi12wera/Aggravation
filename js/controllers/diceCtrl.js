

/*RollDice = function () {
	this.rollDice = Math.floor(Math.random() * 6) + 1;
		console.log(this.rollDice);
	if (this.rollDice === 6) {
		alert("you get a free turn! yay! \n Roll dice again!");
	}
	return this.rollDice;
};

module.exports = RollDice;*/
var app = angular.module("aggravationApp");

app.controller('diceCtrl', function($scope) {


		 $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    

			

});