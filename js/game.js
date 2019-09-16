
var moveLeft = true;
var moveRight = true;
var moveDown = true;
var moveUp = true;
var score = 0;





// Game start loop function
function start(){
  document.getElementById("title").innerHTML="Welcome to 'Drive High Way'";
  document.getElementById("btn").innerHTML="Game Start";
  document.getElementById("score").innerHTML="SCORE: " + score;

 
  moveOtherCars();
  moveLine();
  collision();
  
}



document.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
      return;
  }

  var key1 = event.key;
  var key2 = event.keyCode;

  if (key1 === 'a' || key1 === 'A' || key2 == '37') {
    if(moveLeft == true){
      moveleft();
    }
      
  }else if(key1 === 'd' || key1 === 'D' || key2 == '39'){
    if(moveRight == true){
      moveright();
    }
    
  }else if(key1 === 'w' || key1 === 'W' | key2 == '38'){
    if(moveUp == true){
      moveup();
    }
    
  }else if(key1 === 's' || key1 ==='S'| key2 == '40'){
    if(moveDown == true){
      movedown();
    }
    
  }
});




  
   



function moveright(){
  // document.getElementById('mycar').style.left = 5;
  var obj = document.getElementById("mycar");
  var leftVal = parseInt(obj.style.left, 10);
  obj.style.left = (leftVal + 5) + "%";

  var gamearea = document.getElementById("gamearea");
  var gameareawidth = window.getComputedStyle(gamearea,null).getPropertyValue("width");
  
  console.log(gameareawidth);
  

  var mycarX = document.getElementById("mycar");
  var mycarLeft = window.getComputedStyle(mycarX,null).getPropertyValue("left");
  console.log(mycarLeft);
  
  // detect the wall
  if(mycarLeft != 0+ "px"){
    moveLeft = true;
  }

  if(mycarLeft == 297.5 + "px"){
    moveRight = false;
  }
  // 266.688
}


function moveleft(){
  var obj = document.getElementById("mycar");
  var leftVal = parseInt(obj.style.left, 10);
  obj.style.left = (leftVal - 5) + "%";

  var gamearea = document.getElementById("gamearea");
  var gameareawidth = window.getComputedStyle(gamearea,null).getPropertyValue("width");

  

  var mycarX = document.getElementById("mycar");
  var mycarLeft = window.getComputedStyle(mycarX,null).getPropertyValue("left");

  
  // detect the wall
  if(mycarLeft < 265 + "px"){
    moveRight = true;
  }

  if(mycarLeft == 0+"px"){
    moveLeft = false;
  }

  

}


function moveup(){
  var obj = document.getElementById("mycar");
  var topVal = parseInt(obj.style.bottom, 10);
  obj.style.bottom = (topVal + 5) + "%";

  var gamearea = document.getElementById("gamearea");
  var gameareawidth = window.getComputedStyle(gamearea,null).getPropertyValue("height");

  
  var mycarX = document.getElementById("mycar");
  var mycarTop = window.getComputedStyle(mycarX,null).getPropertyValue("bottom");

  
  // detect wall
  if(mycarTop == 430 + "px"){
    moveUp = false;
  }

  if(mycarTop != 430 + "px"){
    moveDown = true;
  }
}
function movedown(){
  var obj = document.getElementById("mycar");
  var topVal = parseInt(obj.style.bottom, 10);
  obj.style.bottom = (topVal - 5) + "%";

  
  
  // get css property
  var gamearea = document.getElementById("gamearea");
  var gameareawidth = window.getComputedStyle(gamearea,null).getPropertyValue("height");

 

  var mycarX = document.getElementById("mycar");
  var mycarTop = window.getComputedStyle(mycarX,null).getPropertyValue("top");

  
  // detect wall
  if(mycarTop == 435+ "px"){
    moveDown = false;
  }

  if(mycarTop != 10 + "px"){
    moveUp = true;
  }
}



