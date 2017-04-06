$(window).load(function() {
  // Animate loader off screen
  $(".preloader").fadeOut("slow");;
});


$(function() {
  $('#slides').superslides({
    inherit_width_from: '.wide-container',
    inherit_height_from: '.wide-container'
  });
});
