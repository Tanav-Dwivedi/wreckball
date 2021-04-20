class Ball {
  constructor(x,y,width,height){
    var options= {
      frictionAir:0.005,
      density:0.05
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
  }

  display() {
    var pos,ang
    pos=this.body.position
    ang=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(ang)
    ellipse(0,0,this.width,this.height)  
    pop() 
  }
}
