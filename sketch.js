
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof = new roof (425,300,250,20);
	bobObject1 = new bob (340,470,40)
	bobObject2 = new bob (380,470,40)
	bobObject3 = new bob (420,470,40)
	bobObject4 = new bob (460,470,40)
	bobObject5 = new bob (500,470,40);
	rope1= new rope(bobObject1.body,roof.body,-40*2, 0);
	rope2= new rope(bobObject2.body,roof.body,-20*2,0);
	rope3= new rope(bobObject3.body,roof.body,-0*2,0);
	rope4= new rope(bobObject4.body,roof.body,20*2,0);
	rope5= new rope(bobObject5.body,roof.body,40*2,0);

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
   
  roof.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
 
}

function drawLine (constraint) {
	bobBodyPosition = constraint.bodyA.position;    
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX= roofBodyPositiion.x + roofBodyOffset.x;
	roofBodyY= roofBodyPosition.y + roofBodyOffset.y; 
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);           
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y:-45});
	}
}


