/***********************************************************************************
  Project 1 (BingoBingo!)
  by Yik Hung
------------------------------------------------------------------------------------
  This game is mainly for children aged 6-10 to learn. There are no special requirements for the physical site, 
  only a computer, and network. It can be used at home, in the library, or the classroom. I search for some topics that children like, 
  let the children choose the topic to learn knowledge. After choosing the question, kids can either click the "I know the answer!" or "I don't know the answer" button. 
  Then the web page will show the answer" to the kids. Then go back to the main table and mark the previous question (which already chose) down. 
  If kids finished all the questions, they can reset the main table and play it again. 
------------------------------------------------------------------------------------
  I uses the functions such as preload(), setup(), draw(), image() and anothers to illustrate
  adobe XD's work to p5.js
***********************************************************************************/

var images = [];
var strings = [];
var drawFunction;
var ButtonSize = 200;
var Score = 0;

var a200 = true;
var b200 = true;
var c200 = true;
var a400 = true;
var b400 = true;
var c400 = true;
var a600 = true;
var b600 = true;
var c600 = true;

function preload() {

  images[31] = loadImage('assets/StartPage.png');
  images[32] = loadImage('assets/Tutorial1.png');
  images[33] = loadImage('assets/Tutorial2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(24);

  images[0] = loadImage('assets/a.png');
  images[1] = loadImage('assets/b.png');
  images[2] = loadImage('assets/c.png');
  images[3] = loadImage('assets/200(1).png');
  images[4] = loadImage('assets/200(2).png');
  images[5] = loadImage('assets/200(3).png');
  images[6] = loadImage('assets/400(1).png');
  images[7] = loadImage('assets/400(2).png');
  images[8] = loadImage('assets/400(3).png');
  images[9] = loadImage('assets/600(1).png');
  images[10] = loadImage('assets/600(2).png');
  images[11] = loadImage('assets/600(3).png');
  images[12] = loadImage('assets/Background.png');
  images[13] = loadImage('assets/A200Question.png');
  images[14] = loadImage('assets/A200Answer.png');
  images[15] = loadImage('assets/B200Question.png');
  images[16] = loadImage('assets/B200Answer.png');
  images[17] = loadImage('assets/C200Question.png');
  images[18] = loadImage('assets/C200Answer.png');
  images[19] = loadImage('assets/A400Question.png');
  images[20] = loadImage('assets/A400Answer.png');
  images[21] = loadImage('assets/B400Question.png');
  images[22] = loadImage('assets/B400Answer.png');
  images[23] = loadImage('assets/C400Question.png');
  images[24] = loadImage('assets/C400Answer.png');
  images[25] = loadImage('assets/A600Question.png');
  images[26] = loadImage('assets/A600Answer.png');
  images[27] = loadImage('assets/B600Question.png');
  images[28] = loadImage('assets/B600Answer.png');
  images[29] = loadImage('assets/C600Question.png');
  images[30] = loadImage('assets/C600Answer.png');

  drawFunction = drawStartPage;

}

function draw() {
  drawFunction();
  fill(255,0,0);
}


drawMainPage = function() {
  image(images[12], 0, 0, windowWidth, windowHeight);
  image(images[0], width*1/4-100, height*1/5,ButtonSize, ButtonSize-100);
  image(images[1], width*2/4-100, height*1/5, ButtonSize, ButtonSize-100);
  image(images[2], width*3/4-100, height*1/5, ButtonSize, ButtonSize-100);
  if(a200 == true){
    image(images[3], width*1/4-100, height*2/5, ButtonSize, ButtonSize-100);
  }

  if(b200 == true){
    image(images[4], width*2/4-100, height*2/5, ButtonSize, ButtonSize-100);
  }

  if(c200 == true){
    image(images[5], width*3/4-100, height*2/5, ButtonSize, ButtonSize-100);
  }

  if(a400 == true){
    image(images[6], width*1/4-100, height*3/5, ButtonSize, ButtonSize-100);
  }

  if(b400 == true){
    image(images[7], width*2/4-100, height*3/5, ButtonSize, ButtonSize-100);
  }

  if(c400 == true){
    image(images[8], width*3/4-100, height*3/5, ButtonSize, ButtonSize-100);
  }

  if(a600 == true){
    image(images[9], width*1/4-100, height*4/5, ButtonSize, ButtonSize-100); 
  }

  if(b600 == true){
    image(images[10], width*2/4-100, height*4/5, ButtonSize, ButtonSize-100);
  }

  if(c600 == true){
    image(images[11], width*3/4-100, height*4/5, ButtonSize, ButtonSize-100);
  }

  textSize(50);
  text("Here Is Your Total Scores: " + Score, windowWidth/2, windowHeight*20/21);
}

function keyTyped(){

//Back to StartPage
  if (drawFunction != drawStartPage){
    if (key === 'i'){
      drawFunction = drawStartPage;
    }
  }

  if (drawFunction === drawMainPage){
    if (key === 'r'){
      a200 = true;
      b200 = true;
      c200 = true;
      a400 = true;
      b400 = true;
      c400 = true;
      a600 = true;
      b600 = true;
      c600 = true;
      Score = 0;
    }
  }

  if (drawFunction === drawA200answer ||
      drawFunction === drawB200answer ||
      drawFunction === drawC200answer ||
      drawFunction === drawA400answer ||
      drawFunction === drawB400answer ||
      drawFunction === drawC400answer ||
      drawFunction === drawA600answer ||
      drawFunction === drawB600answer ||
      drawFunction === drawC600answer){
    if (key === 'b'){
      drawFunction = drawMainPage;
    }
  }
}

drawStartPage = function(){
  image(images[31], 0, 0 , windowWidth, windowHeight);
}

drawTutorial1Page = function(){
  image(images[32], 0, 0 , windowWidth, windowHeight);
}

drawTutorial2Page = function(){
  image(images[33], 0, 0 , windowWidth, windowHeight);
}

function mousePressed(){

// Start Game Button
  if (drawFunction === drawStartPage){
    if(mouseX >= 0 && mouseX <= windowWidth){
      if (mouseY >= 0 && mouseY <= windowHeight) {
        drawFunction = drawTutorial1Page;
      }
    }
  }
  else if (drawFunction === drawTutorial1Page){
    if(mouseX >= 0 && mouseX <= windowWidth){
      if (mouseY >= 0 && mouseY <= windowHeight) {
        drawFunction = drawTutorial2Page;
      }
    }
  }
  else if (drawFunction === drawTutorial2Page){
    if(mouseX >= 0 && mouseX <= windowWidth){
      if (mouseY >= 0 && mouseY <= windowHeight) {
        drawFunction = drawMainPage;
      }
    }
  }

// All Question Buttons
  else if (drawFunction === drawMainPage){
    // a200
    if (a200 == true){
      if(mouseX >= width*1/4-100 && mouseX <= width*1/4-100+ButtonSize){
        if (mouseY >= height*2/5 && mouseY <= height*2/5+ButtonSize-100) {
          a200 = false;
          drawFunction = drawA200question;
        }
      }
    }
    // b200
    if (b200 == true){
      if(mouseX >= width*2/4-100 && mouseX <= width*2/4-100+ButtonSize){
        if (mouseY >= height*2/5 && mouseY <= height*2/5+ButtonSize-100) {
          b200 = false;
          drawFunction = drawB200question;
        }
      }
    }
    // c200
    if (c200 == true){
      if(mouseX >= width*3/4-100 && mouseX <= width*3/4-100+ButtonSize){
        if (mouseY >= height*2/5 && mouseY <= height*2/5+ButtonSize-100) {
          c200 = false;
          drawFunction = drawC200question;
        }
      }
    }
    // a400
    if (a400 == true){
      if(mouseX >= width*1/4-100 && mouseX <= width*1/4-100+ButtonSize){
        if (mouseY >= height*3/5 && mouseY <= height*3/5+ButtonSize-100) {
          a400 = false;
          drawFunction = drawA400question;
        }
      }
    }
    // b400
    if (b400 == true){
      if(mouseX >= width*2/4-100 && mouseX <= width*2/4-100+ButtonSize){
        if (mouseY >= height*3/5 && mouseY <= height*3/5+ButtonSize-100) {
          b400 = false;
          drawFunction = drawB400question;
        }
      }
    }
    // c400
    if(c400 == true){
      if(mouseX >= width*3/4-100 && mouseX <= width*3/4-100+ButtonSize){
        if (mouseY >= height*3/5 && mouseY <= height*3/5+ButtonSize-100) {
          c400 = false;
          drawFunction = drawC400question;
        }
      }
    }
    // a600
    if (a600 == true){
      if(mouseX >= width*1/4-100 && mouseX <= width*1/4-100 + ButtonSize){
        if (mouseY >= height*4/5 && mouseY <= height*4/5 + ButtonSize-100) {
          a600 = false;
          drawFunction = drawA600question;
        }
      }
    }
    // b600
    if (b600 == true){
      if(mouseX >= width*2/4-100 && mouseX <= width*2/4-100 + ButtonSize){
        if (mouseY >= height*4/5 && mouseY <= height*4/5 + ButtonSize-100) {
          b600 = false;
          drawFunction = drawB600question;
        }
      }
    }
    // c600
    if (c600 == true){
      if(mouseX >= width*3/4-100 && mouseX <= width*3/4-100 + ButtonSize){
        if (mouseY >= height*4/5 && mouseY <= height*4/5 + ButtonSize-100) {
          c600 = false;
          drawFunction = drawC600question;
        }
      }
    }
  }




// A200 Answer Buttoon 
  else if (drawFunction === drawA200question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawA200answer;
        Score = Score + 200;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawA200answer;
      }
    }
  }

