var form , player , game ;
var gameState = 0 , playerCount ;
var database ;
var ballObj, ballPosition;
var edges ;

function setup() {
  createCanvas(1000,700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  edges = createEdgeSprites();
}

function draw() {
  background("turquoise");  
  if(playerCount == 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}
