class Box  {
  constructor(x, y, width, height){
    var options= {
      restitution:0.8,
      friction:1.0,
      density:0.05
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/wood1.png");
    World.add(world,this.body)
  }

  display(){
    var pos,ang
    pos=this.body.position
    ang=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(ang)
    stroke("blue") 
    rect(0,0,this.width,this.height)  
    pop() 
  }
};
