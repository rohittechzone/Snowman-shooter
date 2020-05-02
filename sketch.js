const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;

function preload(){
bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  snowball = new Snowball(200,200,50,50);
  snowman = new Snowman(900,150,150,300);
  ground = new Ground(600,450,1200,20);
  slingshot = new Catapult(snowball.body,{x:200, y:200});
}

function draw() {
  background(bg);  
  Engine.update(engine);
  snowball.display();
  slingshot.display();
  snowman.display();
}
function mouseDragged(){
  Matter.Body.setPosition(snowball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}