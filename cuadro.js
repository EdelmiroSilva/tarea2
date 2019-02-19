function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(150, 150, 100, 100);
  if (mouseIsPressed) {
    if (mouseX > 150) {
      if (mouseX < 250) {
        if (mouseY > 150) {
          if (mouseY < 250) {

            background(0, 255, 0);
          }
        }
      }
    }
    rect(150, 150, 100, 100);
    console.log(mouseX, mouseY)
  }
}
