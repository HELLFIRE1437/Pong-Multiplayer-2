class Game{
    constructor(){
        
    }
    async getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        })
      }
    update(state){
        database.ref("/").update({
            gameState : state
        })
    }
    async start(){    // async means not related to others but you call it with name of variable i.e game.start() not Game.start();
        if(gameState == 0){
            console.log("player_declare");
            // await can only be used in async functions
            player = new Player();
            ballObj = new Ball();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
            console.log("Working");
        }
        
    }
    play(){
        form.hide();
        if(player.index === 1){

            if(keyDown("Space")){
                ballObj.ball.x = 500 ;
                ballObj.ball.y = 350 ;
                ballObj.updateBallInfo();
            }
            if(keyDown("a") && ballObj.ball.velocityX === 0){
                ballObj.ball.velocityX = 6 ;
                ballObj.ball.velocityY = -4 ;
            }
            ballObj.ball.bounceOff(edges[0]);
            ballObj.ball.bounceOff(edges[1]);
            ballObj.ball.bounceOff(edges[2]);
            ballObj.ball.bounceOff(edges[3]);
            ballObj.updateBallInfo();
        }
        if(player.index === 2){
            ballObj.getBallInfo();
        }
        drawSprites();
    }
}