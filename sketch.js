var rabbit,carrot,wolf;
var rabbit_i,carrot_i,wolf_i;
var obstacle,obstacle2;
var obstacle_i,obstacle2_i;
var bg,bg_i;
var ground;
var carrotsGroup,wolfsGroup;
var score=0;
var block,blocksGroup,block_i;
var t=0;
var lives1,lives2,lives_i;
var PLAY=1;
var END=0;
var gameOver,gameOver_i;
var chocolates,chocolates_i,chocolatesGroup;
var ret,re_i,retsGroup;


gameState=PLAY;




function preload(){
  
  rabbit_i=loadImage("bunnyhop.gif");
  
  bg_i=loadImage("background.jpg");
  
  carrot_i=loadImage("carrot.png");
  
  block_i=loadImage("blocks.png");
  
  wolf_i=loadImage("wolf.png");
  
  lives_i=loadImage("88083--free-download-image.png");
  
  gameOver_i=loadImage("FBsquare1.png");
  
  chocolates_i=loadImage("13-139324_food-clipart-chocolate-sweets-and-chocolate-cartoon-png.png");
  
  re_i=loadImage("75c72c8559c40404a95fa6305e47c4c1.png");
  
  
  

}

function setup() {
  createCanvas(450,450);
  
  
   ground=createSprite(250,400,900,20);
  
  bg=createSprite(200,200);
  bg.addImage("fixed",bg_i);
  bg.scale=3;
  
  rabbit=createSprite(50,400);
  rabbit.addImage("moving",rabbit_i);
  rabbit.scale=0.2;
  
  
  
  
  lives1=createSprite(225,100);
  lives1.addImage("fixed",lives_i);
  lives1.scale=0.07;
  
  lives2=createSprite(275,100);
  lives2.addImage("fixed",lives_i);
  lives2.scale=0.07;
  
  gameOver=createSprite(225,250);
  gameOver.addImage(gameOver_i);
  gameOver.scale=0.3;
  gameOver.visible=false;
  
  
  
  
 
  
 blocksGroup= new Group();
 carrotsGroup= new Group();
  wolfsGroup=new Group();
  chocolatesGroup=new Group();
  retsGroup=new Group();
  
  
}

function draw() {
 background("lightgreen")
  
  if(gameState===PLAY)
    {
      
    
  
  bg.velocityX = -3 
       if (bg.x < 0)
       {
      bg.x = bg.width/2;
       }
  
  
  
  if(keyDown("space")&& rabbit.y >= 100 &&rabbit.collide(ground))
  {
        rabbit.velocityY = -12;
  }
  
  rabbit.collide(ground);
  
  rabbit.velocityY = rabbit.velocityY + 0.5;
  
  if(carrotsGroup.isTouching(rabbit))
  {
    score=score+1;
    carrotsGroup.destroyEach();
  }
      
      if(chocolatesGroup.isTouching(rabbit))
  {
    score=score-1;
    chocolatesGroup.destroyEach();
  }
  
     if(retsGroup.isTouching(rabbit))
  {
    rabbit.scale=0.3;
    retsGroup.destroyEach();
  } 
      
  if(blocksGroup.isTouching(rabbit))
  {
    rabbit.velocityY=0;
  }
  
   switch(score)
  {
      case 5: rabbit.scale=0.22;
               break;
      case 10: rabbit.scale=0.24;
               break;
      case 15: rabbit.scale=0.26;
               break;
      case 20: rabbit.scale=0.28;
               break;
      case 25: rabbit.scale=0.30;
               break;
               
               default: break;
  }
  
  if(wolfsGroup.isTouching(rabbit))
    {
      lives2.visible=false;
      wolfsGroup.destroyEach();
      t=t+1
    }
      
      if (frameCount%700===0)
      {
        rabbit.scale=0.2
      }
      
      if(t>1)
      {
         gameState=END;
        
        
       
      }
  
  
    }
  
  if(gameState===END)
  {
    gameOver.visible=true;
    
    
    blocksGroup.destroyEach();
    carrotsGroup.destroyEach();
    wolfsGroup.destroyEach();
    chocolatesGroup.destroyEach();
    retsGroup.destroyEach();
    
    ground.visible=false;
    rabbit.visible=false;
    bg.visible=false;
    lives1.visible=false;
    
 
  }
  
  re();
  chocolates_f();
  wolfs();
  blocks();
  carrots();
  
  drawSprites();
  
  textSize(30);
  fill("black");
  text("Score: "+score,225,50);
      
    }






function carrots(){
  


if (frameCount % 100 === 0) {
    carrot= createSprite(600,120,40,10);
    carrot.y = Math.round(random(200,300));
    carrot.addImage(carrot_i);
    carrot.scale = 0.02;
    carrot.velocityX = -4;
    
     
    carrot.lifetime = 200;
    
    
    
    
   carrotsGroup.add(carrot);
  }
}

function blocks(){
  


if (frameCount % 200 === 0) {
    block= createSprite(600,120,40,10);
    block.y = Math.round(random(300,350));
    block.addImage(block_i)
    block.scale = 0.06;
    block.velocityX = -3;
  
 
    
     
    block.lifetime = 250;
    
    
      
    
   blocksGroup.add(block);
  }
}

function wolfs(){
  


if (frameCount % 100 === 0) {
    wolf = createSprite(650,360,40,10);
    wolf.addImage(wolf_i);
    wolf.scale = 0.1;
    wolf.velocityX = -6;
    
    
    wolf.lifetime = 200;
    
    
    
    
    wolfsGroup.add(wolf);
  }
}

function chocolates_f(){
  


if (frameCount % 150 === 0) {
    chocolates= createSprite(600,120,40,10);
    chocolates.y = Math.round(random(200,300));
    chocolates.addImage(chocolates_i);
    chocolates.scale = 0.06;
    chocolates.velocityX = -4;
    
     
    chocolates.lifetime = 200;
    
    
    
    
   chocolatesGroup.add(chocolates);
  }
}

function re(){
  
if (frameCount % 400 === 0) {
    ret= createSprite(600,120,40,10);
    ret.y = Math.round(random(200,300));
    ret.addImage(re_i);
    ret.scale = 0.06;
    ret.velocityX = -4;
    
     
    ret.lifetime = 200;
    
    
    
    
   retsGroup.add(ret);
  }
}
