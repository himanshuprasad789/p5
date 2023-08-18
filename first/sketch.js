// import {} from "p5.min.js"
import { sketch } from "p5js-wrapper";
let tileCount = 3;
// let tc
let number = 17;
let gap = 4;
let strokeWidth = 1;
// var tileCountSLider;
//complexity => tileCount^2*number
sketch.setup = () => {
  const dimensions = min(windowWidth, windowHeight);
  // createCanvas(dimensions, dimensions);
  createCanvas(windowHeight, windowHeight);

  colorMode(HSB);
  angleMode("degrees");
  // tc = createSlider(1, 255, 10);
  // tileCount=tc.value()
};
sketch.draw = () => {
  background("black");
  const side = height / tileCount;
  // ellipse(mouseX, mouseY, 10, 10);

  for (let i = 0; i < int((width / windowHeight) * tileCount); i++) {
    for (let j = 0; j < tileCount; j++) {
      let posX = side * i + side / 2;
      let posY = side * j + side / 2;
      // let shiftX = int(random(-side / 2, side / 2));
      // let shiftY = int(random(-side / 2, side / 2));
      createCircles(posX, posY, side);
    }
  }
};

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
// *cos(int(random(0,TWO_PI)))

function createCircles(posX, posY, side) {
  const angle = drawLiveVectors(posX, posY);
  // stroke(
  //   int((mouseX * 300) / windowWidth + 30),
  //   // int(random(0,360)),
  //   // int(random(60, 90)),
  //   // random(60, 100),
  //   int((mouseY / windowHeight) * 50) + 30,
  //   100
  // );
  for (let k = 0; k < number; k++) {
    // if (k == 0) {
    //   fill(
    //     int((mouseX * 300) / windowWidth + 30),
    //     int((mouseY / windowHeight) * 50) + 30,
    //     100
    //   );
    //   stroke("black")

    // } else if(k==2) {
    //   fill("white");
    // }
    // else{
    //   fill("black");
    //   stroke("black")

    // }
    // stroke("white")
    stroke(
      int((mouseX * 300) / windowWidth + 30),
      int((mouseY / windowHeight) * 50) + 30,
      100
    );
    fill("black");
    // if(k==number-1){
    //   fill("white")
    // }
    strokeWeight(strokeWidth);

    const dis = (gap / 2) * k;

    circle(posX + dis * cos(angle), posY + dis * sin(angle), side - dis * 4);
  }
}

function drawLiveVectors(posX, posY) {
  // const posX=300
  // const posY=300
  const v0 = createVector(posX, posY);
  const v1 = createVector(mouseX, mouseY);
  const v2 = p5.Vector.sub(v1, v0);
  const v3 = createVector(mouseX, posY);
  const v4 = p5.Vector.sub(v3, v0);
  const v5 = p5.Vector.sub(v2, v4);

  // drawArrow(v0,v2,"blue")
  // drawArrow(v0,v4,"red")
  // drawArrow(v3,v5,"black")
  const angle = v2.heading();

  return angle;
}
const input1 = document.getElementById("tileCount");
input1.addEventListener("change", (e) => {
  let value = e.target.value;
  console.log(value);
  tileCount = value;
});
const input2 = document.getElementById("number");
input2.addEventListener("change", (e) => {
  let value = e.target.value;
  console.log(value);
  number = value;
});
const input3 = document.getElementById("gap");
input3.addEventListener("change", (e) => {
  let value = e.target.value;
  console.log(value);
  gap = value;
});
const input4 = document.getElementById("stroke");
input4.addEventListener("change", (e) => {
  let value = e.target.value;
  console.log(value);
  strokeWidth = value;
});
