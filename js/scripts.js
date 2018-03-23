home




$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var home = $("#secondQ").val();
    var work1 = $("#ms").val();
    var work2 = $("#jpm").val();
    var work3 = $("#ig").val();
    var lax1 = $("input:radio[name=lax1]:checked").val();
    var lax2 = $("input:radio[name=lax2]:checked").val();
    var lax3 = $("input:radio[name=lax3]:checked").val();


    if (score === 24,75,99) {
      $("#java").text(You got Java);
    } else if (score === 126,150,174) {
      $("#react").text(You got Java);
    } else if (score === 201,225,276) {
      $("#c#").text(You got java);
    } else {
      $("#error").text(Uh-Oh!);
    }

  });
});
