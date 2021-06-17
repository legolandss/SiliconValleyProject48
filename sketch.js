
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var wall;
var backy2,backy3;
var obstaclesGroup ,obstaclesAgGroup, objl, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6 , obstacle
var form, player, game , Wall2;

var score = player.rank;
var cars, car1, car2 , ranker;

var track, car1_img, car2_img;

function preload(){
  track = loadImage("images/track.png");
  car1_img = loadImage("images/car3.png");
  car2_img = loadImage("images/car2.png");

  obstacle1 = loadImage("images/pcm2.jpeg");
  obstacle2 = loadImage("images/bluepcm.png");

  obstacle3 = loadImage("images/QWERT.jpg");
  obstacle4 = loadImage("images/MonsterIncV2.jpeg");
  
  obstacle5 = loadImage("images/YOb.jpeg");
  obstacle6 = loadImage("images/Gob.jpeg");
  
  ground = loadImage("images/ground.png");
  
  backgroundImage = loadImage("images/coolcar.png");
  backy2 = loadImage("images/winner.jpg");
  backy3 = loadImage("images/loserrr.jpeg");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  obstaclesGroup = createGroup();
  obstaclesAgGroup = createGroup();
  objl = createGroup();
  wall = createSprite(765,500,10,displayHeight*10);
  Wall2 = createSprite(displayWidth,80,displayWidth*2,10);


  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(gameState === 0){
    background(backgroundImage);

  } 
  if(playerCount === 2 && gameState !== 2){
    game.update(1);
  }
  if(gameState === 1){
    spawnObstacles();
    spawnObstaclesAg();
    spawnObstaclesl();
  

    clear();
    game.play();
  }
  if(gameState === 2){
    if(player.distance> 100){
      background(backy2);
      stroke(10);
      fill("red");
      
      
      text("Your score is :" + score,displayWidth/2 -20 , displayHeight/2 - 200)
    }
    console.log(score)  ;
    if(player.distance< 100){
      background(backy3);
  console.log(score)  ;
    text("Your score is :" + score,displayWidth/2 -20 , displayHeight/2 - 200)
      text("Your opponents score is : 4103",displayWidth/2 -40 , displayHeight/2 - 300)}
    
    
    game.end();
    player.update();
  }
  console.log(gameState);
}
function spawnObstacles(){
  if (frameCount % 30 === 0){
     obstacle = createSprite(0,200,200,300);
    obstacle.x = Math.round(random(displayWidth/2-750,displayWidth/2+750));
  
    obstacle.velocityY = +5;
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      default: break;
    }
   
    
  
      obstacle.scale = 0.25;
     obstacle.lifetime = 150;
    
      obstaclesGroup.add(obstacle);
  }}
 
 
  function spawnObstaclesAg(){
    if (frameCount % 17 === 0){
      var obstaclesAg = createSprite(0,200,200,300);
      obstaclesAg.y = Math.round(random(-2000,-100));
    
      obstaclesAg.velocityX = +10;
      
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: obstaclesAg.addImage(obstacle3);
                break;
        case 2: obstaclesAg.addImage(obstacle4);
                break;
        default: break;
      }
       obstaclesAg.scale = 0.4;
       obstaclesAg.lifetime = 200;
      
        obstaclesAgGroup.add(obstaclesAg);
    }}

    function spawnObstaclesl(){
      if (frameCount % 12 === 0){
         obstaclel = createSprite(0,-3000,200,300);
        obstaclel.x = Math.round(random(displayWidth/2-850,displayWidth/2+850));
        
        var rand = Math.round(random(1,2));
        switch(rand) {
          case 1: obstaclel.addImage(obstacle5);
                  break;
          case 2: obstaclel.addImage(obstacle6);
                  break;
          default: break;
        }
   
     
        obstaclel.scale = 0.2;
        obstaclel.lifetime = 30;
       
         objl.add(obstaclel);
     }}
  
  
