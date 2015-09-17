$(document).ready(function() {
  var titles = ["Hero", "Genius", "Legend", "Idiot", "Shit", "Ape", "Mastermind", "Knight", "King", "Winner", "Clown", "Teacher", "Human", "God", "Messia", "Prophet", "Prisoner", "Survivor", "Predator", "Loser", "Disciple", "Warden", "Trailblazer", "Phanton", "High Commander", "Lord", "Wiener", "Failure"];
  var cause = ["of Justice", "of Evil", "of Pranks", "of Stupidity", "of Power", "of Death", "of Earth", "of the Milkyway", "from Mars", "of Good", "of Memes", "of Joy", "of Sorrow", "from Jupiter", "from Venus", "from the Andromeda galaxy", "among Losers", "from nowhere"]; //will not add the rats causes, may add the rats name as unique exeptions and thereby given their correct titles
  var adjectives = ["Super", "Unrivaled", "Great", "Horrible", "Epic", "Legendary"];
  var timer = setInterval(function() {
    myTimer()
  }, 100);

  function myTimer() {
    $('#time').html("" + new Date());
  }
  $("#knight_me", "body").click(function() {
    navn = $("input[name=Name]").val();
    if (navn === "") {
      navn = "Retard who doesn't even have a name"
    }
    if (navn === "BrokkoliMan") {
      $("#free_title_div", "body").append($("<h2 class='bg-success mye_luft'>BrokkoliMan the Rat of Time.</h2>"));
      return false;
    }
    if (navn === "Hridann") {
      $("#free_title_div", "body").append($("<h2 class='bg-success mye_luft'>Hridann the Rat of Resolve.</h2>"));
      return false;
    }
    if (navn === "Combojin") {
      $("#free_title_div", "body").append($("<h2 class='bg-success mye_luft'>Combojin the Rat of Luck.</h2>"));
      return false;
    }
    if (navn === "Lax1n") {
      $("#free_title_div", "body").append($("<h2 class='bg-success mye_luft'>Lax1n the Rat of Legends.</h2>")); //Lax1n you may change this
      return false;
    }
    if (navn === "AlumiC") {
      $("#free_title_div", "body").append($("<h2 class='bg-success mye_luft'>AlumiC the Rat of Rats.</h2>"));
      return false;
    }
    var title = navn + " the "; // + " the " + titles[Math.floor(Math.random() * titles.length)];
    var rand = Math.random();
    if (rand < 0.05) {
      console.log("test");
      title += adjectives[Math.floor(Math.random() * adjectives.length)] + " ";
    }
    title += titles[Math.floor(Math.random() * titles.length)];
    if (rand > 0.4) {
      console.log("test2");

      title += "  " + cause[Math.floor(Math.random() * cause.length)];

    } //

    $("#free_title_div", "body").append($("<h2 class='bg-success mye_luft'>" + title + ".</h2>"));
    return false;
  });
});