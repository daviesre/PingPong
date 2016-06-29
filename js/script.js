function calculate(numInput) {
  var input = [];
  for (var i = 1; i <= numInput; i++) {
    if (i % 15 === 0) {
     input.push("ping-pong");
   } else if (i % 3 === 0) {
        input.push("ping");
    } else if (i % 5 === 0) {
        input.push("pong");
    } else {
        input.push(i);
    }

  }
  return input;
};


$(document).ready(function() {
  $("form#userSubmit").submit(function(event) {
   var numInput = parseInt($("input#NumInput").val());
   event.preventDefault();
   $("#list").html("");

   var output = calculate(numInput);
   $("#list").text(output);


  });
});
