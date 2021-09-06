
var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("leaf.png")
  redLeavesImg = loadImage("redImage.png")
  orangeLeavesImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
  garden = createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.addImage(rabbitImg);
  rabbit.scale =0.09;

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 10 == 0) {
    if (select_sprites == 1) {
      createApples();
    }
    else {
      createLeaves();
   }
 }
 
}

function createLeaves(){
  leaves = createSprite(random(50, 350),40, 10, 10);
  leaves.addImage(leavesImg)
  leaves.scale = .05
  leaves.velocityY = 2
  leaves.lifetime = 120

  rleaves = createSprite(random(50, 350),40, 10, 10);
  rleaves.addImage(redLeavesImg)
  rleaves.scale = .05
  rleaves.velocityY = 2
  rleaves.lifetime = 120

  oleaves = createSprite(random(50, 350),40, 10, 10);
  oleaves.addImage(orangeLeavesImg)
  oleaves.scale = .05
  oleaves.velocityY = 2
  oleaves.lifetime = 120
}

function createApples(){
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg)
  apple.scale = .05
  apple.velocityY = 2
  apple.lifetime = 120
}

function draw() {
  
  background(0);
  
 

  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
