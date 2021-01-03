const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var particles = []
var plinko = []
var division = []
var divisionHeight=300;
var particle

function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(450,550);
  ground = new Ground(225,540,450,10)
  
  for( var k = 0; k<=width ; k = k+80){
    division.push(new Division(k,height-115,10,200))
}

  for( var k = 40; k<=width ; k = k+50){
    plinko.push(new Plinko(k,75,10))
}
for( var k = 15; k<=width-10 ; k = k+50){
    plinko.push(new Plinko(k,175,10))
}
for( var k = 40; k<=width ; k = k+50){
    plinko.push(new Plinko(k,275,10))
}

}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display();


  
  for(var i = 0;i<division.length;i++){
    division[i].display()
   }

   for( var k = 0; k<plinko.length ; k++){
    plinko[k].display();
}

   
   if(frameCount%60 ===0){
    particle = new Particle(random(10,500),0,10)
    particles.push(particle)
}

for( var k = 0; k<particles.length ; k++){
  particles[k].display();
}

  drawSprites();
}