var canvas;
var music;
var surface1, surface2, surface3, SSsurface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(50,580,200,20)
surface1.shapeColor="blue"

surface2 = createSprite(280,580,200,20)
surface2.shapeColor="red"
                                
surface3 = createSprite(500,580,200,20)
surface3.shapeColor="lime"

surface4 = createSprite(730,580,200,20)
surface4.shapeColor="pink"

    //create box sprite and give velocity

   box = createSprite(random(20,750),20,20)
   box.shapeColor="white"
   box.velocityY = 5
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



drawSprites();

  //add condition to check if box touching surface and make it box

  if (surface1.isTouching(box)){
      box.shapeColor = "blue"
      box.velocityY = 0
  }
  if (surface2.isTouching(box)){
    box.shapeColor = "red"
    box.velocityY = 0
}
if (surface3.isTouching(box)){
    box.shapeColor = "lime"
    box.velocityY = 0
}
if (surface4.isTouching(box)){
    box.shapeColor = "pink"
    box.velocityY = 0
}
}
