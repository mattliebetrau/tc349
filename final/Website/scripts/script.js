$(document).ready(function(){

  $(".mobile-menu-btn").click(function() {
     $(".navigation").toggleClass("open");
     $(".mobile-menu-btn").html($('.mobile-menu-btn').text() == 'X' ? 'MENU' : 'X');
  });

}); 