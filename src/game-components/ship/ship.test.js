import { expect, test } from "@jest/globals";
import { Ship } from "./ship.js";

test("ship stores its length", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
})
test("ship can be hit", () => {
    const ship = new Ship(5);
    ship.hit();
    expect(ship.hits).toBe(1);
})