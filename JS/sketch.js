
var  ball, bg;

function preload(){
  ballI = loadImage("Images/fitness-ball (2).png");
  bg = loadImage("Images/B.G.png");
}
function setup() {

  createCanvas(900, 652);

  ball = createSprite(40, 50, 45, 45);
  ball.shapeColor="pink";
  ball.velocityY = 3;
  ball.addImage(ballI);
  ball.scale = 0.1;
  ball.setCollider("circle", 10, 10);
   
  //edges
  //edge1 = createSprite(0,328,50, 620);
  //edge1.shapeColor = "white";
  //edge2 = createSprite(900,328,50, 620);
  //edge2.shapeColor = "white";
  //edge3 = createSprite(450, 0, 900, 25);
  //edge3.shapeColor = "white";
  //edge4 = createSprite(450, 652, 900, 50);
  //edge4.shapeColor = "white";

  //normal platforms
  b1 = createSprite(68, 0, 90, 10);
  b1.shapeColor = "lightBlue";
  b2 = createSprite(68, 100, 90, 12);
  b2.shapeColor = "lightBlue";
  b3 = createSprite(165, 115, 55, 12);
  b3.shapeColor = "lightBlue";
  b4 = createSprite(278, 60, 65, 15);
  b4.shapeColor = "lightBlue";
  b5 = createSprite(430, 75, 65, 15);
  b5.shapeColor = "lightBlue";
  b6 = createSprite(549, 142, 65, 15);
  b6.shapeColor = "lightBlue";
  //..
  b7 = createSprite(640, 355, 122, 15);
  b7.shapeColor = "lightBlue";  
  b8 = createSprite(660, 470, 72, 15);
  b8.shapeColor = "lightBlue"; 
  b9 = createSprite(313.5, 338, 388, 15);
  b9.shapeColor = "lightBlue"; 
  b10 = createSprite(443, 431, 100, 15);
  b10.shapeColor = "lightBlue"; 
  b11 = createSprite(162, 645, 103, 15);
  b11.shapeColor = "lightBlue";
  b12 = createSprite(225, 420, 103, 15);
  b12.shapeColor = "lightBlue";
  b13 = createSprite(413, 542, 161, 15);
  b13.shapeColor = "lightBlue";
  b14 = createSprite(413, 655, 161, 15);
  b14.shapeColor = "lightBlue";


  //horizontal normal boxes
  h1 = createSprite(500, 500, 15, 312);
  h1.shapeColor = "lightBlue"; 
  h2 = createSprite(210, 544 , 15, 238);
  h2.shapeColor = "lightBlue"; 

  //dropDown
  {
  d1 = createSprite(754, 175, 60, 60);
  d1.shapeColor = "pink";
  d2 = createSprite(68, 358, 60, 60);
  d2.shapeColor = "pink";}

  //moving and their invisible boxes for movement
 {m1 = createSprite(235, 188, 58, 12);
  m1.shapeColor = "magenta";
  m1.velocityX = -3;
  inv1a = createSprite(235-75, 188, 10, 10);
  inv1a.visible= false;
  inv1b = createSprite(235+75, 188, 10, 10);
  inv1b.visible= false;
    
  m2 = createSprite(70, 215, 58, 12);
  m2.shapeColor = "magenta";
  m2.velocityX = 3;
  inv2a = createSprite(70-75, 215, 10, 10);
  inv2a.visible= false;
  inv2b = createSprite(70+75, 215, 10, 10);
  inv2b.visible= false;

  m3 = createSprite(645, 554, 55, 12);
  m3.shapeColor = "magenta";
  m3.velocityX = -3;
  inv3a = createSprite(645-75, 554, 10, 10);
  inv3a.visible= false;
  inv3b = createSprite(645+75, 554, 10, 10);
  inv3b.visible= false;
}

  //destruction platfrm'
  p1 = createSprite(367, 230, 682, 15);
  p1.shapeColor = "darkkhaki"; 
  p2= createSprite(225, 593, 15, 150);
  p2.shapeColor = "darkkhaki"; 
  p2= createSprite(280, 650, 100, 15);
  p2.shapeColor = "darkkhaki"; 

  //destruction boxes
  x1 = createSprite(405, 321, 20, 20);
  x1.shapeColor = "darkkhaki"; 
  x2 = createSprite(315, 321, 20, 20);
  x2.shapeColor = "darkkhaki"; 
  x3 = createSprite(225, 321, 20, 20);
  x3.shapeColor = "darkkhaki"; 
  x4 = createSprite(135, 321, 20, 20);
  x4.shapeColor = "darkkhaki"; 

  //appear/dissappear
  a1 = createSprite(355, 147, 55, 15);
  a1.shapeColor = "steelBlue";
  a2 = createSprite(654, 95, 64, 15);
  a2.shapeColor = "steelBlue";
  a3 = createSprite(175, 532, 50, 15);
  a3.shapeColor = "steelBlue";
  a4 = createSprite(125, 465, 40, 15);
  a4.shapeColor = "steelBlue";
  a5 = createSprite(240, 510, 50, 15);
  a5.shapeColor = "steelBlue";

  //bouncy
  o1 = createSprite(539, 560, 50, 40);
  o1.shapeColor = "#C54B8C";

  //doors
  D1 = createSprite(490, 285, 30, 95);
  D2 = createSprite(408, 384.8, 30, 78);

  //dungen
  dungen = createSprite(482, 598.75, 20, 96.4)
}

function draw() {
  background(bg);  
  text(mouseX+","+mouseY,mouseX-5,mouseY-5);

  //collision 
  ball.collide(b1);
  ball.collide(b2); 
  ball.collide(b3);
  ball.collide(b4);
  ball.collide(b5);
  ball.collide(b6);
  ball.collide(b7);
  ball.collide(b8);
  ball.collide(b9);
  ball.collide(b10);
  ball.collide(b11);
  ball.collide(b12);
  ball.collide(b13);
  ball.collide(b14);
  ball.collide(h1);
  ball.collide(h2);
  ball.collide(m1);
  ball.collide(m2);
  ball.collide(m3);

  //moving object's colllision
  m1.bounceOff(inv1a);
  m1.bounceOff(inv1b);
  m2.bounceOff(inv2a);
  m2.bounceOff(inv2b);
  m3.bounceOff(inv3a);
  m3.bounceOff(inv3b);


  //movement
  if(keyDown(RIGHT_ARROW)){
    ball.x += 10;
  }else if(keyDown(LEFT_ARROW)){
    ball.x -= 10;
  }else if(keyWentDown(UP_ARROW) && ball.y === ball.y-10){
    ball.y -= 4.5;
  }

  //condition for dropdown
  if(ball.isTouching(d1) ){
    d1.velocityY = 10;
    ball.velocityY = 10;
  }else if(ball.isTouching(d2)){
    d2.velocityY = 10;
    ball.velocityY = 10;
  }

  //condition for moving boxes


  

 //ball.collide(d1);
  
  /*for(var i = 0; i <=1000; i++){
    AD1.destroy();
    if (frameCount%20 === 0){
    AD1 = createSprite(250, 300, 60, 18);
    AD1.shapeColor = "orange";
  }*/

    ball.display();
    drawSprites();
}
