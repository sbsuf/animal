$(document).ready(function() {
  $("form").click(function(event) {
    $('input[type="radio"]').on('click', function() {
         window.location = $(this).val();
    });
    event.preventDefault();
  });
});
