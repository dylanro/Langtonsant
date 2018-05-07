class Cell {
  constructor(i, j, w, h) {
    this.i = i;
    this.j = j;
    this.w = w;
    this.h = h;
    this.active = -1;
    this.col = Math.fround(this.i/this.w);
    this.row = Math.fround(this.j/this.h);
  }

  display() {
    if (this.active == 1) {
      fill('#0C4767');
    } else {
      noFill();
    }
    stroke('#0C4767');
    rect(this.i, this.j, this.w, this.h);
  }
}

function index(i, j) {
  return settings.cols * j + i;
}
