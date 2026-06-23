export class Gameboard {
  constructor() {
    this.grid = Array.from({ length: 10 }, () => Array(10).fill(0));
  }

  placeShip(ship, coordinate, direction) {
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
}
