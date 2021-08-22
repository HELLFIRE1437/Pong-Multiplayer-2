class Ball{
    constructor(){
        this.ball = createSprite(500,350,20,20);
        this.ball.velocityX = 0 ;
        this.ball.velocityY = 0 ;
    }
    getBallInfo(){
        database.ref("ball/position").on("value",(data)=>{
            ballPosition = data.val();
            this.ball.x = ballPosition.x ;
            this.ball.y = ballPosition.y ;
        })
    }
    updateBallInfo(){
        database.ref("ball/position").update({
            x : this.ball.x ,
            y : this.ball.y ,
        })
    }
    reset(){
        database.ref("ball/position").update({
            x : 500 ,
            y : 350 ,
        })
    }
}