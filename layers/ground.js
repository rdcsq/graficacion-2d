let roadTexture;

function createRoadTexture() {
  roadTexture = createImage(1, height / 2);
  roadTexture.loadPixels();

  let c;
  for (let i = 0; i < roadTexture.height; i++) {
    c = map(i, 0, roadTexture.height, 200, 127);
    roadTexture.set(0, i, color(c, c, c));
  }
  roadTexture.updatePixels();
}

function drawGround() {
  push();

  image(roadTexture, 0, height / 2, width, height);

  noStroke();
  fill(80, 100, 90);
  triangle(0, height / 2, width / 2, height / 2, 0, height);
  triangle(width, height / 2, width / 2, height / 2, width, height);

  fill(200, 200, 200);
  triangle(100, height, 300, height, width / 2, height / 2);
  triangle(1050, height, 1200, height, width / 2, height / 2);
  triangle(1050, height, 1400, height, width / 2, height / 2);
  triangle(1600, height, 1900, height, width / 2, height / 2);

  pop();
}
