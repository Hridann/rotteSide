$(document).ready(function() { 

  var timer = setInterval(function() {
	myTimer()
  }, 100);
  function myTimer() {
	$('#time').html("" + new Date());
  }
});
