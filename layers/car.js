function drawCar() {
  push();
  noStroke();

  fill(46, 55, 59);
  beginShape();
  vertex(79, 310);
  vertex(135, 326);
  vertex(131, 371);
  vertex(106, 380);
  vertex(84, 371);
  endShape(CLOSE);

  fill(46, 55, 59);
  beginShape();
  vertex(373, 309);
  vertex(317, 324);
  vertex(321, 370);
  vertex(346, 378);
  vertex(368, 370);
  endShape(CLOSE);

  fill(216, 180, 87);
  beginShape();
  vertex(93, 67);
  vertex(68, 200);
  vertex(68, 300);
  vertex(87, 335);
  vertex(123, 335);
  vertex(129, 330);
  vertex(325, 330);
  vertex(327, 335);
  vertex(362, 335);
  vertex(386, 300);
  vertex(382, 200);
  vertex(357, 67);
  endShape(CLOSE);

  fill(55, 73, 84);
  beginShape();
  vertex(113, 310);
  vertex(338, 310);
  vertex(332, 337);
  vertex(116, 337);
  endShape(CLOSE);

  fill(25, 25, 25);
  beginShape();
  vertex(111, 87);
  vertex(345, 87);
  vertex(361, 195);
  vertex(92, 195);
  endShape(CLOSE);

  fill(188, 69, 69);
  circle(360, 275, 16);
  circle(90, 275, 16);

  rect(68, 220, 85, 24, 0, 100, 100, 0);
  rect(298, 220, 85, 24, 100, 0, 0, 100);

  fill(255, 255, 255);
  rect(191, 252, 72, 34, 10, 10, 10, 10);
  pop();
}
