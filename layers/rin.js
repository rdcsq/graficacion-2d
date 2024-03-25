function drawShimaRin() {
  push();
  noStroke();

  // wheel
  fill(45, 46, 52);
  rect(74, 312, 111, 20);

  // bottom
  push();
  beginClip();
  rect(65, 238, 131, 76, 300, 300, 20, 20);
  endClip();
  fill(111, 164, 201);
  rect(65, 238, 131, 76, 300, 300, 20, 20);

  fill(255, 255, 255);
  rect(93, 236, 77, 90, 0, 0, 90, 90);

  fill(188, 69, 69);
  rect(107, 272, 44, 29, 200, 200, 0, 0);
  pop();

  // lights
  fill(188, 69, 69);
  circle(188, 282, 23);
  circle(74, 282, 23);

  // head
  push();
  beginClip();
  rect(91, 55, 72, 56, 100, 100, 20, 20);
  endClip();

  fill(217, 217, 217);
  rect(91, 55, 72, 56, 100, 100, 20, 20);
  fill(131, 135, 173);
  rect(115, 55, 2, 60);
  rect(140, 55, 2, 60);

  fill(127, 127, 127);
  rect(126, 55, 5, 60);
  rect(105, 55, 2, 60);
  rect(150, 55, 2, 60);
  pop();

  // rin !
  fill(44, 125, 166);
  beginShape();
  vertex(66, 194);
  vertex(50, 174);
  vertex(58, 150);
  vertex(64, 150);
  vertex(63, 145);
  vertex(72, 131);
  vertex(79, 131);
  vertex(83, 121);
  vertex(96, 110);
  vertex(163, 105);
  vertex(175, 121);
  vertex(175, 135);
  vertex(188, 133);
  vertex(203, 158);
  vertex(201, 175);
  vertex(190, 194);
  endShape(CLOSE);

  fill(74, 155, 196);
  triangle(72, 131, 96, 143, 79, 131);
  triangle(154, 145, 175, 135, 188, 133);
  triangle(79, 163, 64, 150, 58, 150);
  triangle(201, 154, 203, 158, 182, 168);

  // bag
  fill(189, 160, 84);
  rect(61, 190, 135, 57, 20, 20, 20, 20);
  // bag bands
  fill(51, 67, 54);
  rect(95, 190, 14, 57, 5, 5, 5, 5);
  rect(149, 190, 14, 57, 5, 5, 5, 5);
  pop();
}
