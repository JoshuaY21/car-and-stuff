var player1, carImage;

var road, roadImage;

var backImage;

var wall, wallImage;

var gamestate = "play"

var wall1,wall2,wall3,wall4,wall5,wall6

var score = 0;
var highscore = 0;
var counter = 0;

function preload() {
    roadImage = loadImage("road.jpg");
    carImage = loadImage("car.png");
    backImage = loadImage("back.jpg");

    wall1 = loadImage("wall1.jpg");
    wall2 = loadImage("wall2.jpg");
    wall3 = loadImage("wall3.png");
    wall4 = loadImage("wall4.png");
    wall5 = loadImage("wall5.png");
    wall6 = loadImage("wall6.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    road = createSprite(windowWidth - windowWidth/2,windowHeight - windowHeight/2);
    road.addImage(roadImage);
    road.scale = 2.5;
    
   

    player1 = createSprite(mouseX - 5,windowHeight - windowHeight/4);
    player1.addImage(carImage);
    player1.scale = 0.09;

    wallsGroup = new Group();
    
}

function draw() {
    background(backImage);
    createEdgeSprites();



    if (gamestate === "play") {
        player1.x = mouseX - 5;

counter += 0.3

score = Math.round(counter);

        spawnwalls();

        road.velocityY = 10;

        if (road.y > 750) {
            road.y = windowHeight - windowHeight/2 + 14;
        }
    }

if (wallsGroup.isTouching(player1)){
gamestate = "ded";
}





drawSprites();

if (gamestate === "ded") {
        road.velocityY = 0;
        fill("black")
        textSize(40);
        text("ur ded press r", -50 + windowWidth - windowWidth/2,-100 + windowHeight - windowHeight/2);
        wallsGroup.destroyEach();
        if (score > highscore) {
                highscore = score;
        }

        
        if (keyDown("r")){
                gamestate = "play"
                score = 0;
                counter = 0;
}


}


    

    


fill(0);
textSize(30);
text("                                                               Score: " + score + "              Highscore: " + highscore,50,50);
    
}
function spawnwalls() {
    if(frameCount % 60 === 0) {
      var wall = createSprite(Math.round(random(0,1535)),-200);

      wall.scale = 0.5
      
      wall.lifetime = 200;
      wallsGroup.add(wall);

      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: wall.addImage(wall1);
                break;
        case 2: wall.addImage(wall2);
                break;
        case 3: wall.addImage(wall3);
                break;
        case 4: wall.addImage(wall4);
                break;
        case 5: wall.addImage(wall5);
                break;
        case 6: wall.addImage(wall6);
                break;
        default: break;
      }
      
      if (gamestate === "play") {
        wall.velocityY = 6 + 3*score/100;
      }

      if (gamestate === "ded") {
wall.velocityY = 0;
      }

    }

    

     
    
}