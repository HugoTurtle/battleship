export class Gameboard {
  constructor() {
    this.grid = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.missedAttacks = new Set();
  }

  placeShip(ship, coordinate, direction) {
    if (this.isOverlapping(ship, coordinate, direction)) {
      throw new Error("Overlapping ships are not allowed");
    }
    direction === "vertically"
      ? this.placeShipVertically(ship, coordinate)
      : this.placeShipHorizontally(ship, coordinate);
  }
  placeShipVertically(ship, coordinate) {
    let [x, y] = coordinate;

    if (x + ship.length - 1 > 9) {
      throw new RangeError("Ship is out of bounds");
    }

    for (let i = 0; i < ship.length; i++) {
      this.grid[x++][y] = ship;
    }
  }
  placeShipHorizontally(ship, coordinate) {
    let [x, y] = coordinate;

    if (y + ship.length - 1 > 9) {
      throw new RangeError("Ship is out of bounds");
    }

    for (let i = 0; i < ship.length; i++) {
      this.grid[x][y++] = ship;
    }
  }
  isOverlapping(ship, [x, y], direction) {
    if (direction === "vertically") {
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x++][y] !== 0) {
          return true;
        }
      }
    } else if (direction === "horizontally") {
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x][y++] !== 0) {
          return true;
        }
      }
    }
  }
  receiveAttack([row, column]) {
    let target = this.grid[row][column];

    if (target === 0) {
      this.missedAttacks.add(target);
      return false;
    }
    target.hit();
    return true;
  }
}
