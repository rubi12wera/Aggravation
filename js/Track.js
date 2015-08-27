var Track= function(size){
	this.track = [];
 	for (var i = 0; i < size; i++) {
 		this.track[i]= null;
 	};

 	return this.track;
 }

module.exports = Track;




/*

  var track = new Track(25);
  console.log(track);

  this is for testing
  */