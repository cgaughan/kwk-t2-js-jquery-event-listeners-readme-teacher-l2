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
      alert("G was pressed.");
    }
  });
}

function submitIt () {
  $("form").submit(function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
// call functions here
  return getIt();
  return frameIt();
  return pressIt();
  return submitIt();
});
