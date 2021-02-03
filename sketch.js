
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var gameState = "start";
var SCORE = 0;
var particle;
var count=0;

function preload()
{
bg = loadImage("bg.jpg")
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750, 745, 1500, 10);

  stand1 = new Division(0, 680, 10, 200);
  stand2 = new Division(65, 680, 10, 200);
  stand3 = new Division(130, 680, 10, 200);
  stand4 = new Division(190, 680, 10, 200);
  stand5 = new Division(260, 680, 10, 200);
  stand6 = new Division(325, 680, 10, 200);
  stand7 = new Division(390, 680, 10, 200);
  stand8 = new Division(455, 680, 10, 200);
  stand9 = new Division(520, 680, 10, 200);
  stand10= new Division(585, 680, 10, 200);
  stand11= new Division(650, 680, 10, 200);
  stand12= new Division(715, 680, 10, 200);
  stand13= new Division(780, 680, 10, 200);
  stand14= new Division(845, 680, 10, 200);
  stand15= new Division(910, 680, 10, 200);
  stand16= new Division(975, 680, 10, 200);
  stand17= new Division(1040, 680, 10, 200);
  stand18= new Division(1105, 680, 10, 200);
  stand19= new Division(1170, 680, 10, 200);
  stand20= new Division(1235, 680, 10, 200);
  stand21= new Division(1300, 680, 10, 200);
  stand22= new Division(1365, 680, 10, 200);
  stand24= new Division(1430, 680, 10, 200);
  stand25= new Division(1495, 680, 10, 200);
  

  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
     
  }


 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  textFont("Georgia")
  fill("orange")
  textSize(25)
  text("𝐒𝐜𝐨𝐫𝐞 : " + SCORE , 50,50)
  textFont("Bold")
  fill("red")
  textSize(20)
  text("50" , 1465,700)
  text("50" , 1390,700)
  text("50" , 1325,700)
  text("50" , 1255,700)
  text("100" , 1180,700)
  text("100" , 1120,700)
  text("100" , 1050,700)
  text("100" , 985,700)
  text("300" , 925,700)
  text("300" , 860,700)
  text("300" , 800,700)
  text("300" , 730,700)
  text("300" , 660,700)
  text("500" , 600,700)
  text("500" , 540,700)
  text("500" , 470,700)
  text("500" , 410,700)
  text("500" , 340,700)
  text("500" , 280,700)
  text("500" , 210,700)
  text("500" , 145,700)
  text("500" , 80,700)
  text("500" , 15,700)
 
  
  ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();
   stand9.display();
   stand10.display();
   stand11.display();
   stand12.display();
   stand13.display();
   stand14.display();
   stand15.display();
   stand16.display();
   stand17.display();
   stand18.display();
   stand19.display();
   stand20.display();
   stand21.display();
   stand22.display();
   stand24.display();
   stand24.display();
   

   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();}
    if(particle!=null)
    {
     
       particle.display();
        
    if (particle.body.position.y>760)
          {
                if (particle.body.position.x < 300) 
                {
                    SCORE=SCORE+500;      
                    particle=null;
                   if ( count>= 5) gameState ="end";                          
                }
  
  
                else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
                {
                  SCORE = SCORE + 100;
                      particle=null;
                   if ( count>= 5) gameState ="end";
  
                }
                else if (particle.body.position.x < 900 && particles.body.position.x > 601 )
                {
                  SCORE = SCORE + 200;
                     particles=null;
                      if ( count>= 5)  gameState ="end";
  
                }      
                
          }
    
  }
}

function mousePressed(){
  if(gameState!=="end")
{
   count++;
  particle=new Particle(mouseX, 10, 10,10); 
}
}