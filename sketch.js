
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var paperSprite; 
var groundSprite;
var trashSprite;


function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
    world = engine.world;


  //Create the Bodies Here.
  groundSprite = new Ground(600, 600, 1600, 30);
  paperSprite = new Paper(100, 500, 40);
  trashSprite = new Trash(1000, 575);

  var render = Render.create({
    element: document.body, 
    engine: engine, 
    options: {
      width: 1600,
      height: 700,
      wireframes: false
    }
  });
	Engine.run(engine);
  Render.run(render);
}


function draw() {
  rectMode(CENTER); 
  background(0);
  Engine.update(engine);

  groundSprite.display();
  paperSprite.display();
  trashSprite.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:85,y:-85});
  
  }
}


