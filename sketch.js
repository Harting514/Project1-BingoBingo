/***********************************************************************************
  Rooms of My Dream House
  by Yik Hung
------------------------------------------------------------------------------------
  This is Yik's house that people can visit by clicking arrow buttons to interactive among 6 rooms. 
  This project was inspired by a flash game that was very popular in China during my childhood. 
  I made this project based on the operation methods of this game (such as clicking on items to view). 
  This project is dedicated to the memory of my childhood.
------------------------------------------------------------------------------------
  I uses the functions such as preload(), setup(), draw(), image() and anothers to illustrate
  adobe XD's work to p5.js
***********************************************************************************/
var images = [];
var strings = [];
var midX;
var midY;
var startY;
var lineHeight = 50;
var drawFunction;
var gTextOffset = 20;


function preload() {
  images[0] = loadImage('assets/Bathroom.png');
  images[1] = loadImage('assets/Corridor.png');
  images[2] = loadImage('assets/Diningroom.png');
  images[3] = loadImage('assets/Office.png');
  images[4] = loadImage('assets/Kitchen.png');
  images[5] = loadImage('assets/Livingroom.png');
  images[6] = loadImage('assets/MainHall.png');
  images[7] = loadImage('assets/DiningRoomVase.png');
  images[8] = loadImage('assets/Art.png');
  images[9] = loadImage('assets/Church.png');
  images[10] = loadImage('assets/cookie.png');
  images[11] = loadImage('assets/cookieinfo.png');
  images[12] = loadImage('assets/dog1.png');
  images[13] = loadImage('assets/dog1info.png');
  images[14] = loadImage('assets/dog2.png');
  images[15] = loadImage('assets/dog2info.png');
  images[16] = loadImage('assets/dolphin.png');
  images[17] = loadImage('assets/Sushicat.png');
  images[18] = loadImage('assets/sushicatinfo.png');
  images[19] = loadImage('assets/Normalcat.png');
  images[20] = loadImage('assets/Normalcatinfo.png');
  images[21] = loadImage('assets/snoopy.png');
  images[22] = loadImage('assets/snoopy2.png');
  images[23] = loadImage('assets/snoopyinfo.png');
  images[24] = loadImage('assets/vase1.png');
  images[25] = loadImage('assets/vase2.png');
  images[26] = loadImage('assets/vase1info.png');
  images[27] = loadImage('assets/vase2info.png');
  images[28] = loadImage('assets/Yellowduck.png');
  images[29] = loadImage('assets/yellowduckinfo.png');
  images[30] = loadImage('assets/Pasta.png');
  images[31] = loadImage('assets/pastainfo.png');
  images[32] = loadImage('assets/Pic1.png');
  images[33] = loadImage('assets/Pic2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(24);
  fill('yellow');

  midX = width/2;
  midY = height/2;
  drawFunction = drawMainHall;
}

function draw() {
  drawFunction();
}

drawBathroom = function() {
   image(images[0], 0, 0, windowWidth, windowHeight);
   image(images[28], width*1/4 , height*2/5 ,200, 200);
   image(images[16], width*1/4 , height*1/5 ,150, 150);
   textSize(60);
   text("Bathroom", width/2, height/5);
}

drawCorridor = function() {
   image(images[1], 0, 0, windowWidth, windowHeight);
   image(images[21], width*1/11, height/2 , 250, 250);
   image(images[22], width*6/7, height*2/3, 250, 250);
   textSize(60);
   text("Corridor", width*1/3, height/5);
}

drawDiningroom = function() {
   image(images[2], 0, 0,windowWidth, windowHeight);
   image(images[7], width*6/7, height*4/5, 200, 200);
   image(images[17], width*4/7, height*3/4, 200, 200);
   image(images[19], width*3/4, height/5, 200, 200);
   textSize(60);
   text("Diningroom", width/2, height/5);
}

drawOffice = function() {
  image(images[3], 0, 0, windowWidth, windowHeight);
  image(images[24], width*1/5, height*1/7, 100, 100);
  image(images[25], width*1/2, height*1/2, 100, 100);
  textSize(60);
  text("Office", width/2, height/5);
}

drawKitchen = function() {
  image(images[4], 0, 0, windowWidth, windowHeight);
  image(images[30], width*4/5, height*1/2, 200, 200);
  image(images[30], width*6/7, height*2/3, 200, 200);
  image(images[10], width*1/5, height*3/4, 200, 200);
  textSize(60);
  text("Kitchen", width/2, height/5);
}

drawLivingroom = function() {
   image(images[5], 0, 0, windowWidth, windowHeight);
   image(images[12], width*1/6, height*3/5, 200, 200);
   image(images[14], width*3/4, height*3/4, 200, 200);
   textSize(60);
   text("Livingroom", width/2, height/5);
}

drawMainHall = function() {
   image(images[6], 0, 0, windowWidth, windowHeight);
   image(images[32], width*1/8, height*1/6, 300, 200);
   image(images[33], width*3/4, height*1/4, 300, 200);
   textSize(60);
   text("MainHall", width/2, height/5);
   loadArray();
}

drawArt = function() {
   image(images[8], 0, 0, windowWidth, windowHeight);
}

drawChurch = function() {
   image(images[9], 0, 0, windowWidth, windowHeight);
}

drawcookieinfo = function() {
   image(images[11], 0, 0, windowWidth, windowHeight);
}

drawdog1info = function() {
   image(images[13], 0, 0, windowWidth, windowHeight);
}

drawdog2info = function() {
   image(images[15], 0, 0, windowWidth, windowHeight);
}

drawsushicatinfo = function() {
   image(images[18], 0, 0, windowWidth, windowHeight);
}

drawnormalcatinfo = function() {
   image(images[20], 0, 0, windowWidth, windowHeight);
}

drawsnoopyinfo = function() {
   image(images[23], 0, 0, windowWidth, windowHeight);
}

drawvase1info = function() {
   image(images[26], 0, 0, windowWidth, windowHeight);
}

drawvase2info = function() {
   image(images[27], 0, 0, windowWidth, windowHeight);
}

drawyellowduckinfo = function() {
   image(images[29], 0, 0, windowWidth, windowHeight);
}

drawpastainfo = function() {
   image(images[31], 0, 0, windowWidth, windowHeight);
}


function loadArray() {
  strings[0] = "Welcome to my home !!!";
  strings[1] = "";
  strings[2] = "click the arrow buttons to view";
  strings[3] = "";
  strings[4] = "press M back to MainHall";
  strings[5] = "";
  strings[6] = "Hope you enjoy it !!!";
  strings[7] = "(Try to click the items you saw in each room (๑•̀ㅂ•́)و✧)";

  for(let i = 0 ; i < strings.length; i++) {
    text( strings[i], midX, midY + (i * lineHeight) )
  }
}


function mousePressed() {
//Art
  if (drawFunction === drawArt){
    if (mouseY >= 808 && mouseY <= 935) {
      if (mouseX >= 723 && mouseX <= 930) {
        drawFunction = drawMainHall;
      }
    }
  }


// Church
  if (drawFunction === drawChurch){
    if (mouseY >= 808 && mouseY <= 935) {
      if (mouseX >= 723 && mouseX <= 930) {
        drawFunction = drawMainHall;
      }
    }
  }


//YellowDuck
  if (drawFunction === drawyellowduckinfo){
    if (mouseY >= 818 && mouseY <= 944) {
      if (mouseX >= 759 && mouseX <= 961) {
        drawFunction = drawBathroom;
      }
    }
  }

//Snoopyinfo
  if (drawFunction === drawsnoopyinfo){
    if (mouseY >= 803 && mouseY <= 926) {
      if (mouseX >= 824 && mouseX <= 1025) {
        drawFunction = drawCorridor;
      }
    }
  }

//Dog1 info
  if (drawFunction === drawdog1info){
      if (mouseY >= 806 && mouseY <= 931) {
        if (mouseX >= 1130 && mouseX <= 1331) {
        drawFunction = drawLivingroom;
      }
    }
  }

//Dog2 info
  if (drawFunction === drawdog2info){
    if (mouseY >= 787 && mouseY <= 907) {
      if (mouseX >= 455 && mouseX <= 654) {
        drawFunction = drawLivingroom;
      }
    }
  }

//Sushicat info
  if (drawFunction === drawsushicatinfo){
    if (mouseY >= 810 && mouseY <= 932) {
      if (mouseX >= 714 && mouseX <= 911) {
        drawFunction = drawDiningroom;
      }
    }
  }

//Normalcat info
  if (drawFunction === drawnormalcatinfo){
    if (mouseY >= 810 && mouseY <= 932) {
      if (mouseX >= 714 && mouseX <= 911) {
        drawFunction = drawDiningroom;
      }
    }
  }

//Pastainfo
  if (drawFunction === drawpastainfo){
    if (mouseY >= 801 && mouseY <= 925) {
      if (mouseX >= 826 && mouseX <= 1027) {
        drawFunction = drawKitchen;
      }
    }
  }

//Cookieinfo
  if (drawFunction === drawcookieinfo){
    if (mouseY >= 801 && mouseY <= 925) {
      if (mouseX >= 826 && mouseX <= 1027) {
        drawFunction = drawKitchen;
      }
    }
  }

//Vase1 info
  if (drawFunction === drawvase1info){
    if (mouseY >= 790 && mouseY <= 915) {
      if (mouseX >= 685 && mouseX <= 886) {
        drawFunction = drawOffice;
      }
    }
  }


//Vase2 info
  if (drawFunction === drawvase2info){
    if (mouseY >= 798 && mouseY <= 919) {
      if (mouseX >= 816 && mouseX <= 1015) {
        drawFunction = drawOffice;
      }
    }
  }


// Bathroom
  if (drawFunction === drawBathroom){
    if (mouseY >= 433 && mouseY <= 538) {
      if (mouseX >= 538 && mouseX <= 626) {
        drawFunction = drawyellowduckinfo;
      }
    }

    if (mouseY >= 181 && mouseY <= 310) {
      if (mouseX >= 1764 && mouseX <= 1879) {
        drawFunction = drawOffice;
      }
    }
  }


// Corridor
  if (drawFunction === drawCorridor){
    if (mouseY >= 491 && mouseY <= 712 || mouseY >= 675 && mouseY <= 866) {
      if (mouseX >= 240 && mouseX <= 329 || mouseX >= 1721 && mouseX <= 1789) {
        drawFunction = drawsnoopyinfo;
      }
    }

    if (mouseY >= 110 && mouseY <= 260) {
      if (mouseX >= 948 && mouseX <= 1145) {
        drawFunction = drawKitchen;
      }
    }

    if (mouseY >= 844 && mouseY <= 961) {
      if (mouseX >= 965 && mouseX <= 1142) {
        drawFunction = drawDiningroom;
      }
    }

    if (mouseY >= 490 && mouseY <= 602) {
      if (mouseX >= 510 && mouseX <= 692) {
        drawFunction = drawMainHall;
      }
    }

    if (mouseY >= 303 && mouseY <= 664) {
      if (mouseX >= 1292 && mouseX <= 1607) {
        drawFunction = drawOffice;
      }
    }
  }


// Diningroom
  if (drawFunction === drawDiningroom){
    if (mouseY >= 220 && mouseY <= 363) {
      if (mouseX >= 1458 && mouseX <= 1628) {
        drawFunction = drawnormalcatinfo;
      }
    }

    if (mouseY >= 759 && mouseY <= 887){
      if (mouseX >= 1125 && mouseX <= 1268){
        drawFunction = drawsushicatinfo;
      }
    }

    if (mouseY >= 406 && mouseY <= 561){
      if (mouseX >= 853 && mouseX <= 1034){
        drawFunction = drawCorridor;
      }
    }
  }


// Office
  if (drawFunction === drawOffice){
    if (mouseY >= 146 && mouseY <= 229) {
      if (mouseX >= 391 && mouseX <= 476) {
        drawFunction = drawvase1info;
      }
    }

    if (mouseY >= 496 && mouseY <= 570){
      if (mouseX >= 978 && mouseX <= 1040){
        drawFunction = drawvase2info;
      }
    }

    if (mouseY >= 446 && mouseY <= 558){
      if (mouseX >= 1407 && mouseX <= 1568){
        drawFunction = drawCorridor;
      }
    }

    if (mouseY >= 499 && mouseY <= 615){
      if (mouseX >= 52 && mouseX <= 615){
        drawFunction = drawBathroom;
      }
    }
  }


// Kitchen
  if (drawFunction === drawKitchen){
    if (mouseY >= 764 && mouseY <= 893) {
      if (mouseX >= 423 && mouseX <= 561) {
        drawFunction = drawcookieinfo;
      }
    }

    if (mouseY >= 543 && mouseY <= 809){
      if (mouseX >= 1555 && mouseX <= 1828){
        drawFunction = drawpastainfo;
      }
    }

    if (mouseY >= 57 && mouseY <= 185){
      if (mouseX >= 375 && mouseX <= 556){
        drawFunction = drawCorridor;
      }
    }
  }


// Livingroom
  if (drawFunction === drawLivingroom){
    if (mouseY >= 599 && mouseY <= 757) {
      if (mouseX >= 377 && mouseX <= 477) {
        drawFunction = drawdog1info;
      }
    }

    if (mouseY >= 761 && mouseY <= 889){
      if (mouseX >= 1489 && mouseX <= 1593){
        drawFunction = drawdog2info;
      }
    }

    if (mouseY >= 296 && mouseY <= 464){
      if (mouseX >= 983 && mouseX <= 1179){
        drawFunction = drawMainHall;
      }
    }
  }


// MainHall
  if (drawFunction === drawMainHall){

    if (mouseY >= 241 && mouseY <= 440) {
      if (mouseX >= 1440 && mouseX <= 1738) {
        drawFunction = drawChurch;
      }
    }
    
    if (mouseY >= 162 && mouseY <= 356) {
      if (mouseX >= 239 && mouseX <= 537 ) {
        drawFunction = drawArt;
      }
    }

    if (mouseY >= 674 && mouseY <= 836){
      if (mouseX >= 44 && mouseX <= 253){
        drawFunction = drawLivingroom;
      }
    }

    if (mouseY >= 794 && mouseY <= 965){
      if (mouseX >= 1634 && mouseX <= 1888){
        drawFunction = drawCorridor;
      }
    }
  }
}


function keyTyped() {
  if(drawFunction != drawMainHall){
    if( key === 'm' ) {
      drawFunction = drawMainHall;
    }
  }
}