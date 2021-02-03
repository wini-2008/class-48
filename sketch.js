var door,t1,t2;
var Door,thief,player,Box;
var gameState = "d";
var bg,bg3;
var box , fish,fish1;
var Start;
var ground;
var m , monster,diamond,d;
var gameover,go;
var win,w;

function preload(){
 bg= loadImage("images/background.png");
 bg2 = loadImage("images/backg2.png");
 bg3 = loadImage("images/backg3.png");
  door = loadImage("images/doorImage.png");
  t1 = loadImage("images/sprite_0.png","images/sprite_1.png");
  box = loadImage("images/box.png");
  start = loadImage("images/start.png");
  fish = loadImage("images/fish.png");
  m = loadImage("images/monster.png");
  d = loadImage("images/diamond.png");
  go = loadImage("images/gameOver.png");
  w = loadImage("images/youwin1.png")
}

function setup() {
  createCanvas(800,400);
  Door = createSprite(700, 250, 50, 50);
  Door.addImage(door);
 //player = createSprite(200,100,50,50);
  thief = createSprite(100,350,50,50);
  thief.addAnimation("thief1",t1);
  Box = createSprite(200,320,50,50);
  Box.addImage(box);
  Box.scale=0.09;
  //Start = createButton("Start");
  //Start.position(400,200,50,50);
  ground = createSprite(400,360,800,20);
  ground.visible = false;
  fish1 = createSprite(300,200,70,70);
  fish1.addImage(fish);
  monster = createSprite(300,250,50,50);
  monster.addImage(m);
  monster.scale=0.5;
  diamond = createSprite(700,250,20,20);
  diamond.addImage(d);
  diamond.scale=0.5;
  gameover = createSprite(400,200,20,20);
  gameover.addImage(go);
  win = createSprite(400,200,20,20);
  win.addImage(w);
}

function draw() {
  background(bg);  
  stage2();
  
  if(keyDown(RIGHT_ARROW)){
    thief.velocityX = 3;
  }
  if(keyDown(UP_ARROW)){
    thief.velocityY = -6;
} 
  if(keyDown(DOWN_ARROW)){
  thief.velocityY = 3;
}
if(gameState === "start"){
  Box.visible = false;
  diamond.visible = false;
  fish1.visible = false;
  monster.visible = false;
    win.visible = false;
    gameover.visible = false;
}
   thief.velocityY = thief.velocityY + 0.5;
   thief.collide(ground);

   if(thief.collide(Door)){
    gameState = "b";
  }
  
  if(gameState === "c"){
    background(bg3);
    monster.visible = false;
    win.visible = false;
    gameover.visible = false;
    Box.visible = false;
    diamond.visible = false;
    Door.x = 800;
    Door.y = 290;
 //   thief.y = 50;
    fish1.velocityX = 3;
    if(fish1.x > 800){
      fish1.x = 0;
    }
    if(thief.isTouching(fish1)){
      gameover.visible = true;
      fish1.velocityX = 0;
      thief.velocityX = 0;
    }   
  }

  if(gameState === "d"){
    background(bg);
    fish1.visible = false;
    Box.visible = false;
    Door.x = 800;
    monster.velocityX = 3;
    gameover.visible = false;
    win.visible = false;
    if(monster.x>700){
      monster.x = 0;
    }
    if(thief.isTouching(monster)){
      gameover.visible = true;
      monster.velocityX = 0;
      thief.velocityX = 0;
    }
    if(thief.isTouching(diamond)){
      win.visible = true;
      monster.velocityX = 0;
      thief.velocityX = 0;
      monster.visible = false;
    }

  }

  drawSprites();
}

function stage2(){

  if(gameState === "b"){
    background(bg2);
    fish1.visible = false;
    monster.visible = false;
    win.visible = false;
    gameover.visible = false;
    diamond.visible = false;
    //thief.x = 100;
   // thief.y = 200;
    Door.y = 270;
    Door.x = 550;
    if(thief.isTouching(Box)){
      gameover.visible = true;
      thief.velocityX = 0;
    }
    
    
    
    //thief.velocityY = 3;
  }
}