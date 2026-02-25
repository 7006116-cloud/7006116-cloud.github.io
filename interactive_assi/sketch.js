// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let square_size;


let pawnimg;
let kingimg;
let queenimg;
let knightimg;
let bishopimg;
let rookimg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  square_size = height / 8;
  // kingimg = image("/assets/king.png");
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 0) {
        fill(255);
      } else {
        fill(100); 
      }
      rect(col * square_size, row * square_size, square_size, square_size);
    }
  }
}

function draw() {
}







