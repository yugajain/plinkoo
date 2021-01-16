const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];
  
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for(var j=0;j<=width;j=j+80){
    divisions.push(new Division(j,height-divisionHeight/2,10,divisionHeight));
  }  
  for(var k=40;k<=width;k=k+50){
    plinkos.push(new Plinko(k,75));
  }  
  for(var k=15;k<=width-10;k=k+50){
    plinkos.push(new Plinko(k,175));
  }  
  for(var k=35;k<=width-20;k=k+50){
    plinkos.push(new Plinko(k,275));
  }  
  for(var k=40;k<=width-30;k=k+50){
    plinkos.push(new Plinko(k,375));
  }  

 
 
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
  });
  
  ground1=new Ground(5,795,980,10); 
}
var divisionHeight=300;

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground1.display();

  for(var j=0; j<divisions.length;j++){
    divisions[j].display();
  }
  for(var k=0; k<plinkos.length;k++){
    plinkos[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var l=0; l<particles.length;l++){
    particles[l].display();
  }
}

 

  

