var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var Mark1, Mark2, Mark3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	Mark1 = createSprite(250, 609, 20, 100);
	Mark1.shapeColor = "red";

	Mark2 = createSprite(350, 649, 200, 20);
	Mark2.shapeColor = "red";

	Mark3 = createSprite(450, 609, 20, 100);
	Mark3.shapeColor = "red";


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

if(keyCode === LEFT_ARROW) {

helicopterSprite.x = helicopterSprite.x - 1;
}

if(keyCode === RIGHT_ARROW) {

helicopterSprite.x = helicopterSprite.x + 1;
}

packageBody.visiblility = "false";

packageSprite.bounceOff(Mark2);

packageSprite.x = helicopterSprite.x

drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);
    
  }
}
