/// <reference path="./_libs/p5.global.d.ts" />
/// <reference path="./utils/easings.d.ts" />
/// <reference path="./layers/air.d.ts" />
/// <reference path="./layers/car.d.ts" />
/// <reference path="./layers/dotted.d.ts" />
/// <reference path="./layers/ground.d.ts" />
/// <reference path="./layers/mountain.d.ts" />
/// <reference path="./layers/rin.d.ts" />
/// <reference path="./layers/sea.d.ts" />
/// <reference path="./layers/sun.d.ts" />

function setup() {
  createCanvas(1920, 1080);
  frameRate(15); // imagine using delta times lmao

  createSeaTexture();
  createDottedTexture();
  createRoadTexture();

  setupSea();
  setupMountains();
}

let frames = 0;
let generalYoffset = 0;

let carOffsetY = 0;
let rinOffsetY = 0;

function draw() {
  carOffsetY = carOffsetY == 0 ? 1 : 0;
  rinOffsetY = rinOffsetY == 0 ? 1 : 0;

  if (frames < 60) {
    // stay
  } else if (frames < 120) {
    // moving up
    generalYoffset = map(easeInOutSine(map(frames, 60, 120, 0, 1)), 0, 1, 0, 100);
  } else if (frames < 180) {
    // stay
  } else if (frames < 240) {
    // moving down
    generalYoffset = map(easeInOutSine(map(frames, 180, 240, 1, 0)), 1, 0, 100, 0);
  } else {
    // reset
    frames = 0;
  }

  frames++;

  background(145, 215, 233);

  // sun
  push();
  translate(0, -400 + generalYoffset / 2);
  drawSun();
  pop();

  // sea
  push();
  translate(0, 500 + generalYoffset / 4);
  drawSea();
  pop();

  // ground + dots + mounains
  push();
  translate(map(generalYoffset, 0, 150, 0, -50), 100 + generalYoffset);
  scale(map(generalYoffset, 0, 150, 1, 1.05));
  drawGround();

  // :s
  mountains.forEach((mountain, index) => {
    if (index % 2 == 0) {
      image(mountain, 260 - index * 171, 90 + index * -60, 700 + index * 100, 450 + index * 100);
    } else {
      image(mountain, 960 - (index - 1) * -71, 90 + (index - 1) * -60, 700 + (index - 1) * 100, 450 + (index - 1) * 100);
    }
  });

  drawSpeedDots();
  pop();

  push();
  translate(597, 599 + carOffsetY + generalYoffset);
  drawCar();
  pop();

  push();
  translate(1100, 750 + rinOffsetY + generalYoffset);
  drawShimaRin();
  pop();
}

window.setup = setup;
window.draw = draw;
