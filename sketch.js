const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var drop;
var DRP=[];

function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  for(var i=0;i<=2000;i++)
  {
    DRP.push(new Drop());
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  
 
  for(var i=0;i<=2000;i++)
  {
    DRP[i].fall();
    DRP[i].display();
  }
 
  
}