class Player{
    constructor(){
        this.x = 0 ;
        this.y = 0 ;
        this.name = "";
        this.index = 0 ;
    }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    update(){
        var playerNaming = "players/player" + this.index ;
        database.ref(playerNaming).update({
            name : this.name ,
            x : this.x ,
            y : this.y 
        })
    }
    static getAllPlayersInfo(){
        database.ref("players").on("value",function(data){
            allPlayers = data.val();
        })
    }
}