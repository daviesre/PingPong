var pingPong = function(ping) {
  for (counter = 1; counter < 21; counter++) {
    if (counter % 15 === 0) {
      console.log("ping-pong");
    } else if (counter % 3 === 0) {
      console.log("ping");
    } else if (counter % 5 === 0) {
      console.log("pong");
    } else {
      console.log(counter);
    }
  }
}


$(document).ready(function() {
  $("form#tabletennis").submit(function(event){
    event.preventDefault();
    
  });

});
