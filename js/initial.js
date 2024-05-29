// var bannerLeft = $('bannerLeft').height()
// var bannerRight = $('bannerRight').height()

// console.log(bannerLeft)
// console.log(bannerRight)
// bannerLeft = bannerRight

$(function () {
  var heightLeft = $("#bannerLeft").height();
  var heightRight = $("#bannerRight").height();

  $("#left").height(heightRight);


  // if (heightLeft > heightRight) { 
  //       $("#right").height(heightLeft); 
  // } else { 
  //      $("#left").height(heightRight); 
  // } 
}); 
