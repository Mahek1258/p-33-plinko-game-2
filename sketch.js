//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 //world and engine variables
 var world, engine;
  //particles,plingoes,division arrays and ground variable
var particles = [];
var plinkos = [];
var divisions = [];
var ground;

//division height and score
var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
function setup() {
  //creating canvas
  createCanvas(800, 800);

  //creating engine and adding it to world
  engine = Engine.create();
  world = engine.world;

  //creating ground
  ground = new Ground(width/2,height,width,20);

  //for loop for making:
  //divisions
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   //plinkos
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    //plinkos
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

    //plinkos
     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    //plinkos
     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
 // changing background colour to black
  background("black");
  if(particles.x>0 && particles.x<80 && particles.y>500){
    score= score + 500
   }
   if(particles.x>80 && particles.x<160 && particles.y>500){
    score= score + 200
    }
    if(particles.x>160 && particles.x<240 && particles.y>500){
    score= score + 300
    }
    if(particles.x>240 && particles.x<320 && particles.y>500){
    score= score + 400
    }
    if(particles.x>320 && particles.x<400 && particles.y>500){
    score= score + 500
    }
    if(particles.x>400 && particles.x<480 && particles.y>500){
    score= score + 200
    }

  //making text size 20 and writting text score: and the score
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,650);
  text("200",100,650);
  text("300",180,650);
  text("400",260,650);
  text("500",340,650);
  text("200",420,650);
  text("300",500,650);
  text("400",580,650);
  text("500",660,650);
  text("200",740,650);
  console.log(mouseX,mouseY);
  //updating the engine
  Engine.update(engine);
 
  //displaying plingos
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   //making particles when so evr the framecount is divisilbe of 60 and ading 1 to score 
   if(frameCount%50===0){
     particles.push(new Particle(random(0, 800), 10,10));
     
   }
 
   //displaying particles
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   //displaying divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState !== "end"){
    score++;
    paticle = new Particle(mouseX , 10 ,10);
  }
}