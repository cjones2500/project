function fakeLoad(){
  
  var animate  = $(".animate").addClass("run");
  var distance = $(".content").offset().top;    
  var timer    = setTimeout(function(){
    $(".loader").fadeOut(250);
    $('html,body').animate({
      scrollTop: distance
    }, 500);
  },2000);
  
}

$(document).ready(function(){

  fakeLoad();

});
