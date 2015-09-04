

/**/

app.controller('diceChatCtrl', function($scope, $firebaseArray, $firebaseObject) {

	$scope.RollDice = function () {
		this.rollDice = Math.floor(Math.random() * 6) + 1;
			
			if (this.rollDice === 6) {
				alert("you get a free turn! yay! \n Roll dice again!");
			}
		$scope.rollDice = this.rollDice;
	
	};

	var firebaseRoot = 'https://adrianaexample.firebaseio.com/firebaseChatAggravation';
				var ref = new Firebase(firebaseRoot + '\chats');
				var chats = $firebaseArray(ref);

				$scope.chats = chats;

				$scope.sendChat = function(username, newChatText) {
					chats.$add({
						username: username,
						text: newChatText
					});
				};

});