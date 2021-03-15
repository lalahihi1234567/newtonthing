const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,100,400,20);
	bob1=new Bob(240,400,25);
	bob2=new Bob(320,400,25);
	bob3=new Bob(400,400,25);
	bob4=new Bob(480,400,25);
	bob5=new Bob(560,400,25);

	line1=new Line(bob1.body,roof.body,-100);
	line2=new Line(bob2.body,roof.body,-50);
	line3=new Line(bob3.body,roof.body,0);
	line4=new Line(bob4.body,roof.body,50);
	line5=new Line(bob5.body,roof.body,100);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	line1.display();
	line2.display();
	line3.display();
	line4.display();
	line5.display();
}

function keyPressed(){
	 if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-70}); 
	}
}

