var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudGroup,cloudImage;
var obstacleGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage=loadImage("cloud.png");
  obsatcle1=loadImage("obstacle1.png");
  obsatcle2=loadImage("obstacle2.png")
  obsatcle3=loadImage("obstacle3.png");
  obsatcle4=loadImage("obstacle4.png");
  obsatcle5=loadImage("obstacle5.png");
  obsatcle6=loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  cloudsGroup=new Group();
  obstacleGroup=new Group();
  
}

function draw() {
  background(220);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnobstacles();
  //spawnclouds();
  drawSprites();
}
function spawnobstacles(){
  if (World.frameCount%60===0){
  var obstacle=createSprite(600,165,10,40);
    obstacle.velocityX=-4
  var Rand=Math.round(random(1,6));
switch(Rand){
  case 1:obstacle.addImage(obsatcle1);
    break;
    case 2:obstacle.addImage(obsatcle2);
    break;
    case 3:obstacle.addImage(obsatcle3);
    break;
    case 4:obstacle.addImage(obsatcle4);
    break;
    case 5:obstacle.addImage(obsatcle5);
    break;
    case 6:obstacle.addImage(obsatcle6);
    break;
    default:break;
}
   obstacle.scale=0.5
    obstacle.lifetime=140
  }
}
    