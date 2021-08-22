class Form {
    constructor(){
        this.title = createElement('h1',"The Pong Game");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.reset = createButton("Reset");
        this.greeting = createElement('h1');
    }
    display(){
        this.title.position(240,150);
        this.input.position(250,300);
        this.button.position(325,350);
        this.reset.position(650,70);

        this.button.mousePressed(()=>{
            player.name = this.input.value();
            playerCount += 1 ;
            console.log(playerCount);
            player.index = playerCount ;
            player.update();
            player.updateCount(playerCount);
            this.input.hide();
            this.button.hide();
            this.greeting.html("Hello " + player.name);
            this.greeting.position(250,300);
            this.greeting.style("color","black");
            
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            
            database.ref("players").remove();
            setTimeout(function(){ ballObj.reset(); gameState = 0; game.update(0)},1000);
        })
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
    }
}