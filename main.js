//GLOBAL VARIABLES
let canvas;
var settings;
var cellWidth;
var cellHeight;

var cells = [];
var sim;

function setup() {

    settings = {
        w: 900,
        h: 900,
        cols: 150,
        rows: 150
      };

      cellWidth = settings.w / settings.cols;
      cellHeight = settings.h / settings.rows;

  canvas = createCanvas(settings.w + 1, settings.h + 1);
  for (let i = 0; i < settings.w; i += cellWidth) {
    for (let j = 0; j < settings.h; j += cellHeight) {
      cells.push(new Cell(i, j, cellWidth, cellHeight));
    }
  }
  sim = new Simulation();
  //for(let i = 0; i < 13000; i++){
    //sim.run();
  //}
}

function draw() {
  background(255);
  for (let i = 0; i < cells.length; i++) {
    cells[i].display();
  }
  sim.run();
}