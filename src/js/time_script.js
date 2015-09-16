$(document).ready(function() { 
	var titles = ["Hero", "Genius", "Legend", "Idiot", "Shit", "Ape", "Mastermind", "Knight", "King", "Winner", "Clown", "Teacher"];
	var cause = ["of Justice", "of Evil", "of Pranks", "of Stupidity", "of Power", "of the Dead"];
	var timer = setInterval(function() {
		myTimer()
	}, 100);
	function myTimer() {
		$('#time').html("" + new Date());
	}
	$("#knight_me", "body").click(function (){
 	 	navn = $("input[name=Name]").val();
  	if(navn === ""){
			navn = "Retard"
  	}
  	if(Math.random() < 0.5){
			$("#free_title_div", "body").append($("<h2 class='bg-success mye_luft'>"+navn+" the " + titles[Math.floor(Math.random()*titles.length)] + "  " + cause[Math.floor(Math.random()*cause.length)] + ".</h2>"));
		}
		else{
			if(Math.random() < 0.5){
				$("#free_title_div", "body").append($("<h2 class='bg-success mye_luft'>"+navn+" the " + titles[Math.floor(Math.random()*titles.length)] +".</h2>"));
			}
		}
		return false;
  	});
});
