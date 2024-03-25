let seaTexture;

function createSeaTexture() {
  seaTexture = createImage(1, height / 4);

  const startColor = color(51, 113, 158);
  const endColor = color(110, 170, 208);

  for (let i = 0; i < seaTexture.height / 2; i++) {
    seaTexture.set(0, i, lerpColor(startColor, endColor, map(i, 0, seaTexture.height / 2, 0, 1)));
  }
  for (let i = seaTexture.height / 2; i < seaTexture.height; i++) {
    seaTexture.set(0, i, endColor);
  }
  seaTexture.updatePixels();
}

const rectangles = [];

function setupSea() {
  while (rectangles.length < 25) {
    rectangles.push({
      x: Math.floor((Math.random() * width) / 3) + width / 3,
      y: Math.floor(Math.random() * 200),
      width: Math.floor(Math.random() * 50 + 30),
      height: Math.floor(Math.random() * 10) + 10,
      opacity: Math.floor(Math.random() * 255),
    });
  }
}

function drawSea() {
  push();

  image(seaTexture, 0, 0, width, height / 4);

  noStroke();
  for (const element of rectangles) {
    element.opacity -= 10;
    fill(255, 255, 255, element.opacity);
    rect(element.x, element.y, element.width, element.height);

    if (element.opacity <= 0 && frameCount % 3 == 0) {
      element.opacity = 255;
    }
  }
  pop();
}
