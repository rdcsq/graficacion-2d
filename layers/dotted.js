let dottedTexture;
let dottedTextureSemitransparent;

function createDottedTexture() {
  dottedTexture = createGraphics(width, height);
  dottedTextureSemitransparent = createGraphics(width, height);

  dottedTexture.ellipseMode(CORNER);
  dottedTextureSemitransparent.ellipseMode(CORNER);
  dottedTexture.noStroke();
  dottedTextureSemitransparent.noStroke();
  dottedTexture.fill(255, 255, 255);
  dottedTextureSemitransparent.fill(255, 255, 255, 127);

  for (let i = 0; i < width / 8; i++) {
    for (let j = 0; j < height / 8; j++) {
      dottedTexture.circle(i * 8 + 4 * (j % 2), j * 8, 5);
      dottedTextureSemitransparent.circle(i * 8 + 4 * (j % 2), j * 8, 5);
    }
  }
}
