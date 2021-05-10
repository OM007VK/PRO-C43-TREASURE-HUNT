var bg,bg2,form,system,code,security;
var score=0;
var img;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2= loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  if (score < 3){
    background(bg);
    clues();
    security.display();
    textSize(20);
    fill("white");
    text("Score: " + score, 450, 50);
    fill ("white")
    text(mouseX + "," + mouseY,10,20) 
  }
  // add code for changing the background to the treasure background
  if(score === 3) {
    clear()
    fill("black")
    textSize(50);
    background(bg2)
    text("TREASURE UNLOCKED",200, 200);
  }
  drawSprites()
}