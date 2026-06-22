export class Gameboard {
  constructor() {
    this.grid = Array.from({ length: 10 }, () => Array(10).fill(0));
  }

  placeShipVertically(ship, coordinate) {
    let [x, y] = coordinate;

    for (let i = 0; i < ship.length; i++) {
      this.grid[x++][y] = ship;
    }
  }
  placeShipHorizontally(ship, coordinate) {
    let [x, y] = coordinate;

    for (let i = 0; i < ship.length; i++) {
      this.grid[x][y++] = ship;
    }
  }
}
