var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  //crear sprite de Trex
  trex = createSprite(100,height-10,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
   
  trex.x = 50
  ground=createSprite(200,height-30,400,20)
  ground.addImage(groundImage)
  ground.x=ground.width/2
  groundinvisible=createSprite(200,height-10,400,20)
  groundinvisible.visible=false
}


function draw(){
  //establecer color de fondo.
  background("white");
  ground.velocityX=-2
  if(ground.x<0){ground.x=ground.width/2 
}
  //cargar la posición Y del Trex
  console.log(trex.y)
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")&&trex.y>120){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(groundinvisible)
  nubes();
  drawSprites();
}


function nubes(){
var nube=createSprite(width,200,100,50)
nube.velocityX=nube.velocityX-5
}