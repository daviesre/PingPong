$(document).ready(function() {
  $("form#userSubmit").submit(function(event) {
   var num = $("input#wordInput").val();
   event.preventDefault();
      for (var counter = 1; counter <= num; counter++) {
        if (counter % 15 === 0) {
         $("#list").append("<li>"+"ping-pong"+"</li>");
         console.log("pong");
        } else if (counter % 3 === 0) {
            $("#list").append("<li>"+"ping"+"</li>");
        } else if (counter % 5 === 0) {
            $("#list").append("<li>"+"pong"+"</li>");
        } else {
            $("#list").append("<li>"+ counter + "</li>");
        }
      }
  });
});
