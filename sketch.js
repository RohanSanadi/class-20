function setup() {
  createCanvas(1300,800);
  movingRect=createSprite(600, 400, 50, 80);
  fixedRect=createSprite(600,400,60,80);
   fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
    fixedRect.debug=true;
    movingRect.debug=true;

}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
   movingRect.y=World.mouseY;  
if( movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
  
} else{
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
}


  drawSprites();

}