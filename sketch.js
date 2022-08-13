let objects = [];

function setup() {
  createCanvas(960, 720);
  colorMode(HSB, 255);
  generateRandomObjs(20);
  console.log(objects);
}

function draw() {
  background(0);
  moveObjs();
  collideWithWalls();
  drawAllObjs();
}

function generateRandomObjs(count) {
  for (let i = 0; i < count; i++) {
    objects.push({x: rnd('x'), y: rnd('y'), vx: rnd('vx'), vy: rnd('vy'), m: rnd('m'), r: 0, c: rnd('c')});
    objects[i].r = 10 * Math.sqrt(objects[i].m);
  }
}

function rnd(type) {
  switch(type) {
    case 'x': return random(0, width);
    case 'y': return random(0, height);
    case 'vx': return random(0, 3);
    case 'vy': return random(0, 2);
    case 'm': return random(1, 9);
    case 'c': return random(0, 255);
    default: return 0;
  }
}

function nextStep() {
  
}

function moveObjs() {
  for (let o of objects) {
    o.x += o.vx;
    o.y += o.vy;
  }
}

function collideWithWalls() {
  for (let o of objects) {
    if (o.x < o.r) {
      o.vx *= -1;
      o.x = 2 * o.r - o.x;
    }
    if (o.y < o.r) {
      o.vy *= -1;
      o.y = 2 * o.r - o.y;
    }
    if (o.x > width - o.r) {
      o.vx *= -1;
      o.x = 2 * width - o.x - 2 * o.r;
    }
    if (o.y > height - o.r) {
      o.vy *= -1;
      o.y = 2 * height - o.y - 2 * o.r;
    }
  }
}

function drawAllObjs() {
  for (let o of objects) {
    stroke(o.c, 255, 255);
    fill(o.c, 255, 255);
    circle(o.x, o.y, o.r * 2);
  }
}