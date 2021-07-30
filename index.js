$(document).keypress(function(){
  $("#level-title").text("Level 1");
  nextSequence();
})

var buttonColors = ["red", "blue", "green", "yellow"]
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = [];
    randomChosenColor.push(buttonColors[randomNumber]);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

    console.log("sounds/"+randomChosenColor+".mp3");
    var audio = new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
    console.log(randomChosenColor);
}

