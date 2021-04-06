const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint
var myWorld,myEngine,ground,Ball  ;
var Box1,Box2,Box3,Box4;
var Pig1,Pig2,Pig3
var Plank1, Plank2,Plank3,Plank4;
var BoxImage,GroundImage,PiggyImage,BirdredImage,PlankImage,BackgroundImage
var Connect1,DummyPlank,Platform



function preload()
{
  BoxImage=loadImage("Squarewood.png")
  GroundImage=loadImage("ground.png")
  BoxImage=loadImage("Squarewood.png")
  PlankImage=loadImage("Plank.png")
  BirdImage=loadImage("Bird.red.png")
  PiggyImage=loadImage("Piggy.png")
  BirdredImage=loadImage("Bird.red.png")
  decideBackground()
}





function setup() {
  createCanvas(1200,400);
 myEngine=Engine.create()
 myWorld=myEngine.world;
 Box1= new Box(1000,350,50,50)
 Box2 = new Box(900,350,50,50)
 Box3 = new Box(1000,300,50,50)
 Box4 = new Box(900,300,50,50)
 Bird1= new Bird(250,80,50,50);
ground= new Ground(600,390,1200,10)
Platform = new Ground( 150,380,350,350)
Pig1= new Piggy( 950,350,50)
Pig2 = new Piggy(950,300,50)
Pig3 = new Piggy(950,230,50)
Plank1= new Plank(950,310,20,150,PI/2)
Plank2 = new Plank(950,260,20,150,PI/2)
Plank3 = new Plank(915,200,20,60,PI/6)
Plank4 = new Plank(990,200,20,60,-PI/6)
Connect1= new Connection (Bird1.bird,{x:250,y:80})
}



function draw() {
  if (BackgroundImage)
  {
    background(BackgroundImage);
  }
  Engine.update(myEngine)
  Box1.display()
  ground.display()
 Box2.display()
 Box3.display()
 Box4.display()
 Pig1.display()
 Pig2.display()
 Pig3.display()
 Plank1.display()
 Plank2.display()
 Plank3.display()
 Plank4.display()
Bird1.display()
Connect1.display()
Platform.display()
} 

function mouseDragged () {

Matter.Body.setPosition(Bird1.bird,{x:mouseX,y:mouseY})

}

function mouseReleased(){
Connect1.connectionBroken ()
}

async function decideBackground(){

var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var data = await response.json();
var time = data.datetime
var hour = time.slice(11,13)
console.log(hour)
if( hour >= 6 &&  hour <=15)
{
  BackgroundImage=loadImage("Background.png")
}

else{
  BackgroundImage=loadImage("Night Background.jpg")
}
}