// B200 Answer Buttoon 
  else if (drawFunction === drawB200question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawB200answer;
        Score = Score + 200;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawB200answer;
      }
    }
  }

// C200 Answer Buttoon 
  else if (drawFunction === drawC200question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawC200answer;
        Score = Score + 200;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawC200answer;
      }
    }
  }

// A400 Answer Buttoon 
  else if (drawFunction === drawA400question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawA400answer;
        Score = Score + 400;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawA400answer;
      }
    }
  }

// B400 Answer Buttoon 
  else if (drawFunction === drawB400question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawB400answer;
        Score = Score + 400;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawB400answer;
      }
    }
  }

// C400 Answer Buttoon 
  else if (drawFunction === drawC400question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawC400answer;
        Score = Score + 400;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawC400answer;
      }
    }
  }

// A600 Answer Buttoon 
  else if (drawFunction === drawA600question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawA600answer;
        Score = Score + 600;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawA600answer;
      }
    }
  }

// B600 Answer Buttoon 
  else if (drawFunction === drawB600question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawB600answer;
        Score = Score + 600;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawB600answer;
      }
    }
  }

// C600 Answer Buttoon 
  else if (drawFunction === drawC600question){
    // Knew
    if(mouseX >= windowWidth*1/5+10 && mouseX <= windowWidth*3/7-30){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {    
        drawFunction = drawC600answer;
        Score = Score + 600;
      }
    }
    // Dont know
    else if(mouseX >= windowWidth*4/7+40 && mouseX <= windowWidth*4/5+10){
      if (mouseY >= windowHeight*4/5 && mouseY <= windowHeight*17/18) {
        drawFunction = drawC600answer;
      }
    }
  }
}


