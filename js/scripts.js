$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();


    var flavor = $("input:radio[name=lax]:checked").val();

  });
});
