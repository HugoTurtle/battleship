import { describe, expect, test } from "@jest/globals";
import { Gameboard } from "./gameboard.js";
import { Ship } from "../ship/ship.js";

describe("Gameboard Class", () => {
    test("Ships can be placed vertically", () => {
        const ship = new Ship(5);
        const gameboard = new Gameboard();

        gameboard.placeShipVertically(ship, [0,0]);

        const expectedPositions = [
            [0,0],
            [1,0],
            [2,0],
            [3,0],
            [4,0]
        ]
        
        expectedPositions.forEach(([row,col]) => {
            expect(gameboard.grid[row][col]).toBe(ship);
        })
    })
})