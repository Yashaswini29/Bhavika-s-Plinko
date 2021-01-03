class Particle{
    constructor(x,y,radius){

    
  this.body = Bodies.circle(x,y,radius);
  this.radius = radius
  this.color = color(random(0,225),random(0,225),random(0,225))
 
  World.add(world,this.body)
 }
 display(){
     var pos = this.body.position
     ellipseMode(RADIUS)
     fill(this.color)
     ellipse(pos.x,pos.y,this.radius)
    
 }
}