import { easeInOutQuint } from '../utils/easings.js';
import { dottedTexture } from './dotted.js';

let sunJumpFrame = 0;
let sunOuterRingOffset = 0;

const sunDiameter = 150;

const strokeWeight = 20;
const strokeYOffset = strokeWeight / 2;

let sunRayWidths = [
  [sunDiameter - 10, 80],
  [sunDiameter + 100, 200],
  [sunDiameter + 330, 80],
];

export function drawSun() {
  const centerX = width / 2;
  const centerY = height / 2;

  if (sunJumpFrame == 30) {
    sunJumpFrame = 0;
  }

  sunJumpFrame += 1;

  if (sunJumpFrame < 10) {
    sunOuterRingOffset = map(easeInOutQuint(map(sunJumpFrame, 0, 10, 0, 1)), 0, 1, 0, 30);
  } else if (sunJumpFrame < 15) {
    sunOuterRingOffset = map(easeInOutQuint(map(sunJumpFrame, 10, 15, 1, 0)), 1, 0, 30, 0);
  } else {
    sunOuterRingOffset = 0;
    sunRayWidths = [
      [sunDiameter - 10, 80],
      [sunDiameter + 100, 200],
      [sunDiameter + 330, 80],
    ];
  }

  // draw big circle, then remove the center
  // because i cant clip using a stroke
  push();
  ellipseMode(CENTER);

  beginClip();
  circle(centerX, centerY, sunDiameter + 70 + sunOuterRingOffset);
  endClip();

  beginClip({ invert: true });
  circle(centerX, centerY, sunDiameter + 40 + sunOuterRingOffset);
  endClip();

  image(dottedTexture, 0, 0, width, height);
  pop();

  // draw the inner circle and sun rays
  push();

  beginClip();
  circle(centerX, centerY, sunDiameter);
  endClip();

  image(dottedTexture, 0, 0, width, height);
  pop();

  push();
  beginClip();
  push();
  angleMode(DEGREES);
  translate(centerX, centerY);
  for (let i = 0; i < 18; i++) {
    rotate(20);
    fill(255, 255, 255);
    rect(sunRayWidths[0][0], -strokeYOffset, sunRayWidths[0][1], strokeWeight, 100, 100, 100, 100);
    rect(sunRayWidths[1][0], -strokeYOffset, sunRayWidths[1][1], strokeWeight, 100, 100, 100, 100);
    rect(sunRayWidths[2][0], -strokeYOffset, sunRayWidths[2][1], strokeWeight, 100, 100, 100, 100);
  }
  pop();
  endClip();

  image(dottedTexture, 0, 0, width, height);
  pop();
}
