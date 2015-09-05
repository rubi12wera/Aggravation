app.controller('scoresCtrl', ["$scope","ScoreService",function($scope,$ScoreService) {
    $scope.scores = $ScoreService.getScores();


    $scope.$on('updateHomeCount', function() {
       
        $scope.scores = $ScoreService.getScores();
     

        $scope.$apply();
    });

    


}]);