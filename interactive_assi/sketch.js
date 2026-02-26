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

let white_king_pos;


function setup() {
  pawnimg = loadImage("assets/pawn.png");
  kingimg = loadImage("assets/king.png");
  queenimg = loadImage("assets/queen.png");
  knightimg = loadImage("assets/knight.png");
  bishopimg = loadImage("assets/bishop.png");
  rookimg = loadImage("assets/rook.png");
  
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  check_widthorheight();
  draw_board();
  
  make_board();
  


}

function make_board(){
  image(kingimg,0,0,square_size,square_size);
}



function draw_board(){
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

function check_widthorheight(){
  if (height < width){
    square_size = height / 8;
  }
  else{
    square_size = width /8;
  }
}





