class Game{
    constructor(){

    }
    getGameState(){
        database.ref("gameState").on("value",(data)=>{gameState=data.val()});
    }
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player();
           var playerCountref= await database.ref("playerCount").once("value");
           if(playerCountref.exists()){
               playerCount=playerCountref.val();
               player.getCount();
           }
           form=new Form();
           form.display();
        }
        player1=createSprite(100,200);
        player2=createSprite(300,200);
        player3=createSprite(500,200);
        player4=createSprite(700,200);
        players=[player1,player2,player3,player4]
    }
    play(){
        form.hideAll();
       Player.playerInfo();
    }
}