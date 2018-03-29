  $(document).ready(function() {
    $("form#formOne").submit(function(event) {
      event.preventDefault();
      var secondQ = parseInt($("#secondQ").val());
      var fourthQ = parseInt($("#fourthQ").val());
      var fifthQ = parseInt($("input[type=radio][name=lax]:checked").val());

      var score = secondQ + fourthQ + fifthQ;


      if (score >= 7) {
          $('#java').show();
        } else if (score <=4) {
          $('#react').show();
        } else {
          $('#cSharp').show();
        }


    });
  });
