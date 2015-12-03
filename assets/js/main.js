function init() {
  $(window).scroll(function (){
    var scrollBar = $(document).scrollTop();
    var positionSection = $(".quality-item").offset().top;


    if(scrollBar > 300){
      $(".goTop").fadeIn(1500);
    }  else {
      $(".goTop").fadeOut(1500);
    }

    if(scrollBar >  positionSection - 350){
      $(".quality-item").addClass("imgAnimation");
    }

  });
}

$(document).ready(function() {
  init();
});
