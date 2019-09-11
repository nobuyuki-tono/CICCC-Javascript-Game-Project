var mycarX = 0;
var macarY = 0;
var moveLeft = false;


setTimeout(updat)

function updateGame()
{

}


function start(){
  document.getElementById("title").innerHTML="Welcome to 'Drive High Way'";
  document.getElementById("btn").innerHTML="Game Start";
  document.getElementById("score").innerHTML="SCORE: 0";

  document.getElementById("mycar").style.background.color = "red";

  
  
}

document.addEventListener('keyup', function (event) {
  if (event.defaultPrevented) {
      return;
  }

  var key = event.key || event.keyCode;

  if (key === 'a' || key === 'A') {
      moveleft();
  }else if(key === 'd' || key === 'D'){
    right();
  }else if(key === 'w' || key === 'W'){
    movetop();
  }else if(key === 's' || key ==='S'){
    movedown();
  }
});




  
   
function left(){
  // document.getElementById('mycar').style.left = 5;
  var obj = document.getElementById("mycar");
  var leftVal = parseInt(obj.style.left, 10);
  obj.style.left = (leftVal - 2) + "%";
  console.log("working;");
}
function right(){
  // document.getElementById('mycar').style.left = 5;
  var obj = document.getElementById("mycar");
  var leftVal = parseInt(obj.style.left, 10);
  obj.style.left = (leftVal + 2) + "%";
  console.log("working;");
}







function moveleft(){
  var obj = document.getElementById("mycar");
  var leftVal = parseInt(obj.style.left, 10);
  obj.style.left = (leftVal - 2) + "%";
  console.log("working;");
}
function movetop(){
  var obj = document.getElementById("mycar");
  var topVal = parseInt(obj.style.bottom, 10);
  obj.style.bottom = (topVal + 2) + "%";
  console.log("working;");
}
function movedown(){
  var obj = document.getElementById("mycar");
  var topVal = parseInt(obj.style.bottom, 10);
  obj.style.bottom = (topVal - 2) + "%";
  console.log("working;");
}

function moveOtherCars(){

}