function moveOtherCars(){
  // change css property of other cars
  var obj1 = document.getElementById("car-1");
  var topVal = parseInt(obj1.style.top, 10);
  obj1.style.top = (topVal + 4) + "px";
  
  var obj2 = document.getElementById("car-2");
  var topVal = parseInt(obj2.style.top, 10);
  obj2.style.top = (topVal + 4) + "px";
  
  var obj3 = document.getElementById("car-3");
  var topVal = parseInt(obj3.style.top, 10);
  obj3.style.top = (topVal + 4) + "px";


// get the property from css to change other cars position when they go to outside of the gamearea
  var car1 = document.getElementById("car-1");
  var carHeight = window.getComputedStyle(car1,null).getPropertyValue("top");
  var car2 = document.getElementById("car-2");
  var carHeight2 = window.getComputedStyle(car2,null).getPropertyValue("top");
  var car3 = document.getElementById("car-3");
  var carHeight3 = window.getComputedStyle(car3,null).getPropertyValue("top");


  var gamearea = document.getElementById("gamearea");
  var gameareaHeight = window.getComputedStyle(gamearea,null).getPropertyValue("height");
  //console.log(gameareaHeight);

  
  //console.log(carHeight);

  if(carHeight == gameareaHeight){
    // console.log("working");
    var obj1 = document.getElementById("car-1");
    var topVal = parseInt(obj1.style.top, 10);
    obj1.style.top = -200 + "px";
  }

  if(carHeight2 == gameareaHeight){
    var obj2 = document.getElementById("car-2");
    var topVal = parseInt(obj2.style.top, 10);
    obj2.style.top = -400 + "px";
  }

  if(carHeight3 == gameareaHeight){
    var obj3 = document.getElementById("car-3");
    var topVal = parseInt(obj3.style.top, 10);
    obj3.style.top = -300 + "px";
  }
  
  
}



function moveLine(){
  var line1 = document.getElementById("line1");
  var topVal = parseInt(line1.style.top, 10);
  line1.style.top = (topVal + 4) + "px";
  
  var line2 = document.getElementById("line2");
  var topVal = parseInt(line2.style.top, 10);
  line2.style.top = (topVal + 4) + "px";
 
  var line3 = document.getElementById("line3");
  var topVal = parseInt(line3.style.top, 10);
  line3.style.top = (topVal + 4) + "px";


  
  // repeat line
  var linerepeat3 = document.getElementById("line3");
  var lineHeight3 = window.getComputedStyle(linerepeat3,null).getPropertyValue("top");

  
  
  var linerepeat2 = document.getElementById("line2");
  var lineHeight2 = window.getComputedStyle(linerepeat2,null).getPropertyValue("top");

  
  
  var linerepeat1 = document.getElementById("line1");
  var lineHeight1 = window.getComputedStyle(linerepeat1,null).getPropertyValue("top");

  
  // change css property of lines to repeat them
  if(lineHeight3 == 550 + "px"){
    var line3 = document.getElementById("line3");
    var topVal = parseInt(line3.style.top, 10);
    line3.style.top = -450 + "px";
    
    //console.log(gameareaHeight)
    
  }
  if(lineHeight2 == 550 + "px"){
    var line2 = document.getElementById("line2");
    var topVal = parseInt(line2.style.top, 10);
    line2.style.top = -450 + "px";
  
    //console.log(gameareaHeight)
    
  }
  if(lineHeight1 == 550 + "px"){
    var line1 = document.getElementById("line1");
    var topVal = parseInt(line1.style.top, 10);
    line1.style.top = -450 + "px";
   
    //console.log(gameareaHeight)
   
  }

}

function collision(){
  // get css property
    var obj1 = document.getElementById("car-1");
    var otherCars1Left = window.getComputedStyle(obj1,null).getPropertyValue("left");
    var otherCars1Top = window.getComputedStyle(obj1,null).getPropertyValue("top");

  // get my car css property
  var mycarX = document.getElementById("mycar");
  var mycarTop = window.getComputedStyle(mycarX,null).getPropertyValue("top");
  var mycarLeft = window.getComputedStyle(mycarX,null).getPropertyValue("left");
    
  var mycarNumtop = parseInt(mycarTop);
  var othercarsNumtop = parseInt(otherCars1Top);
  var topgap = mycarNumtop - othercarsNumtop;

  var mycarNumLeft = parseInt(mycarLeft);
  var otherCarsNumLeft = parseInt(otherCars1Left);
  var gapLeft1 = mycarNumLeft - otherCarsNumLeft;
  var gapLeft2 = otherCarsNumLeft - mycarNumLeft;
   
    console.log(mycarNumLeft);
    console.log(otherCarsNumLeft);


    // console.log(mycarLeft);

    if(topgap < 40 && ((gapLeft2 < 40 && 0 <= gapLeft2)||(gapLeft1 > -50 && 0 >= gapLeft1))){
      console.log("Clash");
    }

   
}

function addScore(){
  score++;
}
