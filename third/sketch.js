import { sketch } from "p5js-wrapper";
// import p5 from "p5"
const diameter = 1;
const pos = 0;
// const newDiameter = 10;
// const newRadius = newDiameter / 2;
const radius = diameter / 2;
sketch.setup = () => {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  translate(width/2,height)
  
  background("black")
  circles(300,360)
  circles(140,180)
  circles(300,360)
  circles(140,180)
  circles(260,300)
  circles(220,240)
  circles(300,360)
  circles(140,180)
  circles(300,360)
  circles(140,180)
  circles(260,300)
  circles(220,240)
  
};
sketch.draw = () => {
 
  // const angle=mouseX/width*TWO_PI
  // circle(pos,pos,diameter)
  // line(pos,pos,pos+(radius+newRadius)*cos(angle),pos+(radius+newRadius)*sin(angle))
  // circle(pos+(radius+newRadius)*cos(angle),pos+(radius+newRadius)*sin(angle),newDiameter)
};

function circles(a,b) {
  noStroke()
  
  let lastRadius=radius
  let oldPosX=pos
  let oldPosY=pos
  for (let i = 0; i < 5000; i++) {
    const angle=random(-PI,TWO_PI)
    
    let newRadius = lastRadius+i/32000;
    let radius=lastRadius
    let newPosX=oldPosX+(radius + newRadius) * cos(angle)
    let newPosY=oldPosY+(radius + newRadius) * sin(angle)
    fill(int(random(a,b)),int(random(90,100)),int(random(40,100)))
    // fill("black")
    
    circle(
      newPosX,
      newPosY,
      newRadius*2
    );
    oldPosX=newPosX
    oldPosY=newPosY
    lastRadius=newRadius
  }
}

// Global and instance mode
// let sketch = function(p) {
//   let x = 100;
//   let y = 100;

//   p.setup = function() {
//     p.createCanvas(700, 410);
//   };

//   p.draw = function() {
//     p.background(0);
//     p.fill(255);
//     p.rect(x, y, 50, 50);
//     circle
//   };
// };

// let myp5 = new p5(sketch);
