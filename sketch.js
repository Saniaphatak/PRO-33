//physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var backgroundImg, snowImg1, snowImg2;
var person1;
var snowfall = [];
var maxfall=100;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  snowImg1 = loadImage("snow5.webp");
  snowImg2 = loadImage("snow4.webp");
}




function setup() {
  createCanvas(800,400);
 
  var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    //creating drops
    if(frameCount % 450 === 0){

        for(var i=0; i<maxfall; i++){
          
            //CHOOSE THE CORRECT OPTION TO CREATE DROP AT RANDOM X AND Y POSITIONS
            snowfall.push(new snow(random(0,400), random(0,30)));

        }

    }
      
    

   
  
   

}

function draw() {
  background(backgroundImg);
    Engine.update(engine);
    
   

    //displaying rain drops
    for(var i = 0; i<maxfall; i++){
      snowfall[i].display();
      snowfall[i].updateYpos()
      
  }
  drawSprites();
}
















































































































