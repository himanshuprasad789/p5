// const {sketch} = require("p5js-wrapper");
import {sketch} from 'p5js-wrapper';

  const gap = 4;
  // console.log();
   sketch.setup=()=> {
    colorMode(HSB)
    // noCursor()
     const colNumbers = windowHeight / gap;
     createCanvas(windowWidth, windowHeight);
     // background("white");
    //  lines()
    // //  translate(100,10)
    // rotate(0.01)
    //  lines()
    
    // translate()
  }
  sketch.draw=()=> {
    background("white")
    strokeCap("square");
     lines();
    // rotate(random(0,1))
    rotate(random(-.003,.003))
    lines();
   }
  function lines() {
    const colNumbers = windowHeight / gap;

    for (let i = 0; i < int(colNumbers) + 1; i++) {
      strokeWeight(2);
      line(0, gap * i, width , gap * i);
    }
  }

