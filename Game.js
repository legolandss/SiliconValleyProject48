class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }



  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(200,200);
    
    car1.setCollider("rectangle", 0, 0, 80, 150, 0);
    car1.addImage("car1",car1_img);


    car2 = createSprite(900,200);

    car2.setCollider("rectangle", 0, 0, 80, 150, 0);
    car2.addImage("car2",car2_img);


    cars = [car1, car2];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    Player.getCarsAtEnd();
    
    if(allPlayers !== undefined && gameState === 1){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y;
//reset
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = displayWidth/2 - allPlayers[plr].posnx ;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);x
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

      
    if(keyIsDown(UP_ARROW) && player.index !== null){
   
      player.distance +=15
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=3
      player.update();
    }

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
       player.posnx +=10
      player.update();
    }

    if (keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.posnx -=10
      player.update();
    }

    if (car1.isTouching(car2) && player.index !== null){
      car1.collide(car2)
      player.update();
    }
    if (car2.isTouching(car1) && player.index !== null){
      car2.collide(car1)
      player.update();
    }

    if(obstaclesGroup.collide(car1)){
      x = x + 100 ;
 
      player.distance -=200
      player.update();
      
    }
    if(obstaclesGroup.collide(car2)){
      player.distance -=199
      player.update();
      
    }

    if(obstaclesAgGroup.collide(car1)){
      x = x + 100 ;
 
      player.distance -=500
      player.update();
      
    }
    if(obstaclesAgGroup.collide(car2)){
      player.distance -=499
      player.update();
      
    }

    if(objl.collide(car1)){
      x = x + 100 ;
player.distance = 0

      player.update();
      
    }
    if(objl.collide(car2)){
      player.distance = 0;
      player.update();
      
    }
    if (player.posnx > 700) {
      player.posnx = player.posnx-50;
    }
    if (player.posnx < -700) {
      player.posnx = player.posnx+50;
    }


    if(player.distance> 100){
      form.hide
      gameState = 2;
      player.rank +=1;
      Player.updateCarsAtEnd(player.rank)
      console.log(player.rank)
      player.update();
      game.update(2);
    }
   
    drawSprites();
  }



  end(){
    
    }
  }
// hide