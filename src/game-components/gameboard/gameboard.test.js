import { describe, expect, test } from "@jest/globals";
import { Gameboard } from "./gameboard.js";
import { Ship } from "../ship/ship.js";

describe("Gameboard Class", () => {
  describe("Ship Placement", () => {
    test("Ships can be placed vertically", () => {
      const ship = new Ship(5);
      const gameboard = new Gameboard();

      gameboard.placeShipVertically(ship, [0, 0]);

      const expectedPositions = [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
      ];

      expectedPositions.forEach(([row, col]) => {
        expect(gameboard.grid[row][col]).toBe(ship);
      });
    });
    test("Ships can be placed horizontally", () => {
      const ship = new Ship(5);
      const gameboard = new Gameboard();

      gameboard.placeShipHorizontally(ship, [0, 0]);

      const expectedPositions = [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
      ];

      expectedPositions.forEach(([row, col]) => {
        expect(gameboard.grid[row][col]).toBe(ship);
      });
    });
    test("Throws an error for out of bound ships", () => {
      const ship = new Ship(5);
      const gameboard = new Gameboard();

      expect(() => {
        gameboard.placeShipHorizontally(ship, [10, 10]);
      }).toThrow("Ship is out of bounds");

      expect(() => {
        gameboard.placeShipVertically(ship, [6, 6]);
      }).toThrow("Ship is out of bounds");
    });
  });
});
