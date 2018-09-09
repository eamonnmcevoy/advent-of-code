class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 0;
  }

  rotate() {
    this.direction = this.direction === 3
      ? 0
      : this.direction + 1;
  }

  move() {
    switch (this.direction) {
      case 0: //right
        this.x++;
        break;
      case 1: //up
        this.y++;
        break;
      case 2: //left
        this.x--;
        break;
      case 3: //down
        this.y--;
        break;
    };
  }
}

class Grid {

  constructor(size) {
    const getArr = (s, val) => [...Array(s)].map(i => val);
    const get2DArr = s => [...Array(s)].map(i => getArr(s, 0));

    this.size = size;
    this.data = get2DArr(this.size);
  }

  draw() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i].join(','));
    }
    console.log('');
  }

  sumNeighbours(x, y) {
    return this.data[x + 1][y] +
      this.data[x - 1][y] +
      this.data[x - 1][y + 1] +
      this.data[x][y + 1] +
      this.data[x + 1][y + 1] +
      this.data[x - 1][y - 1] +
      this.data[x][y - 1] +
      this.data[x + 1][y - 1];
  }

  setPoint(x, y, value) {
    this.data[x][y] = value;
  }

}

const target = 277678;
const gridSize = 12;

let nextValue = 1;
let stride = 1;

const grid = new Grid(gridSize);
const mid = Math.floor(gridSize/2);
const turtle = new Turtle(mid, mid);

grid.setPoint(turtle.x, turtle.y, nextValue);

function run() {
  while (nextValue < target) {
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < stride; i++) {
        turtle.move();
        nextValue = grid.sumNeighbours(turtle.x, turtle.y);
        grid.setPoint(turtle.x, turtle.y, nextValue);

        if (nextValue > target)
          return nextValue;
      }
      turtle.rotate();
    }
    stride++;
  }
}


console.log(run());
