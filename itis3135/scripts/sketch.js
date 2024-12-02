let symmetry = 6;
let angle = 360 / symmetry;

function setup() {
  describe(
    `Dark grey canvas that reflects the lines drawn within it in ${symmetry} sections.`
  );
  createCanvas(720, 400);
  angleMode(DEGREES);
  background(50);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    if (mouseIsPressed === true) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke(255);
        strokeWeight(3);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}