  var work1 = 225;
  var work2 = 150;
  var work3 = 75;
  var lax1 = 51;
  var lax2 = 0;
  var lax3= -51;

  var ans1 = function(work1, work2, work3, lax1, lax2, lax3) {
    return work3 + lax1 || work3 + lax2 || work3 + lax3;
  };
  var ans2 = function(work1, work2, work3, lax1, lax2, lax3) {
    return work2 + lax1 || work2 + lax2 || work2 + lax3;
  };
  var ans3 = function(work1, work2, work3, lax1, lax2, lax3) {
    return work1 + lax1 || work1 + lax2 || work1 + lax3;
  };

  var score = (ans1 || ans2 || ans3);


  $(function() {
    $("form#formOne").submit(function(event) {
      event.preventDefault();
      var work1 = $("#ms").val();
      var work2 = $("#jpm").val();
      var work3 = $("#ig").val();
      var lax1 = $("#lax1input:radio[name=lax]:checked").val();
      var lax2 = $("#lax2input:radio[name=lax]:checked").val();
      var lax3 = $("#lax3input:radio[name=lax]:checked").val();


      if (score === 24,75,99) {
        $("#java").show();
      } else if (score === 126,150,174) {
        $("#react").show();
      } else if (score === 201,225,276) {
        $("#c#").show();
      } else {
        alert("Uh-Oh!");
      }

  });
});
