import { expect, test } from "@jest/globals";
import { Ship } from "./ship.js";

test("ship stores its length", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
})