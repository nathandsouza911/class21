var fixedRect, movingRect,o1,o2,o3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 800, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-5
  movingRect = createSprite(400,100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=5
  // o1 = createSprite(100,100,50,50);
  // o1.shapeColor = "green";
  // o1.debug = true;
  // o2 = createSprite(200,100,50,50);
  // o2.shapeColor = "green";
  // o2.debug = true;
  // o3 = createSprite(300,100,50,50);
  // o3.shapeColor = "green";
  // o3.debug = true;


}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if(isTouching(movingRect,o1)){
    
  //   movingRect.shapeColor = "red";
  //   o1.shapeColor = "red";
  // } else {
  //   movingRect.shapeColor = "green";
  //   o1.shapeColor = "green";

  // }
  bounceOff(movingRect,fixedRect)
  
  drawSprites();
}
// function isTouching(p1,p2){
//   if (p1.x - p2.x < p2.width/2 + p1.width/2
//     && p1.x - p2.x < p1.width/2 + p2.width/2
//     && p2.y - p1.y < p1.height/2 + p2.height/2
//     && p1.y - p2.y < p1.height/2 + p2.height/2) {
//       return true
// }
// else {
//   return false
// }
// }
function bounceOff(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p1.x - p2.x < p1.width/2 + p2.width/2){
      p1.velocityX=p1.velocityX*(-1)
      p2.velocityX=p2.velocityX*(-1)
    }
  if (p1.y - p2.y< p2.height/2 + p1.height/2
    && p1.y - p2.y < p1.height/2 + p2.height/2){
      p1.velocityY=p1.velocityY*(-1)
      p2.velocityY=p2.velocityY*(-1)
    }

}
