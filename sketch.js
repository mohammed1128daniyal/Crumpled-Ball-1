var paperBall, ground;
var world, engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperBall = new PaperBall(200,450,40);
	ground = new Ground(width/2,670,width,20);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	boxPosition=width/2-200
	boxY=610;

	boxleftSprite=createSprite(boxPosition+400, boxY, 20,100);
	boxleftSprite.shapeColor=color("white");

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+500, boxY+40, 200,20);
	boxBase.shapeColor=color("white");

	boxBottomBody = Bodies.rectangle(boxPosition+500, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+600 , boxY, 20,100);
	boxleftSprite.shapeColor=color("white");

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBall.display();
  ground.display;

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
  
	}
}

