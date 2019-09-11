var mycarX = 0;
var macarY = 0;
var moveLeft = false;


function start(){
  document.getElementById("title").innerHTML="Welcome to 'Drive High Way'";
  document.getElementById("btn").innerHTML="Game Start";
  document.getElementById("score").innerHTML="SCORE: 0";

  document.getElementById("mycar").style.background.color = "red";

  
  
}




  
   
function left(){
  // document.getElementById('mycar').style.left = 5;
  document.getElementById("mycar").style.left = document.getElementById("mycar").style.left - 2 + "%";
  console.log("working;")
}