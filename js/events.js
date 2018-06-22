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
      alert('G was pressed');
    }
  });
}

function submitIt () {
  
}

$(document).ready(function(){
//  return getIt();
// call functions here

});
