const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var backgroundImg,platform;
var ball, rope;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    //getBackgroundImg();
    backgroundImg = loadImage("sprites/bg1.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,285,70,70);
    box3 = new Box(700,250,70,70);
    box4 = new Box(700,215,70,70);
    box5 = new Box(700,180,70,70);
    box6 = new Box(700,145,70,70);

    ball = new Ball(10,10,70,70);

    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(ball.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground.display();

    ball.display();

    rope.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}
