class Simulation {
  constructor(arr) {
    this.current =
      cells[
        index(Math.floor(settings.cols / 2), Math.floor(settings.rows / 2))
      ];
    this.direction = 2; //top 1, right 2, bottom 3, left 4
    this.current.active = 1;
  }
  moveUp() {
    let up = cells[index(this.current.row - 1, this.current.col)];
    if(up) this.current = up;
  }

  moveRight() {
    let right = cells[index(this.current.row, this.current.col + 1)];
    if(right) this.current = right;
  }

  moveDown() {
    let down = cells[index(this.current.row + 1, this.current.col)];
    if (down) this.current = down;
  }

  moveLeft() {
    let left = cells[index(this.current.row, this.current.col - 1)];
    if (left) this.current = left;
  }

  run() {
    if (this.current.active == 1) {
      this.current.active *= -1;
      if (this.direction == 1) {
        this.direction = 4;
      } else {
        this.direction--;
      }
    } else {
      this.current.active *= -1;
      if (this.direction == 4) {
        this.direction = 1;
      } else {
        this.direction++;
      }
    }

    switch (this.direction) {
      case 1:
        this.moveUp();
        break;
      case 2:
        this.moveRight();
        break;
      case 3:
        this.moveDown();
        break;
      case 4:
        this.moveLeft();
        break;

      default:
        break;
    }
  }
}