drawA200question = function(){
  image(images[13], 0, 0, windowWidth, windowHeight);
}

drawA200answer = function(){
  image(images[14], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4);
}

drawB200question = function(){
  image(images[15], 0, 0, windowWidth, windowHeight);
}

drawB200answer = function(){
  image(images[16], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4);
}

drawC200question = function(){
  image(images[17], 0, 0, windowWidth, windowHeight);
}

drawC200answer = function(){
  image(images[18], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4); 
}

drawA400question = function(){
  image(images[19], 0, 0, windowWidth, windowHeight);
}

drawA400answer = function(){
  image(images[20], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4);
}

drawB400question = function(){
  image(images[21], 0, 0, windowWidth, windowHeight);
}

drawB400answer = function(){
  image(images[22], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4);
}

drawC400question = function(){
  image(images[23], 0, 0, windowWidth, windowHeight);
}

drawC400answer = function(){
  image(images[24], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4); 
}

drawA600question = function(){
  image(images[25], 0, 0, windowWidth, windowHeight);
}

drawA600answer = function(){
  image(images[26], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4);
}

drawB600question = function(){
  image(images[27], 0, 0, windowWidth, windowHeight);
}

drawB600answer = function(){
  image(images[28], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4);
}

drawC600question = function(){
  image(images[29], 0, 0, windowWidth, windowHeight);
}

drawC600answer = function(){
  image(images[30], 0, 0, windowWidth, windowHeight);
  fill('Black');
  text("Press B back to main", windowWidth/2, windowHeight*3/4); 
}