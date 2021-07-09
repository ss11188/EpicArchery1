const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player , computer ;
var computerbase , playerbase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    
  engine = Engine.create();
  world = engine.world;

 playerbase = new PlayerBase(300,random(450,height-300),180,150);
 player = new Player(280,playerbase.body.position.y-150,50,180);
 computerbase = new ComputerBase(width-300,random(450,height-300),180,150);
 computer = new Computer(width-280,computerbase.body.position.y-150,50,180);

 }

 function draw() {

  background(180);

  Engine.update(engine);

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   playerbase.display();
   computerbase.display();
   player.display();
   computer.display();


}
