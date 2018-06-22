//define functions here
function getIt () {
  $("p").click(function(){
    alert("Hey!");
  });
}

function frameIt () {
    $("img").addClass("tasty").load(function() {
  });
}

function pressIt () {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert("Your form is going to be submitted now.");
    }
  });
}

function submitIt () {
  $("form").submit(function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
//  return getIt();
// call functions here

});
