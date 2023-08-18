// const {sketch} = require("p5js-wrapper");
import {sketch} from 'p5js-wrapper';

  const gap = 5;
  console.log();
   sketch.setup=()=> {
    const colNumbers = windowHeight / gap;
    createCanvas(windowHeight, windowHeight);
    background("white");
    strokeCap("square");
   
    lines(colNumbers);
    // translate()
  }
   sketch.draw=()=> {

   }
  function lines(colNumbers) {
    for (let i = 1; i < int(colNumbers) + 1; i++) {
      strokeWeight(3);
      line(gap, gap * i, width - gap, gap * i);
    }
  }

