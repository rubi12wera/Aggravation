/*var app = angular.module("aggravationApp");*/

app.controller('homeCtrl', ["$scope","ScoreService", function($scope,$ScoreService) {
    

 $(function() {
    $( ".draggable" ).draggable({
        revert:"invalid",
    });
    $( ".droppable" ).droppable({
      accept: ".draggable",

      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
        var a = $(event.target).hasClass("home");

        if (a === true){
            // if ( $(event.target).hasClass("black"); )
            $ScoreService.incrementScore("Blue");
        }

      }
    });
  });
    

}]);