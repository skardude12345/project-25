
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, trashcan, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	paper = new Paper(100, 500, 70);
	trashcan = new TrashCan(850, 570);
	ground = new Ground(width/2, 600, width, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  text("press up arrow key to launch", 450, 200);

  keyPressed();
  
  drawSprites();
  paper.display();
  trashcan.display();
  ground.display();
}

console.log(paper.body.position.y);

function keyPressed(){
	if (keyWentDown(UP_ARROW)){
		Body.applyForce(paper.body, paper.body.position, {x:800, y:-1000});
	}
}


