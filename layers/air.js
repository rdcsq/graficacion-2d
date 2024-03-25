let progressBottom = [
  { x: 50, progress: 0.3 },
  { x: 550, progress: 0.5 },
  { x: 1000, progress: -0.3 },
  { x: 1300, progress: 0.1 },
  { x: 1600, progress: 0.25 },
  { x: 100, progress: 0.35 },
  { x: 650, progress: 0.12 },
  { x: 1100, progress: -0.12 },
  { x: 1350, progress: 0.39 },
  { x: 1600, progress: 0.85 },
];

let progressLeft = [
  { y: 278, progress: 0.3 },
  { y: 351, progress: 0.5 },
  { y: 432, progress: -0.3 },
  { y: 553, progress: 0.1 },
  { y: 675, progress: 0.25 },
  { y: 732, progress: 0.35 },
  { y: 837, progress: 0.12 },
  { y: 918, progress: -0.12 },
  { y: 958, progress: 0.39 },
  { y: 999, progress: 0.85 },
];

let progressRight = [
  { y: 278, progress: 0.3 },
  { y: 351, progress: 0.5 },
  { y: 432, progress: -0.3 },
  { y: 553, progress: 0.1 },
  { y: 675, progress: 0.25 },
  { y: 732, progress: 0.35 },
  { y: 837, progress: 0.12 },
  { y: 918, progress: -0.12 },
  { y: 958, progress: 0.39 },
  { y: 999, progress: 0.85 },
];

// warning: do not read :)
function drawSpeedDots() {
  push();
  beginClip();
  for (const element of progressBottom) {
    if (element.progress >= 1) {
      progressBottom = progressBottom.filter((i) => i.progress < 1);
      progressBottom.push({ x: Math.floor(Math.random() * width), progress: -0.3 });
    }

    const topLeftX = map(element.progress, 0, 1, width / 2, element.x, true);
    const topRightX = map(element.progress, 0, 1, width / 2, element.x + 150, true);
    const topY = map(element.progress, 0, 1, height / 2, height, true);

    const bottomLeftX = map(element.progress + 0.3, 0, 1, width / 2, element.x, true);
    const bottomRightX = map(element.progress + 0.3, 0, 1, width / 2, element.x + 100, true);
    const bottomY = map(element.progress + 0.3, 0, 1, height / 2, height, true);
    quad(topLeftX, topY, topRightX, topY, bottomRightX, bottomY, bottomLeftX, bottomY);
    element.progress += 0.06;
  }

  const maxHeight = height / 4;
  for (const element of progressLeft) {
    if (element.progress >= 1) {
      progressLeft = progressLeft.filter((i) => i.progress < 1);
      progressLeft.push({ y: Math.floor(Math.random() * (maxHeight * 3) + maxHeight), progress: -0.3 });
    }

    const startX = map(element.progress, 0, 1, width / 2, 0, true);
    const endX = map(element.progress + 0.3, 0, 1, width / 2, 0, true);

    const topRightY = map(element.progress, 0, 1, height / 2, element.y, true);
    const bottomRightY = map(element.progress, 0, 1, height / 2, element.y + 150, true);

    const topLeftY = map(element.progress + 0.3, 0, 1, height / 2, element.y, true);
    const bottomLeftY = map(element.progress + 0.3, 0, 1, height / 2, element.y + 150, true);
    quad(startX, topRightY, startX, bottomRightY, endX, bottomLeftY, endX, topLeftY);
    element.progress += 0.06;
  }

  for (const element of progressRight) {
    if (element.progress >= 1) {
      progressRight = progressRight.filter((i) => i.progress < 1);
      progressRight.push({ y: Math.floor(Math.random() * (maxHeight * 3) + maxHeight), progress: -0.3 });
    }

    const startX = map(element.progress, 0, 1, width / 2, width, true);
    const endX = map(element.progress + 0.3, 0, 1, width / 2, width, true);

    const topRightY = map(element.progress, 0, 1, height / 2, element.y, true);
    const bottomRightY = map(element.progress, 0, 1, height / 2, element.y + 150, true);

    const topLeftY = map(element.progress + 0.3, 0, 1, height / 2, element.y, true);
    const bottomLeftY = map(element.progress + 0.3, 0, 1, height / 2, element.y + 150, true);
    quad(startX, topRightY, startX, bottomRightY, endX, bottomLeftY, endX, topLeftY);
    element.progress += 0.06;
  }
  endClip();
  image(dottedTextureSemitransparent, 0, 0, width, height);
  pop();
}
