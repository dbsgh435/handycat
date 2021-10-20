$(function() {
  setInterval(function() {
    $(".slide").animate({
      left : '-100%'
    }, function() {
      $(".slide>a").eq(0).appendTo(".slide"),
      $(".slide").animate({
        left : 0
      },0)
    }, 0)
  },3000)
})