function setup() {
  createCanvas(400,400);

  a =  createSprite(300, 200, 50, 50);
  a.shapeColor = ("red");
  a.debug = true;

  b = createSprite(300,200,40,40);
  b.shapeColor = ("red");
  b.debug = true;

  c = createSprite(100,100,40,40);
  c.shapeColor = ("red");
  c.debug = true;

  d = createSprite(100,200,40,40);
  d.shapeColor = ("red");
  d.debug = true;

  e = createSprite(100,300,40,40);
  e.shapeColor = ("red");
  e.debug = true;

}

function draw() {
  background("yellow");  
  a.x = World.mouseX;
  a.y = World.mouseY;

  if(touch(a,c)){
    a.shapeColor = "green";
    c.shapeColor = "green";
  
  }
  else{
    a.shapeColor = "red";
    c.shapeColor = "red";
  }

  

  drawSprites();
}

function touch(o1,o2){
  if(o1.x-o2.x<o1.width/2+o2.width/2 && 
    o2.x-o1.x<o1.width/2+o2.width/2 && 
    o1.y-o2.y<o1.height/2+o2.height/2 && 
    o2.y-o1.y<o1.height/2+o2.height/2 ){
    return true;
  }
  else{
  return false;
    
  }
}