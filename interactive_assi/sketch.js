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
  createCanvas(400, 400);
  square_size = width / 8;
  kingimg = image("/assets/king.png")
}

function draw() {
  background(220);
  background(220);
  
  
  
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







