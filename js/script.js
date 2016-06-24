var pingPong = function(ping) {
  for (counter = 1; counter < numInput; counter++) {
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
    var numInput = $("input#wordInput").val();
    $("#result span").text(pingPong(numInput));
    $("result").show(pingPong(numInput));
    console.log()


  });
});
