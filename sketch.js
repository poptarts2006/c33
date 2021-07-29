// const Engine = Matter.Engine;
// const World= Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

var snow = [];
var gravity;
var background,backgroundImg;
var redBird,redBirdAnimation;
var penguin,penguinAnimation;

function preload(){

  backgroundImg = loadImage("snow3.jpg");
  redBirdAnimation = loadAnimation("rb.png","rb1.png","rb2.png","rb3.png","rb4.png","rb5.png");
  penguinAnimation = loadAnimation("cb1.png","cb2.png","cb3.png","cb4.png")

}



function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0,0.2)
  //createSprite(400, 200, 50, 50);
 // ground = new Ground(width/2,height,width,20);

    redBird = createSprite(-200,180,30,25);
    redBird.addAnimation("flying",redBirdAnimation);
    redBird.velocityX = 1;
    redBird.scale = 0.2;
    
    penguin = createSprite(100,450,20,30);
    penguin.addAnimation("runing",penguinAnimation);
    penguin.velocityX = 0.8;
    penguin.scale = 0.3;



//Engine.run(Engine)
}

function draw() {
  background(backgroundImg);
  
  snow.push(new Snowflake());
  //ground.display();

  
  // if (ground.x < 0){
  //   ground.x = ground.width/2;
  // }

  for (flake of snow) {
    flake.update();
    flake.render();

  }

 
    drawSprites();
}
 
