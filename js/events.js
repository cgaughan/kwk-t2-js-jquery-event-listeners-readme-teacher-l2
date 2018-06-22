//define functions here
function getIt () {
  $("p").click(function(){
    alert("Hey!");
});
}

function frameIt () {
  $(".tasty").load(function() {
    $("img").addClass("tasty");
  });
}


$(document).ready(function(){
//  return getIt();
// call functions here

});
