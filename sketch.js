var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloud_Image = loadImage("cloud.png")
  
  Obstacle1 = loadImage("obstacle1.png")
  Obstacle2 = loadImage("obstacle2.png")
  Obstacle3 = loadImage("obstacle3.png")
  Obstacle4 = loadImage("obstacle4.png")
  Obstacle5 = loadImage("obstacle5.png")
  Obstacle6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(100);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
   
  
  
  trex.collide(invisibleGround);
  
  Clouds();
  Obstacles();
  
  drawSprites();
}

function Clouds(){
 if(World.frameCount % 60 === 0){
   var cloud = createSprite(displayWidth, 50 , 20 , 20)
   cloud.addImage(cloud_Image)
   cloud.velocityX = -3
   cloud.y=Math.round(random(50,120)) 
   cloud.depth = trex.depth
   trex.depth = trex.depth + 1
 }
}
function Obstacles(){
 if(World.frameCount%60===0){
   var obstacle = createSprite(displayWidth,150,20,20)
   var rand = Math.round(random(1,6));
   switch(rand){
     case 1:obstacle.addImage(Obstacle1)
     break;
     case 2: obstacle.addImage(Obstacle2)
     break;
     case 3:obstacle.addImage(Obstacle3)
     break;
     case 4:obstacle.addImage(Obstacle4)
     break;
     case 5:obstacle.addImage(Obstacle5)
     break;
     case 6:obstacle.addImage(Obstacle6)
     break;  
   }
    obstacle.velocityX=-5;
    obstacle.scale=0.5;
 }
}
