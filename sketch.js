const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var paddle , paddle1 ,  paddle2;
var ground ;

function preload()
{
	
}

function setup() {
	var canves = createCanvas(800, 700);
	engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		ground = new Ground(width/2,height,width,20)
			
		ball = new Ball(30,630,20);
	
	

		paddle = new Paddle(700,650,15,100);
		paddle1 = new Paddle(550,650,15,100);
		paddle2 = new Paddle(620,700,160,20);
	

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
Engine.update(engine)




	ground.display();
	paddle.display();
	paddle1.display();
	paddle2.display();
	ball.display();
	

	drawSprites();
}
 
function keyPressed(){
	
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:180,y:150});
	
	}
	
	}




