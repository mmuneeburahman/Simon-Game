$(document).keypress(function(){
  startGame();
})
  //variable required
  var level = 0;
  var started = false;  
  var index =0;
  var buttonColors = ["red", "blue", "green", "yellow"];
  var gamePattern = [];         //stores the game patten in sequence
  var userClickedPattern = [];  //stores the pattern of user clicks
  var audio = new Audio();
function startGame(){
  $("#level-title").text("Level "+level);
  nextSequence();
}

$(".btn").click(function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour); 
  playSound(userChosenColour);
  checkAnswer();
})

function playSound(color){           //play sound when clicked or nextSequence;
  audio.src = "sounds/"+color+".mp3";
  audio.play();
}

function animatePress(currentColor){  //animation when button is clicked;
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  }, 100)
} 

function nextSequence(){
    ++level;
    index =0;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);     //generate random number from 0 to 3;
    var randomChosenColor = buttonColors[randomNumber]; //Select the color on the basis of number;
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);  //Animation for button
    playSound(randomChosenColor);
}


function checkAnswer(){
  if(userClickedPattern[userClickedPattern.length-1]===gamePattern[index]){
    index++;
    if(index===level){
      setTimeout(function(){
        nextSequence();
      }, 500);
    }
  }
  else{
    playSound("wrong");
    $("h1").text("Game over, Press Any Key To Restart")
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function startOver(){
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
  started = true;
}