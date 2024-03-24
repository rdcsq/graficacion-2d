export const mountains = [];

function createMountainTexture(color) {
  const texture = createGraphics(1000, 1000);
  texture.beginClip();
  texture.noStroke();
  texture.triangle(0, 1000, 1000, 1000, 500, 0);
  texture.endClip();

  texture.fill(color);
  texture.rect(0, 0, 1000, 1000);

  texture.beginClip();
  texture.fill(255, 255, 255, 40);
  for (let i = 0; i < 25; i++) {
    texture.rect(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 150), Math.floor(Math.random() * 1000));
  }
  texture.endClip();

  texture.rect(0, 0, 1000, 1000);
  return texture;
}

export function setupMountains() {
  [color(36, 51, 38), color(71, 108, 66), color(117, 132, 76), color(71, 108, 66), color(57, 92, 97), color(118, 145, 149)].forEach((c) => {
    mountains.push(createMountainTexture(c));
    mountains.push(createMountainTexture(c));
  });
  mountains.reverse();
}
