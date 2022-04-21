var y = 500;
var sunRise = 1;
//var plane = 1;
var x = 1;
var speed = 1;

function setup() {
  createCanvas(500, 500);
}

draw = function () {
  //morning sky
  background(253, 127, 255);

  //sun rise
  strokeWeight(1);
  stroke(245, 112, 68);
  fill(250, 158, 20);
  ellipse(200, y, 150, 150);

  //city landscape
  strokeWeight(3);
  stroke(157, 10, 194);
  fill(0);
  rect(10, 420, 50, 100);
  rect(65, 400, 20, 500);
  rect(100, 430, 20, 500);
  triangle(156, 280, 186, 550, 133, 550);
  rect(200, 420, 50, 100);
  rect(275, 430, 20, 500);
  rect(300, 400, 20, 500);
  rect(350, 420, 50, 100);
  rect(420, 390, 70, 200);

  // sun movement to the sky
  y = y + sunRise;

  if (y >= 50) {
    sunRise = -1;
  }
  if (y < 100) {
    sunRise = 0;
  }

  // airplane
  strokeWeight(1);
  stroke(5, 0, 0);
  fill(255, 0, 115);
  ellipse(x + -45, 190, 10, 20); //tail
  ellipse(x + 25, 195, 30, 15); //cockpit
  ellipse(x - 5, 205, 20, 50); //wings
  ellipse(x, 200, 100, 20); //plane body
  fill(10);
  ellipse(x + 55, 200, 3, 25); //propellar
  //plane wheels
  fill(77, 66, 66);
  ellipse(x + 15, 216, 15, 15); //front
  ellipse(x + -40, 210, 8, 8); //rear

  x = x + 1;

  //alternative plane movement
  /* x = x + speed; 

  if (x > 500) {
    speed = -1;
  }
  if (x < 0) {
    speed = 1;
  } */

  // fog loop
  for (var f = 80; f < 800; f++) {
    stroke(247, 242, 242);
    fill(247, 242, 242);
    ellipse(f, 330, 178, 26);
    ellipse(f, 328, 47, 47);
    //ellipse(100, 336, 31, 31);
    //ellipse(60, 316, 40, 39);

    f = f + 190;

    for (var i = 60; i < 800; i++) {
      ellipse(i, 336, 31, 31);
      //ellipse(100, 316, 40, 39);

      i = i + 190;
    }
  }
};
