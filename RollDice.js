RollDice = function () {
	this.rollDice = Math.floor(Math.random() * 6) + 1;
		console.log(this.rollDice);
	if (this.rollDice === 6) {
		alert("you get a free turn! yay! \n Roll dice again!");
	}
	return this.rollDice;
};

module.exports = RollDice;