/* eslint-disable prettier/prettier */
function windowResized() {
  resizeCanvas(windowWidth * 0.95, windowHeight * 0.9);
}

let arr = [];
let barState = [];
const bSort = bubbleSort();
let barWidth = 0;
let barNum = 40;
// it actually just refreshes the page
function resetSort() {
  window.location.reload();
}

function setup() {
  let button = createButton("Generate new array");
  button.mousePressed(resetSort);
  button.position((windowWidth * 0.95) / 2, windowHeight * 0.05);
  button.size(200, 50);

  createCanvas(windowWidth * 0.95, windowHeight * 0.95);

  strokeWeight(3);
  frameRate(30);

  barWidth = width / barNum;

  arr = new Array(barNum).fill();
  arr = arr.map(function () {
    return Math.random(100);
  });

  for (let i = 0; i < arr.length; i++) {
    barState[i] = -1;
  }
}

// used a generator to be able to show the animation
function* bubbleSort() {
  let temp = 0;
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    isSorted = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = false;
      }
      barState[j + 1] = 0;
      barState[j] = -1;
      yield;
    }
    if (isSorted) break;
  }
  return arr;
}

function draw() {
  background("rgba(0%,0%,0%,0.25)");

  for (let i = 0; i < arr.length; i++) {
    let barHeight = map(arr[i], 0, 1, 0, height);
    rect(i * barWidth, height, barWidth, -barHeight);

    if (barState[i] === 0) {
      fill("orange");
    } else {
      fill("grey");
    }
  }

  // if sorting is finished stops drawing
  if (bSort.next().done) {
    noLoop();
  }
}
