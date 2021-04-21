
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;

function preload()
{
	tree = loadImage("tree.png");
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,10000,20);

	stone = new Stone(260,520);
	m1 = new Mango(1200,300,20);
	m2 = new Mango(1040,300,20);
	m3 = new Mango(1200,370,20);
	m4 = new Mango(990,380,20);
	m5 = new Mango(1060,340,20);
	m6 = new Mango(1100,240,20);
	m7 = new Mango(1300,380,20);
	m8 = new Mango(1200,250,20);
	m9 = new Mango(1050,400,20);
	m10 = new Mango(1100,400,20);
	m11 = new Mango(1110,290,20);
	m12 = new Mango(1280,310,20);
  m13 = new Mango(1150,340,20);
  
  tree.newobj

	Sling = new SlingShot(stone.body,{x: 260 , y: 520  });




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1000);
  Engine.update(engine);

  if (keyCode === 32) {
    Sling.attach();
    }
  
  image(tree,900,190,500,500);
  image(boy,200,440,300,300);

    drawSprites();


    // detectCollision(stone,m1);
    // detectCollision(stone,m2);
    // detectCollision(stone,m3);
    // detectCollision(stone,m4);
    // detectCollision(stone,m5);
    // detectCollision(stone,m6);
    // detectCollision(stone,m7);
    // detectCollision(stone,m8);
    // detectCollision(stone,m9);
    // detectCollision(stone,m10);
    // detectCollision(stone,m11);
    // detectCollision(stone,m12);
    // detectCollision(stone,m13);

  ground.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  m12.display();
  m13.display();
  stone.display();
  Sling.display();

}

function mouseDragged() {

    Matter.Body.setPosition(stone.body, {x: mouseX ,y: mouseY })
}


function mouseReleased() {

    Sling.fly();   

}




