import { describe, expect, test } from "@jest/globals";
import { Gameboard } from "./gameboard.js";
import { Ship } from "../ship/ship.js";

describe("Gameboard Class", () => {
  describe("Ship Placement", () => {
    test("Ships can be placed vertically and horizontally", () => {
      const shipOne = new Ship(5);
      const shipTwo = new Ship(3);
      const gameboard = new Gameboard();

      gameboard.placeShip(shipOne, [0, 0], "vertically");
      gameboard.placeShip(shipTwo, [4, 4], "horizontally");

      const expectedPositions = [
        //Vertical placement
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        //Horizontal placement
        [4, 4],
        [4, 5],
        [4, 6],
      ];

      expectedPositions.forEach(([row, col]) => {
        expect(gameboard.grid[row][col]).toBeInstanceOf(Ship);
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
    test("Throws an error for overlapping ships", () => {
      const shipOne = new Ship(5);
      const shipTwo = new Ship(3);
      const gameboard = new Gameboard();

      expect(() => {
        gameboard.placeShip(shipOne, [0, 0], "vertically");
        gameboard.placeShip(shipTwo, [0, 0], "horizontally");
      }).toThrow("Overlapping ships are not allowed");
    });
  });
});
