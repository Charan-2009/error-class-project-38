class Game {
  constructor(){}
  
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(10);
    text("The Game has Started", 200,200);
    Player.getplayerInfo();

    if(allPlayers !== undefined){ 
      var displayPosition = 130
      for(var i in allPlayers){
        if(i === "player"+player.Index){
          fill("red")
        }
         else{
           fill("blue")
         }
         displayPosition += 20
         textSize(12)
         text(allPlayer[i].name+":"+allPlayers[i].distance, 120, displayPosition)
      }
    }

      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 50
        player.update();
      }

  }

  

}

