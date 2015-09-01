app.controller('scoresCtrl', ["$scope","ScoreService",function($scope,$ScoreService) {
    $scope.scores = $ScoreService.getScores();

    $scope.$on('updateHomeCount', function() {
       
        $scope.scores = $ScoreService.getScores();
        $scope.$apply();
    });

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
    


}]);