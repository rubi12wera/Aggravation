 'use strict';
app.service('draggService', function(){

//i am confused as of how to have my fucntions here on service and then pass it to controller. I also havent included this feli on my html as a script.

 $(function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      accept: "#draggable",
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
      }
    })
  })


 })