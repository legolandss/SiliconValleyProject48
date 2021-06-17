class Form {

  constructor() {
    this.input = createInput("");
    this.button = createButton('Go');
    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2');
    
    this.title = createElement('h1');
  }
  hide(){
    this.greeting.hide();
    
    this.greeting2.hide();
    this.button.hide();
    this.input.hide();
    
    this.title.hide();
  }

  display(){
    this.title.html("RacersJunior1!");
    this.title.position(displayWidth/2 - 50, 0);

 

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2-40);
    
    this.greeting2.html("Your Cool Name  *>")
    this.greeting2.position(displayWidth/2 - 40 , displayHeight/2 - 300);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
      this.greeting2.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello Racer  " + player.name + "!!"  )
      
      this.greeting.position(displayWidth/2 -40 , displayHeight/2 - 300);
    });
  }
}
